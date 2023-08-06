import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

export const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="1rem 0" textAlign="center">
      <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: '0 0 1rem 0' }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
