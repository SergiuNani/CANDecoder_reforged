import { Header } from '../components/SmallComponents.jsx'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme.js'

const HomeWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <Header title="Home Page"></Header>
      <p className="border">StartMenu</p>
    </div>
  )
}

export default HomeWindow
