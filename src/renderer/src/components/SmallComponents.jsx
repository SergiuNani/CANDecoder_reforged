import { useMemo, useState, useEffect } from 'react'
import { Typography, Box, useTheme, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import { tokens } from '../theme'
import { Button, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Fade from '@mui/material/Fade'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { CanLogStatistics } from '../functions/CANopen'
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
        background: `${colors.personal[200]}`,
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
//Big button for loading prev/next CAN log messages
export const Button4 = ({ children, onClick }) => {
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
        background: `${colors.primary[300]}`,

        '&:hover': {
          background: `${colors.primary[200]}`,
          border: `1px solid ${colors.green[400]}`
        },
        textTransform: 'none',
        width: '70%',
        borderRadius: '0.5rem'
      }}
    >
      {children}
    </Button>
  )
}
export const ButtonTransparent = ({ children, onClick, sx }) => {
  //Cancel button
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const defaultSx = {
    background: 'transparent',
    '&:hover': {
      background: 'transparent'
    },
    textTransform: 'none',
    outline: 'none'
  }
  return (
    <Button variant="contained" onClick={onClick} sx={{ ...defaultSx, ...sx }}>
      {children}
    </Button>
  )
}

export const SwitchComponent = ({ option1, option2, tellParentValueChanged, freeTextVsCanLog }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isSwitchedOn, setIsSwitchedOn] = useState(freeTextVsCanLog === 'CANlog')

  function handleChange() {
    const newSwitchValue = !isSwitchedOn
    setIsSwitchedOn(newSwitchValue)

    const selectedOption = newSwitchValue ? option2 : option1
    tellParentValueChanged(selectedOption)
  }

  // Update the state when freeTextVsCanLog prop changes
  useEffect(() => {
    setIsSwitchedOn(freeTextVsCanLog === 'CANlog')
  }, [freeTextVsCanLog])

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zoom: '0.85' }}>
      <p>{option1}</p>
      <Switch
        onChange={handleChange}
        checked={isSwitchedOn}
        sx={{
          color: 'red',
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: `${colors.primary[600]}`
          },
          '& .css-hno2zs-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
            background: `${colors.yellow[400]}`
          }
        }}
      />
      <p>{option2}</p>
    </Box>
  )
}

export const TooltipClickable = styled(({ className, children, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = (event) => {
    if (event && event.target.closest(`.${tooltipClasses.tooltip}`)) {
      return
    }
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(!open)
  }
  return (
    <div>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          {...props}
          classes={{ popper: className }}
          TransitionComponent={Fade}
          open={open}
          onClick={handleTooltipOpen}
        >
          {children}
        </Tooltip>
      </ClickAwayListener>
    </div>
  )
})(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: `${colors.primary[100]}`,
      color: `${colors.yellow[100]}`,
      maxWidth: '80rem',
      fontSize: '1.2rem',
      fontWeight: '500',
      border: `3px solid ${colors.primary[400]}`,
      padding: '0.6rem'
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: `${colors.primary[600]}`
    }
  }
})

export function Checkbox_Component({ label, checked, onChange }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
        // justifyContent: 'center'
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            sx={{
              color: `${colors.primary[600]}`,
              '&.Mui-checked': {
                color: `${colors.primary[400]}`
              },
              margin: '0',
              padding: '0.1rem 0 0 0',
              paddingBottom: '0.3rem'
            }}
            onChange={onChange}
          />
        }
        label={label}
      />
      {/* <p>{children}</p> */}
    </div>
  )
}
export function ProgressComponent() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <div
        id="ProgressComponent"
        style={{
          position: 'relative',
          width: '3rem',
          height: '3rem',
          backgroundColor: `${colors.primary[400]}`,

          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `conic-gradient(${colors.primary[400]} 180deg, white 0deg)`
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '2.5rem',
            height: '2.5rem',
            backgroundColor: `${colors.primary[300]}`,
            borderRadius: '50%'
          }}
        ></div>
        <p
          style={{
            color: `${colors.yellow[400]}`,
            zIndex: '1',
            fontWeight: '500'
          }}
        >
          gr
        </p>
      </div>
    </div>
  )
}
