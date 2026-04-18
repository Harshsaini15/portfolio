import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useCallback, useRef } from 'react'

type Props = {
  children: string
  className?: string
}

/**
 * Display name with a gradient that follows the pointer (variable-font friendly).
 */
export function InteractiveGradientName({ children, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const sx = useSpring(mx, { stiffness: 140, damping: 32, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 140, damping: 32, mass: 0.4 })
  const bgPos = useMotionTemplate`${sx}% ${sy}%`

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const w = Math.max(r.width, 1)
      const h = Math.max(r.height, 1)
      mx.set(((e.clientX - r.left) / w) * 100)
      my.set(((e.clientY - r.top) / h) * 100)
    },
    [mx, my],
  )

  const onLeave = useCallback(() => {
    mx.set(50)
    my.set(50)
  }, [mx, my])

  return (
    <motion.span
      ref={ref}
      className={`type-interactive-name ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(125deg, var(--grad-name-a) 0%, #c45c3e 28%, #e8a87c 48%, #f4c4a8 62%, var(--grad-name-b) 85%, var(--grad-name-a) 100%)',
        backgroundSize: '240% 240%',
        backgroundPosition: bgPos,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.span>
  )
}
