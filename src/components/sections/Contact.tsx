import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, Check, Send } from 'lucide-react'
import { profile, type SocialLink } from '@/data/profile'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/icons/SocialIcons'

const iconMap = {
  mail: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
}

function SocialButton({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon]
  return (
    <a
      href={link.href}
      target={link.icon === 'mail' ? undefined : '_blank'}
      rel={link.icon === 'mail' ? undefined : 'noreferrer'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-body shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-lift"
      aria-label={link.label}
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      const subject = encodeURIComponent(`Hello from ${name || 'your site'}`)
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      window.setTimeout(() => setStatus('idle'), 2200)
    }, 900)
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let’s talk"
          description="Curious about Bloomly, collaboration, or just want to say hi — I’m around."
          className="mb-10"
        />

        <motion.div
          className="mb-8 flex justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {profile.socials.map((link) => (
            <SocialButton key={link.id} link={link} />
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-border bg-card p-6 text-left shadow-soft sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block font-medium text-ink">Message</span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="What are you thinking about?"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sent' ? (
                <>
                  Sent
                  <Check className="h-4 w-4" />
                </>
              ) : status === 'sending' ? (
                'Sending…'
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.resumeUrl} download>
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
