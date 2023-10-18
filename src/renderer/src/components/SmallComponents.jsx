import { useMemo, useState } from 'react'
import { Typography, Box, useTheme, Checkbox, FormControlLabel, IconButton } from '@mui/material'
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
export const ButtonTransparent = ({ children, onClick, sx }) => {
  //Cancel button
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const defaultSx = {
    background: 'transparent',
    '&:hover': {
      background: 'transparent'
    },
    textTransform: 'none'
  }
  return (
    <Button variant="contained" onClick={onClick} sx={{ ...defaultSx, ...sx }}>
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

export const TooltipClickable = styled(({ className, children, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    if (open == true) setOpen(false)
    else setOpen(true)
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
      maxWidth: '40rem',
      fontSize: '1.3rem',
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
        alignItems: 'center',
        justifyContent: 'center'
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
              padding: '0rem'
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

export function AvailableAxes_Component({}) {
  console.log('6. AvailableAxes_Component ')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [renderToggle, setRenderToggle] = useState(true)

  function handleAxisClick(e) {
    var axis = e.target.textContent.split(': ')[1]
    var arrayIndex = CanLogStatistics.findIndex((iteration) => {
      return iteration.Axis[0] == axis
    })
    if (arrayIndex != -1) {
      var AxisState = CanLogStatistics[arrayIndex].Axis[1]
      Object.keys(CanLogStatistics[arrayIndex]).forEach((prop) => {
        CanLogStatistics[arrayIndex][prop][1] = !AxisState
      })
      setRenderToggle((prev) => !prev)
    }
  }

  function handleChecboxClicked(e) {
    var axis = e.target.closest('.AxisIndication').querySelector('button').innerText
    var propToChange = e.target.parentElement.parentElement.innerText.split(' - ')[0]
    axis = axis.split(': ')[1]
    var arrayIndex = CanLogStatistics.findIndex((iteration) => {
      return iteration.Axis[0] == axis
    })

    if (arrayIndex != -1) {
      // Check if all other props (except 'Axis') have the opposite value of the clicked checkbox
      var currentCheckboxState = CanLogStatistics[arrayIndex][propToChange][1]
      const allPropsAreTheSameState = Object.keys(CanLogStatistics[arrayIndex]).every((prop) => {
        return (
          prop === 'Axis' ||
          prop === propToChange ||
          CanLogStatistics[arrayIndex][prop][1] !== currentCheckboxState
        )
      })

      // If all other props have the opposite value, update the 'Axis' property
      if (allPropsAreTheSameState) {
        CanLogStatistics[arrayIndex].Axis[1] = !currentCheckboxState
      }

      // Update the clicked checkbox's value
      CanLogStatistics[arrayIndex][propToChange][1] = !currentCheckboxState
      if (!currentCheckboxState == true) {
        CanLogStatistics[arrayIndex].Axis[1] = true
      }
      setRenderToggle((prev) => !prev)
    }
  }
  return (
    <Box>
      {CanLogStatistics.map((axisIteration) => {
        return (
          <Box key={axisIteration.Axis}>
            {/* ONE AXIS  ---------- */}
            <Box
              sx={{
                border: axisIteration.Axis[1] ? `1px solid ${colors.red[500]}` : null,
                borderRadius: '1rem',
                marginBottom: '1rem',
                padding: '0.1rem'
              }}
              className="AxisIndication"
            >
              <ButtonTransparent
                sx={{
                  fontSize: '1.1rem',
                  color: `${colors.red[500]}`,
                  fontWeight: '700'
                }}
                onClick={handleAxisClick}
              >
                Axis: {axisIteration.Axis[0]}
              </ButtonTransparent>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  margin: '0 0 1rem 1rem'
                }}
              >
                {Object.keys(axisIteration).map((propName) => {
                  if (propName == 'Axis') return
                  return (
                    <div key={propName}>
                      <div
                        key={propName}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          maxWidth: '9rem',
                          whiteSpace: 'nowrap'
                          // overflow: 'hidden'
                        }}
                      >
                        <Checkbox_Component
                          label={`${propName} - ${axisIteration[propName][0]}`}
                          checked={axisIteration[propName][1]}
                          onChange={handleChecboxClicked}
                        />
                      </div>
                    </div>
                  )
                })}
              </Box>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
