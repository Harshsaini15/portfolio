import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 md:px-8"
    >
      <TechSectionBackdrop variant="full-stack" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
            Projects
          </p>
          <h2 className="type-section-title mt-2 font-display text-3xl font-bold text-app-fg md:text-4xl">
            Click to unpack the story
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-app-muted md:mx-0">
            Each card expands with responsibilities, bullets, and stack tags —
            built from your resume PDF.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, index) => {
            const open = openId === p.id
            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="shadow-card-project group relative overflow-hidden rounded-3xl border border-app-border bg-gradient-to-br from-[var(--app-card-fill)] to-transparent"
                style={{
                  boxShadow: open
                    ? `0 24px 80px var(--app-shadow), 0 0 0 1px ${p.accent}40`
                    : undefined,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : p.id)}
                  className="flex w-full flex-col text-left"
                  aria-expanded={open}
                >
                  <div className="flex items-start justify-between gap-4 p-6 pb-4">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: p.accent }}
                      >
                        {p.role}
                      </p>
                      <h3 className="type-heading-sm mt-2 font-display text-xl font-bold text-app-fg md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-app-muted">{p.summary}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-app-border bg-app-card-fill text-app-muted"
                    >
                      <ChevronDown className="h-5 w-5" aria-hidden />
                    </motion.span>
                  </div>

                  <div className="flex flex-wrap gap-2 px-6 pb-4">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-app-border bg-app-tag-bg px-3 py-1 text-[11px] font-medium text-app-tag-fg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="overflow-hidden border-t border-app-border"
                      style={{ background: 'var(--app-project-expanded)' }}
                    >
                      <ul className="space-y-3 p-6 pt-5 text-sm text-app-muted">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full"
                              style={{ backgroundColor: p.accent }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between px-6 pb-6">
                        <p className="text-xs text-app-faint">
                          Tap again to collapse
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-app-subtle">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Details on resume
                        </span>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition group-hover:opacity-70"
                  style={{ background: p.accent }}
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
