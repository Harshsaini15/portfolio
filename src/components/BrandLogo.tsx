import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useCallback, useId, useRef } from 'react'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const spring = { stiffness: 380, damping: 32, mass: 0.6 }
const springSnap = { stiffness: 520, damping: 38 }
const springSoft = { stiffness: 280, damping: 28 }

export function BrandLogo({ className = '' }: { className?: string }) {
  const safeId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const gradId = `brand-grad-${safeId}`
  const radId = `brand-rad-${safeId}`
  const glossId = `brand-gloss-${safeId}`

  const wrapRef = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const hover = useMotionValue(0)

  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [14, -14]), spring)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [-11, 11]), spring)
  const lift = useSpring(useTransform(hover, [0, 1], [0, -3]), springSnap)
  const scale = useSpring(useTransform(hover, [0, 1], [1, 1.07]), springSnap)
  const glossX = useSpring(useTransform(hover, [0, 1], [0, 8]), springSnap)
  const glossOpacity = useSpring(useTransform(hover, [0, 1], [0, 0.7]), springSoft)
  const glowOpacity = useSpring(useTransform(hover, [0, 1], [0, 0.9]), springSoft)
  const glowScale = useSpring(useTransform(hover, [0, 1], [0.88, 1.14]), springSnap)
  const dotPulse = useSpring(useTransform(hover, [0, 1], [1, 1.2]), springSnap)

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      px.set((e.clientX - r.left) / r.width - 0.5)
      py.set((e.clientY - r.top) / r.height - 0.5)
    },
    [px, py],
  )

  const onLeave = useCallback(() => {
    px.set(0)
    py.set(0)
    hover.set(0)
  }, [px, py, hover])

  const onEnter = useCallback(() => {
    hover.set(1)
  }, [hover])

  return (
    <div
      ref={wrapRef}
      className={`relative inline-flex cursor-pointer [perspective:560px] touch-manipulation ${className}`}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <motion.span
        className="pointer-events-none absolute inset-[-12px] rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_45%,rgba(196,92,62,0.5),transparent_70%)] blur-md"
        style={{ opacity: glowOpacity, scale: glowScale }}
        aria-hidden
      />

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          rotateX,
          rotateY,
          scale,
          y: lift,
        }}
      >
        <motion.svg
          viewBox="0 0 40 40"
          role="img"
          aria-hidden
          className="relative z-[1] h-10 w-10 shrink-0 drop-shadow-[0_4px_16px_rgba(196,92,62,0.3)]"
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 520, damping: 30 }}
        >
          <defs>
            <linearGradient
              id={gradId}
              x1="8"
              y1="4"
              x2="34"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b84a32" />
              <stop offset="0.45" stopColor="#c45c3e" />
              <stop offset="1" stopColor="#f0b090" />
            </linearGradient>
            <radialGradient
              id={radId}
              cx="32%"
              cy="28%"
              r="75%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.38} />
              <stop offset="45%" stopColor="#ffffff" stopOpacity={0.09} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </radialGradient>
            <linearGradient id={glossId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0} />
              <stop offset="42%" stopColor="#ffffff" stopOpacity={0.28} />
              <stop offset="58%" stopColor="#ffffff" stopOpacity={0} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <motion.path
            d="M11 3.5h18a7.5 7.5 0 017.5 7.5v18a7.5 7.5 0 01-7.5 7.5H11a7.5 7.5 0 01-7.5-7.5V11A7.5 7.5 0 0111 3.5z"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: { duration: 0.88, ease: easeOut },
                  opacity: { duration: 0.18 },
                },
              },
            }}
          />

          <motion.path
            d="M11 5.5h18a5.5 5.5 0 015.5 5.5v18a5.5 5.5 0 01-5.5 5.5H11a5.5 5.5 0 01-5.5-5.5V11a5.5 5.5 0 015.5-5.5z"
            fill={`url(#${gradId})`}
            variants={{
              hidden: { scale: 0.52, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.26,
                  type: 'spring',
                  stiffness: 440,
                  damping: 23,
                },
              },
            }}
            style={{ transformOrigin: '20px 20px' }}
          />

          <motion.path
            d="M11 5.5h18a5.5 5.5 0 015.5 5.5v18a5.5 5.5 0 01-5.5 5.5H11a5.5 5.5 0 01-5.5-5.5V11a5.5 5.5 0 015.5-5.5z"
            fill={`url(#${radId})`}
            pointerEvents="none"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.45, duration: 0.35 },
              },
            }}
          />

          <motion.path
            d="M2 6 L 26 34 L 34 26 L 10 -2 Z"
            fill={`url(#${glossId})`}
            style={{ x: glossX, opacity: glossOpacity }}
            pointerEvents="none"
          />

          <motion.text
            x="20"
            y="26.9"
            textAnchor="middle"
            fill="rgba(255,255,255,0.96)"
            fontFamily="Outfit, system-ui, sans-serif"
            fontSize="13.4"
            fontWeight="800"
            letterSpacing="-0.06em"
            style={{ fontVariationSettings: "'wght' 800" }}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.52, duration: 0.4, ease: easeOut },
              },
            }}
          >
            HS
          </motion.text>

          <motion.g
            style={{ transformOrigin: '31.5px 8.5px' }}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.74,
                  type: 'spring',
                  stiffness: 460,
                  damping: 16,
                },
              },
            }}
          >
            <motion.circle
              cx="31.5"
              cy="8.5"
              r="2.35"
              fill="#fffaf5"
              stroke="#d9735a"
              strokeWidth="0.85"
              style={{ scale: dotPulse }}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  )
}
