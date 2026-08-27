'use client'

import { useId, useState } from 'react'
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { siteConfig } from '../config/site'

const ENDPOINT = 'https://api.web3forms.com/submit'
const TIMEOUT_MS = 15_000

/**
 * Public by design: a Web3Forms access key can only deliver to the address
 * verified at signup, so exposing it in a static bundle grants no capability
 * to an attacker. It still lives in an env var so it is rotatable and never
 * committed. Static export inlines NEXT_PUBLIC_* at build time.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

const LIMITS = { name: 100, email: 254, subject: 150, message: 3000 } as const

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; message: string }
  | { state: 'error'; message: string }

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const uid = useId()

  const fieldId = (name: string) => `${uid}-${name}`
  const isSubmitting = status.state === 'submitting'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: bots fill hidden fields, humans cannot see them.
    if (data.get('botcheck')) return

    if (!ACCESS_KEY) {
      setStatus({
        state: 'error',
        message: `Contact form is not configured yet. Please email ${siteConfig.email} directly.`,
      })
      return
    }

    const payload = {
      access_key: ACCESS_KEY,
      subject: `Portfolio enquiry: ${String(data.get('subject') ?? '').trim()}`,
      from_name: 'Portfolio contact form',
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      // Ensures a reply goes to the visitor rather than nowhere.
      replyto: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    }

    setStatus({ state: 'submitting' })

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      const result = (await response.json().catch(() => null)) as { success?: boolean } | null

      if (response.ok && result?.success) {
        form.reset()
        setStatus({
          state: 'success',
          message: "Thanks. Your message is on its way, and I'll get back to you shortly.",
        })
      } else {
        setStatus({
          state: 'error',
          message: `Something went wrong sending that. Please email ${siteConfig.email} directly.`,
        })
      }
    } catch {
      setStatus({
        state: 'error',
        message: `Couldn't reach the mail service. Please email ${siteConfig.email} directly.`,
      })
    } finally {
      clearTimeout(timer)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: visually hidden, never announced, never tabbable. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={fieldId('botcheck')}>Leave this field empty</label>
        <input id={fieldId('botcheck')} type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id={fieldId('name')} name="name" label="Your name" maxLength={LIMITS.name} autoComplete="name" disabled={isSubmitting} />
        <Field
          id={fieldId('email')}
          name="email"
          label="Your email"
          type="email"
          maxLength={LIMITS.email}
          autoComplete="email"
          disabled={isSubmitting}
          hint="So I can reply to you."
        />
      </div>

      <Field id={fieldId('subject')} name="subject" label="Subject" maxLength={LIMITS.subject} disabled={isSubmitting} />

      <div>
        <label htmlFor={fieldId('message')} className="block text-sm font-medium text-ink-2 mb-1.5">
          Message
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted transition-colors focus:border-accent disabled:opacity-60 resize-y"
          placeholder="A sentence or two about the role, the problem, or what you'd like to build."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary px-5 py-2.5 text-sm disabled:opacity-60">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" /> Send message
            </>
          )}
        </button>

        <p className="text-sm text-muted">
          or email{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
            {siteConfig.email}
          </a>
        </p>
      </div>

      {/* Announced to assistive tech. Plain text only, never innerHTML. */}
      <div aria-live="polite" className="min-h-[1.25rem]">
        {status.state === 'success' && (
          <p className="flex items-start gap-2 text-sm text-success">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            {status.message}
          </p>
        )}
        {status.state === 'error' && (
          <p className="flex items-start gap-2 text-sm text-danger">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  id,
  name,
  label,
  type = 'text',
  maxLength,
  autoComplete,
  disabled,
  hint,
}: {
  id: string
  name: string
  label: string
  type?: string
  maxLength: number
  autoComplete?: string
  disabled?: boolean
  hint?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-2 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted transition-colors focus:border-accent disabled:opacity-60"
      />
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted mt-1.5">
          {hint}
        </p>
      )}
    </div>
  )
}
