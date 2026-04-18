import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-app-border bg-app-bg px-4 pb-10 pt-12 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-app-border bg-gradient-to-br from-[var(--app-footer-from)] via-[var(--app-footer-mid)] to-[var(--app-footer-to)] p-8 shadow-card-project md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <header>
              <h2 className="type-section-title font-display text-3xl font-bold text-app-fg md:text-4xl">
                Let&apos;s build something measurable.
              </h2>
              <p className="mt-4 max-w-lg text-app-muted">
                Open to internships in data science, ML engineering, and
                full-stack roles where I can pair modeling with solid software
                craft.
              </p>
            </header>
            <ul className="space-y-4 text-sm" aria-label="Contact methods">
              <li className="flex items-start gap-3 text-app-fg">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a87c]"
                  aria-hidden
                />
                <a
                  href={`mailto:${profile.email}`}
                  className="underline-offset-4 hover:text-terracotta hover:underline"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-app-fg">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a87c]"
                  aria-hidden
                />
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="underline-offset-4 hover:text-terracotta hover:underline"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-app-fg">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a87c]"
                  aria-hidden
                />
                <span>
                  {profile.location} · {profile.college}
                </span>
              </li>
            </ul>
          </div>
        </motion.article>

        <div
          className="mt-8 flex flex-col items-stretch gap-6 rounded-2xl border border-app-border bg-app-elevated/90 px-5 py-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between md:px-8"
          role="contentinfo"
          aria-label="Site information"
        >
          <p className="text-center text-xs text-app-faint sm:text-left">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-end">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-app-subtle transition hover:text-app-fg"
            >
              LinkedIn →
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
