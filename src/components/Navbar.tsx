import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BrandLogo } from './BrandLogo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#positions', label: 'Roles' },
  { href: '#resume', label: 'Resume' },
  { href: '#skills', label: 'Skills' },
  { href: '#academics', label: 'Academics' },
  { href: '#projects', label: 'Projects' },
  { href: '#certs', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 md:px-8"
    >
      <nav
        className="shadow-nav mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-app-border bg-app-nav px-4 py-3 backdrop-blur-xl md:px-6"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta"
          aria-label="Harsh Saini — back to top"
        >
          <BrandLogo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-type rounded-full px-3 py-2 text-sm text-app-muted transition hover:bg-app-hover-overlay hover:text-app-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex rounded-xl border border-app-border p-2 text-app-fg md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-app-border bg-app-elevated/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-type block rounded-xl px-3 py-3 text-app-fg hover:bg-app-hover-overlay"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  )
}
