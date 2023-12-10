import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#EDEFFD',
          200: '#a3a3a3',
          300: '#858585',
          400: '#666666',
          500: '#3d3d3d'
        },
        primary1: {
          100: '#202528',
          200: '#a1a4ab',
          300: '#2D4356'
        },
        green: {
          100: '#41F1B6',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac'
        },
        red: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          400: '#e2726e',
          500: '#FF7782',
          600: '#FF5252'
        },
        blue: {
          100: '#7380EC',
          200: '#2d394b',
          300: '#202528',
          400: '#868dfb',
          500: '#00A9FF'
        },
        purple: {
          100: '#252943',
          200: '#4C5285',
          300: '#575FB7'
        },
        primary: {
          100: '#16181D',
          200: '#23272F',
          300: '#343A46',
          400: '#149ECA',
          500: '#1C84A8',
          600: '#F6F7F9'
        },
        yellow: {
          100: '#ead37e',
          200: '#A06229',
          300: '#b1a490',
          400: '#e3d3ba',
          500: '#ffbb55',
          600: '#FABD62'
        },

        personal: {
          100: '#e27c7c',
          200: '#466964',
          300: '#6cd4c5'
        }
      }
    : {
        grey: {
          100: '#3A3839',
          200: '#3A3839',
          300: '#3A3839',
          400: '#3A3839',
          500: '#3A3839'
        },
        primary1: {
          100: '#3A3839',
          200: '#3A3839',
          300: '#3A3839'
        },
        green: {
          100: '#00B38F',
          200: '#00B38F',
          300: '#00B38F',
          400: '#00B38F',
          500: '#00B38F'
        },
        red: {
          100: '#FE1E54',
          200: '#FE1E1F',
          400: '#EE5B7D',
          500: '#FE1E54',
          600: '#FE1E54'
        },
        blue: {
          100: '#7EA8F8',
          200: '#F6FBFF',
          300: '#F5F5F5',
          400: '#7EA8F8',
          500: '#7EA8F8'
        },
        purple: {
          100: '#CDBFD6',
          200: '#CDBFD6',
          300: '#CDBFD6'
        },
        primary: {
          100: '#ECECEC',
          200: '#F5F5F5',
          300: '#ECECEC',
          400: '#1987AB',
          500: '#1C84A8',
          600: '#3A3839'
        },
        yellow: {
          100: '#9A6400',
          200: '#9A6400',
          300: '#9A6400',
          400: '#9A6400',
          500: '#9A5D00',
          600: '#3A3839'
        },

        personal: {
          100: '#3A3839',
          200: '#3A3839',
          300: '#10B495'
        }
      })
})

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode)
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500]
            },
            secondary: {
              main: colors.green[500]
            },
            neutral: {
              dark: colors.grey[500],
              main: colors.grey[400],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[200]
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100]
            },
            secondary: {
              main: colors.green[500]
            },
            neutral: {
              dark: colors.grey[500],
              main: colors.grey[400],
              light: colors.grey[100]
            },
            background: {
              default: '#F5F5F5'
            }
          })
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14
      }
    }
  }
}

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  setSelected: () => {} // Add setSelected here
})

export const useMode = () => {
  const [mode, setMode] = useState('light') //bug fix to dark
  const [selected, setSelected] = useState('HOME')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      setSelected
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}
