import { motion } from 'framer-motion'
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { skillSlices } from '../data/portfolio'
import { TechSectionBackdrop } from './TechSectionBackdrop'

const RAD = 120

const tooltipStyle = {
  background: 'var(--app-elevated)',
  border: '1px solid var(--app-border)',
  borderRadius: 12,
  color: 'var(--app-fg)',
} as const

export function SkillsPie() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 md:px-8"
    >
      <TechSectionBackdrop variant="machine-learning" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c45c3e] dark:text-[#e8a87c]">
            Skill footprint
          </p>
          <h2 className="type-section-title mt-2 font-display text-3xl font-bold text-app-fg md:text-4xl">
            Where I spend my depth
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-app-muted md:mx-0">
            Weighted mix inspired by coursework, projects, and certifications —
            not exam percentages. Hover segments for detail.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-panel relative h-[360px] rounded-3xl p-4 md:h-[420px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[...skillSlices]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={RAD * 0.55}
                  outerRadius={RAD}
                  paddingAngle={3}
                  animationBegin={0}
                  animationDuration={1200}
                >
                  {skillSlices.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ ...tooltipStyle }}
                  formatter={(value, name) => [
                    `${value ?? 0}% weight`,
                    String(name),
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-app-faint">
                  Blend
                </p>
                <p className="font-display text-2xl font-bold text-app-fg">
                  100%
                </p>
                <p className="text-xs text-app-subtle">coverage</p>
              </div>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="space-y-3"
          >
            {skillSlices.map((s) => (
              <motion.li
                key={s.name}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-center justify-between rounded-2xl border border-app-border bg-app-card-fill-soft px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full shadow-[0_0_12px_currentColor]"
                    style={{ backgroundColor: s.color, color: s.color }}
                  />
                  <span className="text-sm font-medium text-app-fg">
                    {s.name}
                  </span>
                </div>
                <span className="font-display text-sm font-semibold text-app-muted">
                  {s.value}%
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
