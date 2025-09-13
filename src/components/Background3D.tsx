'use client'

import { useEffect, useState } from 'react'

export default function Background3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Optimized neural network nodes - fewer but strategic
  const neuralNodes = [
    { x: 10, y: 15, size: 4, delay: 0 },
    { x: 25, y: 25, size: 3, delay: 0.5 },
    { x: 45, y: 20, size: 5, delay: 1 },
    { x: 65, y: 30, size: 3, delay: 1.5 },
    { x: 85, y: 20, size: 4, delay: 2 },
    { x: 15, y: 50, size: 3, delay: 2.5 },
    { x: 35, y: 60, size: 4, delay: 3 },
    { x: 55, y: 55, size: 3, delay: 3.5 },
    { x: 75, y: 65, size: 5, delay: 4 },
    { x: 90, y: 50, size: 3, delay: 4.5 },
    { x: 20, y: 80, size: 4, delay: 5 },
    { x: 40, y: 85, size: 3, delay: 5.5 },
    { x: 60, y: 90, size: 4, delay: 6 },
    { x: 80, y: 85, size: 3, delay: 6.5 }
  ]

  // Optimized connections - only key paths
  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    { from: 0, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 7 }, { from: 3, to: 8 }, { from: 4, to: 9 },
    { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 9 },
    { from: 5, to: 10 }, { from: 6, to: 11 }, { from: 7, to: 12 }, { from: 8, to: 13 },
    { from: 10, to: 11 }, { from: 11, to: 12 }, { from: 12, to: 13 }
  ]

  // Minimal floating particles for depth
  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 10
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(6, 182, 212, 0.02) 0%, transparent 100%)
          `
        }}
      />

      {/* Neural Network Visualization */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Neural connections */}
        {connections.map((conn, i) => {
          const startNode = neuralNodes[conn.from]
          const endNode = neuralNodes[conn.to]
          return (
            <line
              key={i}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.4"
              filter="url(#softGlow)"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,100;50,50;100,0"
                dur={`${3 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
            </line>
          )
        })}
        
        {/* Neural nodes */}
        {neuralNodes.map((node, i) => (
          <circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#neuralGradient)"
            filter="url(#softGlow)"
            opacity="0.8"
          >
            <animate
              attributeName="r"
              values={`${node.size};${node.size + 2};${node.size}`}
              dur="3s"
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2s"
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
          </circle>
        ))}
      </svg>

      {/* Floating particles for depth */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${8 + i % 4}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Matrix-style code rain effect */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-blue-400 whitespace-pre"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%',
              animation: `codeRain ${15 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('\n')}
          </div>
        ))}
      </div>

      {/* Subtle geometric grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 30s linear infinite'
        }}
      />

      {/* AI Brain visualization */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
        <div className="relative w-full h-full">
          {/* Brain outline */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse" />
          <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Synapses */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Deep learning layers visualization */}
      <div className="absolute bottom-1/4 left-1/4 opacity-15">
        {Array.from({ length: 4 }).map((_, layer) => (
          <div key={layer} className="flex space-x-4 mb-4">
            {Array.from({ length: 6 - layer }).map((_, node) => (
              <div
                key={node}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"
                style={{
                  animationDelay: `${layer * 0.5 + node * 0.1}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes codeRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-80px, -80px); }
        }
      `}</style>
    </div>
  )
}
