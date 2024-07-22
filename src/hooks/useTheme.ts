import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'

const useTheme = () => {
  const [, toggleTheme] = useThemeManager()
  const theme = useContext(StyledThemeContext)
  const isDark = true

  const alwaysDarkTheme = () => {
    if (!isDark) {
      toggleTheme() 
    }
  }

  return { isDark, theme, toggleTheme: alwaysDarkTheme }
}

export default useTheme
