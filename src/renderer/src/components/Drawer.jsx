import { useState, useEffect } from 'react'
import { Box, Button, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import CloseIcon from '@mui/icons-material/Close'

const DrawerComponent = ({ title, component }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isDrawerOpen, closeDrawer] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === '`') {
        closeDrawer((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  function handleClose() {
    closeDrawer((prev) => {
      !prev
    })
  }

  return (
    <Box className="relative">
      <Box
        className="drawerComponenet "
        style={{
          background: `${colors.primary[100]}`,
          border: `1px solid ${colors.grey[500]}`,
          right: isDrawerOpen ? '0' : '-200rem'
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ borderBottom: `1px solid ${colors.grey[500]}` }}
        >
          <Typography variant="h2">{title} </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
        {component}
      </Box>
    </Box>
  )
}

export default DrawerComponent
