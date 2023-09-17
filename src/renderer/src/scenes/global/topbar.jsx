import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PaletteIcon from '@mui/icons-material/Palette'
import CreateIcon from '@mui/icons-material/Create'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const navigate = useNavigate()

  return (
    <Box className="TOPBAR" sx={{ bgcolor: colors.primary[200] }}>
      {/* SEARCH BAR */}
      <Box></Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PaletteIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate('/EditDataWindow')
          }}
        >
          <CreateIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
