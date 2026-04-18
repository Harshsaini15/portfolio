import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'
import { InteractiveGradientName } from './InteractiveGradientName'
import { TechSectionBackdrop } from './TechSectionBackdrop'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
}

const fadeUpBlur = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(12px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: easeOut },
  },
}

const fadeUpSoft = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
}

const headline = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(14px)',
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 22,
      mass: 0.85,
    },
  },
}

const statGrid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const statCard = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 380, damping: 28 },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32"
    >
      <TechSectionBackdrop variant="stack-overview" />
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 z-[1] h-72 w-72 rounded-full bg-[#c45c3e]/25 blur-[100px]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: easeOut }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 z-[1] h-80 w-80 rounded-full bg-[#7c9eb8]/20 blur-[110px]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: easeOut, delay: 0.08 }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={fadeUpBlur}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-app-border bg-app-card-fill px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#c45c3e] dark:text-[#e8a87c]"
          >
            <motion.span
              animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.2,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
            </motion.span>
            Internship Portfolio
          </motion.div>

          <motion.h1
            variants={headline}
            className="hero-headline-block font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            <InteractiveGradientName className="block [font-variation-settings:'wght'_780] md:[font-variation-settings:'wght'_820]">
              {profile.name}
            </InteractiveGradientName>
            <span className="hero-headline-sub mt-1 block text-2xl text-app-muted md:mt-2 md:text-3xl">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpBlur}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-app-muted md:text-lg lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUpSoft}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#projects"
              className="type-cta group inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(196,92,62,0.35)]"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              Explore projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="type-cta inline-flex items-center rounded-full border border-app-border px-6 py-3 text-sm font-semibold text-app-fg transition-colors hover:border-terracotta/50"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              LinkedIn profile
            </motion.a>
          </motion.div>

          <motion.dl
            variants={statGrid}
            initial="hidden"
            animate="show"
            className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm sm:grid-cols-3 lg:mx-0"
          >
            {[
              {
                label: 'CGPA',
                value: (
                  <>
                    {profile.cgpa}
                    <span className="text-base font-medium text-app-subtle">
                      /{profile.cgpaScale}
                    </span>
                  </>
                ),
              },
              {
                label: 'SRM JEE',
                value: <>#{profile.jeeRank}</>,
              },
              {
                label: 'Focus',
                value: 'ML · Data · Product',
                wide: true,
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                variants={statCard}
                className={
                  card.wide
                    ? 'col-span-2 rounded-2xl border border-app-border bg-app-card-fill-soft p-4 sm:col-span-1'
                    : 'rounded-2xl border border-app-border bg-app-card-fill-soft p-4'
                }
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(196, 92, 62, 0.35)',
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
              >
                <dt className="text-app-faint">{card.label}</dt>
                <dd
                  className={
                    card.label === 'Focus'
                      ? 'mt-1 text-app-fg'
                      : 'font-display mt-1 text-2xl font-bold text-app-fg'
                  }
                >
                  {card.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.88, rotate: 2 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 20,
            delay: 0.18,
          }}
          className="relative mx-auto flex max-w-md justify-center lg:mx-0 lg:justify-end"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#c45c3e]/40 via-transparent to-[#7c9eb8]/35 blur-2xl"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: [0.45, 0.85, 0.45], scale: 1 }}
              transition={{
                opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.8, ease: easeOut },
              }}
            />
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-app-border bg-gradient-to-b from-[var(--app-card-fill)] to-transparent p-[2px] shadow-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65, ease: easeOut }}
            >
              <div
                className="relative overflow-hidden rounded-[1.85rem]"
                style={{ background: 'var(--app-hero-inner)' }}
              >
                <motion.img
                  src={profile.photoSrc}
                  alt={profile.name}
                  width={420}
                  height={520}
                  className="h-auto w-full max-w-[420px] object-cover animate-float"
                  initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.45,
                    duration: 0.85,
                    ease: easeOut,
                  }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--app-bg)]/25 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-app-border bg-app-nav px-4 py-3 text-xs text-app-muted shadow-xl backdrop-blur md:block"
              initial={{ opacity: 0, y: 20, x: -12 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                delay: 0.85,
                type: 'spring',
                stiffness: 200,
                damping: 22,
              }}
            >
              <p className="font-semibold text-app-fg">Chennai · India</p>
              <p className="mt-1 text-app-subtle">{profile.college}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-terracotta/25 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9, ease: easeOut }}
      />
    </section>
  )
}
