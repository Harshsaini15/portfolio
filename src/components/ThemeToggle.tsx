import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-app-border bg-app-card-fill px-4 py-2.5 text-xs font-semibold text-app-fg shadow-sm transition hover:bg-app-hover-overlay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-[#e8a87c]" aria-hidden />
          <span className="text-app-fg">Light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-terracotta" aria-hidden />
          <span className="text-app-fg">Dark mode</span>
        </>
      )}
    </button>
  )
}
