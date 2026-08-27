'use client'

import { useEffect, useRef } from 'react'

/** Nodes per layer. A small MLP: 4 inputs, two hidden layers, 3 outputs. */
const LAYERS = [4, 8, 8, 6, 3]
const LAYER_GAP = 2.0
const NODE_GAP = 0.98
const FOV = 9
const ROTATION_SPEED = 0.00016
/** Layers per second the activation wave travels. */
const WAVE_SPEED = 0.0011

type Node = { x: number; y: number; z: number; layer: number; phase: number }

function buildNodes(): Node[] {
  const nodes: Node[] = []
  const midLayer = (LAYERS.length - 1) / 2

  LAYERS.forEach((count, layer) => {
    const midNode = (count - 1) / 2
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: (layer - midLayer) * LAYER_GAP,
        y: (i - midNode) * NODE_GAP,
        // Deterministic depth jitter so the mesh reads as a volume, not a plane.
        z: Math.sin(layer * 2.7 + i * 1.9) * 0.85,
        layer,
        phase: layer * 1.3 + i * 0.7,
      })
    }
  })

  return nodes
}

/** Reads a design token so the canvas follows the active theme. */
function token(name: string): [number, number, number] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const [r, g, b] = raw.split(/\s+/).map(Number)
  return [r || 0, g || 0, b || 0]
}

/**
 * Ambient neural network behind the hero.
 *
 * A layered MLP rendered in Canvas 2D with a hand-rolled perspective
 * projection, plus an activation wave that propagates forward through the
 * layers, which is what an actual network does rather than geometry that merely
 * spins. Canvas rather than three.js: this is ~100 edges, and the WebGL stack
 * would cost more than the entire rest of the site.
 *
 * Renders one static frame under prefers-reduced-motion, and stops entirely
 * while off-screen or on a hidden tab.
 */
export default function NeuralNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    // Bound after the guard: the hoisted draw() below loses the narrowing.
    const ctx = context

    const nodes = buildNodes()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let accent = token('--accent')
    let signal = token('--signal')
    // A dark line on a pale ground carries far more weight than a light line
    // on a dark one, so the whole mesh is scaled down in light mode.
    let weight = document.documentElement.classList.contains('dark') ? 1 : 0.55
    let width = 0
    let height = 0
    let frame = 0
    let onScreen = true
    let elapsed = 0
    let last = 0

    const themeWatcher = new MutationObserver(() => {
      accent = token('--accent')
      signal = token('--signal')
      weight = document.documentElement.classList.contains('dark') ? 1 : 0.55
      draw(elapsed)
    })
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw(elapsed)
    }

    function project(n: Node, rotation: number, time: number) {
      const cos = Math.cos(rotation)
      const sin = Math.sin(rotation)
      const drift = Math.sin(time * 0.0004 + n.phase) * 0.07
      const rx = n.x * cos - n.z * sin
      const rz = n.x * sin + n.z * cos
      const depth = FOV / (FOV + rz)
      // Scale to the shorter axis so the mesh never crops on narrow viewports.
      const scale = Math.min(width, height * 1.6) * 0.115
      return {
        sx: width * 0.5 + rx * scale * depth,
        sy: height * 0.5 + (n.y + drift) * scale * depth,
        depth,
        rz,
      }
    }

    function draw(time: number) {
      const rotation = time * ROTATION_SPEED
      // Wave sweeps 0 -> last layer, then restarts after a short rest.
      const cycle = (LAYERS.length - 1) + 1.2
      const wave = ((time * WAVE_SPEED) % cycle)

      ctx.clearRect(0, 0, width, height)

      const points = nodes.map((n) => ({ ...project(n, rotation, time), node: n }))

      // Back to front, so nearer nodes sit over the mesh behind them.
      const ordered = [...points].sort((a, b) => b.rz - a.rz)

      const [ar, ag, ab] = accent
      const [sr, sg, sb] = signal

      // --- Edges -------------------------------------------------------
      for (const a of points) {
        if (a.node.layer >= LAYERS.length - 1) continue

        for (const b of points) {
          if (b.node.layer !== a.node.layer + 1) continue

          const depth = (a.depth + b.depth) / 2
          // A slight bow reads as organic rather than a wiring diagram.
          const mx = (a.sx + b.sx) / 2
          const my = (a.sy + b.sy) / 2 - (b.sy - a.sy) * 0.06

          ctx.strokeStyle = `rgba(${ar},${ag},${ab},${0.1 * weight * depth})`
          ctx.lineWidth = 0.7 * depth
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy)
          ctx.quadraticCurveTo(mx, my, b.sx, b.sy)
          ctx.stroke()

          const t = wave - a.node.layer
          if (t <= 0 || t >= 1) continue

          // Activation crossing this edge: a lit segment trailing a head.
          const ease = t * t * (3 - 2 * t)
          const fade = Math.sin(t * Math.PI)
          const tail = Math.max(0, ease - 0.22)

          const hx = a.sx + (b.sx - a.sx) * ease
          const hy = a.sy + (b.sy - a.sy) * ease
          const tx = a.sx + (b.sx - a.sx) * tail
          const ty = a.sy + (b.sy - a.sy) * tail

          ctx.strokeStyle = `rgba(${sr},${sg},${sb},${0.5 * weight * fade * depth})`
          ctx.lineWidth = 1.4 * depth
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(tx, ty)
          ctx.lineTo(hx, hy)
          ctx.stroke()

          ctx.fillStyle = `rgba(${sr},${sg},${sb},${0.22 * weight * fade * depth})`
          ctx.beginPath()
          ctx.arc(hx, hy, 3.6 * depth, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = `rgba(${sr},${sg},${sb},${0.95 * weight * fade * depth})`
          ctx.beginPath()
          ctx.arc(hx, hy, 1.5 * depth, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // --- Nodes -------------------------------------------------------
      for (const p of ordered) {
        const proximity = Math.max(0, 1 - Math.abs(wave - p.node.layer) * 1.5)
        const r = (2 + proximity * 1.4) * p.depth

        const cr = Math.round(ar + (sr - ar) * proximity)
        const cg = Math.round(ag + (sg - ag) * proximity)
        const cb = Math.round(ab + (sb - ab) * proximity)

        // Two-stop halo: a wide soft field, then a tighter core bloom.
        if (proximity > 0.01) {
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${0.07 * weight * proximity})`
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, r * 5.5, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = `rgba(${cr},${cg},${cb},${0.16 * weight * proximity})`
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, r * 2.6, 0, Math.PI * 2)
          ctx.fill()
        }

        // Ring plus core, so a node reads as a cell rather than a dot.
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${(0.45 + proximity * 0.5) * weight * p.depth})`
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${(0.18 + proximity * 0.35) * weight * p.depth})`
        ctx.lineWidth = 0.8 * p.depth
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r * 2.1, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const loop = (now: number) => {
      if (!last) last = now
      // Clamp the delta so a backgrounded tab doesn't fast-forward the wave.
      elapsed += Math.min(now - last, 64)
      last = now
      draw(elapsed)
      frame = requestAnimationFrame(loop)
    }

    const start = () => {
      if (frame || reduced || document.hidden || !onScreen) return
      last = 0
      frame = requestAnimationFrame(loop)
    }

    const stop = () => {
      if (!frame) return
      cancelAnimationFrame(frame)
      frame = 0
    }

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      if (onScreen) start()
      else stop()
    })

    const onVisibility = () => (document.hidden ? stop() : start())
    const resizeObserver = new ResizeObserver(resize)

    resize() // paints frame zero unconditionally
    resizeObserver.observe(canvas)
    observer.observe(canvas)
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      observer.disconnect()
      themeWatcher.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
