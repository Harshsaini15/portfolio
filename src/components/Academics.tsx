import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { boardMarks, profile, semesterTrend } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

const tooltipStyle = {
  background: 'var(--app-elevated)',
  border: '1px solid var(--app-border)',
  borderRadius: 12,
  color: 'var(--app-fg)',
} as const

const axisStroke = 'var(--app-border)'
const tickStyle = { fill: 'var(--app-fg-subtle)', fontSize: 12 }

function AnimatedCgpaRing({ value, max }: { value: number; max: number }) {
  const circumference = 2 * Math.PI * 40
  const pct = Math.min(1, value / max)
  const targetOffset = circumference * (1 - pct)

  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center md:h-64 md:w-64">
      <svg
        className="h-full w-full -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--app-ring-track)"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#cgpaGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: targetOffset }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="cgpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c45c3e" />
            <stop offset="100%" stopColor="#e8a87c" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.span
          className="font-display text-5xl font-extrabold text-app-fg md:text-6xl"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          {value}
        </motion.span>
        <span className="text-sm font-medium text-app-subtle">
          CGPA / {max}
        </span>
        <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#c45c3e] dark:text-[#e8a87c]">
          live average
        </span>
      </div>
    </div>
  )
}

export function Academics() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden px-4 py-20 md:px-8"
    >
      <TechSectionBackdrop variant="data-structures" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
            Academics
          </p>
          <h2 className="type-section-title mt-2 font-display text-3xl font-bold text-app-fg md:text-4xl">
            Momentum you can see
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-app-muted md:mx-0">
            Semester GPAs trend upward; board scores sit in a compact “report
            card” strip with animated fills.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute right-6 top-6 rounded-full border border-app-border bg-app-card-fill px-3 py-1 text-xs font-semibold text-app-muted">
              SRM JEE · #{profile.jeeRank}
            </div>
            <h3 className="type-heading-sm font-display text-xl font-semibold text-app-fg">
              Cumulative GPA
            </h3>
            <p className="mt-2 text-sm text-app-subtle">
              Animated ring maps your CGPA to a full ten-point scale — no
              guesswork.
            </p>
            <div className="mt-6 flex justify-center">
              <AnimatedCgpaRing value={profile.cgpa} max={profile.cgpaScale} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass-panel rounded-3xl p-6 md:p-8"
          >
            <h3 className="type-heading-sm font-display text-xl font-semibold text-app-fg">
              Semester trajectory
            </h3>
            <p className="mt-2 text-sm text-app-subtle">
              Area chart highlights the climb from 8.5 → 9.7 in recent terms.
            </p>
            <div className="mt-4 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={[...semesterTrend]} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gpaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c45c3e" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#c45c3e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="sem"
                    stroke={axisStroke}
                    tick={tickStyle}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[7.5, 10]}
                    stroke={axisStroke}
                    tick={tickStyle}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                  />
                  <Tooltip
                    contentStyle={{ ...tooltipStyle }}
                    formatter={(v) => [`${v ?? ''} GPA`, 'Term']}
                  />
                  <Area
                    type="monotone"
                    dataKey="gpa"
                    stroke="#e8a87c"
                    strokeWidth={3}
                    fill="url(#gpaFill)"
                    animationDuration={1400}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-panel rounded-3xl p-8"
        >
          <h3 className="type-heading-sm font-display text-xl font-semibold text-app-fg">
            Board marks — kinetic report card
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {boardMarks.map((b, i) => (
              <div
                key={b.label}
                className="rounded-2xl border border-app-border bg-app-card-fill-soft p-5"
              >
                <p className="text-xs uppercase tracking-wider text-app-faint">
                  {b.year}
                </p>
                <p className="mt-2 text-sm font-medium text-app-fg">
                  {b.label}
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--app-bar-track)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#c45c3e] to-[#e8a87c]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
                <p className="mt-3 font-display text-3xl font-bold text-app-fg">
                  {b.percent}
                  <span className="text-lg text-app-faint">%</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
