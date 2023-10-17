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
          200: '#a1a4ab'
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
          400: '#868dfb'
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
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0'
        },
        primary1: {
          100: '#040509',
          200: '#080b12'
        },
        green: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee'
        },
        red: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb'
        },
        blue: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe'
        },
        purple: {
          100: '#F3F4FD',
          200: '#6E75C2',
          300: '#6E75C2'
        },

        primary: {
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F6F7F9',
          400: '#087EA4',
          500: '#1C84A8',
          600: '#23272F'
        },
        yellow: {
          100: '#ead37e',
          200: '#A06229',
          300: '#b1a490',
          400: '#e3d3ba',
          500: '#ffbb55',
          600: '#FABD62',
          700: '#FDEBCF'
        },

        personal: {
          100: '#e27c7c',
          200: '#a86464',
          300: '#6d4b4b',
          400: '#503f3f',
          500: '#333333',
          600: '#3c4e4b',
          700: '#466964',
          800: '#599e94',
          900: '#6cd4c5'
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
              default: '#fcfcfc'
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
  const [mode, setMode] = useState('dark')
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
