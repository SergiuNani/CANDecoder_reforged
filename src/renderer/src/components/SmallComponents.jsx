import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'
import Button from '@mui/material/Button'

export const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mb="1rem" textAlign="center">
      <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ mb: '0.1rem' }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export const Button1 = ({ children }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Button
      variant="contained"
      sx={{
        height: '2.7rem',
        margin: '0 2rem',
        fontSize: '1rem',
        background: `${colors.primary[300]}`,
        '&:hover': {
          color: `${colors.red[200]}`
        }
      }}
    >
      {children}
    </Button>
  )
}
