import { useState } from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Button, Switch } from '@mui/material'

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

export const Button1 = ({ children, onClick }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        height: '2.7rem',
        margin: '1rem 2rem',
        fontSize: '1rem',
        background: `${colors.primary[300]}`,
        '&:hover': {
          background: `${colors.primary[200]}`,
          color: `${colors.red[200]}`
        },
        textTransform: 'none'
      }}
    >
      {children}
    </Button>
  )
}

export const Button2 = ({ children, onClick }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        height: '3rem',
        // margin: '1rem 2rem',
        padding: '1.1rem',
        fontSize: '0.9rem',
        background: `${colors.personal[700]}`,
        '&:hover': {
          background: `${colors.primary[200]}`,
          color: `${colors.red[200]}`
        },
        textTransform: 'none'
      }}
    >
      {children}
    </Button>
  )
}
export const Button3 = ({ children, onClick }) => {
  //Cancel button
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        height: '2.7rem',
        margin: '1rem 2rem',
        fontSize: '1rem',
        background: `${colors.red[400]}`,
        '&:hover': {
          background: `${colors.red[500]}`
        },
        textTransform: 'none'
      }}
    >
      {children}
    </Button>
  )
}

export const SwitchComponent = ({ option1, option2, tellParentValueChanged }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isSwitchedOn, setIsSwitchedOn] = useState(0)
  function handleChange(e) {
    if (isSwitchedOn == 1) {
      tellParentValueChanged(option1)
      setIsSwitchedOn(0)
    } else {
      tellParentValueChanged(option2)
      setIsSwitchedOn(1)
    }
  }
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>{option1}</p>
      <Switch
        onChange={handleChange}
        sx={{
          color: 'red',
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: `${colors.primary[600]}`
          },
          '& .css-hno2zs-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
            background: `${colors.yellow[400]}`
          }
        }}
      ></Switch>
      <p>{option2}</p>
    </Box>
  )
}
