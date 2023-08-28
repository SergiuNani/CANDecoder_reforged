import { useState } from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import { Registers_THS, Registers_CANopen } from '../../data/BigData'
import RegisterComponent from '../../components/Register'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import CloseIcon from '@mui/icons-material/Close'
import { filterDecimalWithComma, filterDecimal, filterHex } from '../../functions/NumberConversion'
import { AutocompleteInput_RegisterList, Input_AutoFormat } from '../../components/ForumsComponents'
import AddIcon from '@mui/icons-material/Add'

const RegisterSelectionComponent = ({ IncrementWindows, DecrementWindows }) => {
  const [registerSelected, setRegisterSelected] = useState(null)
  const [valueRegister, setValueRegister] = useState(null)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div
      style={{
        // display: 'flex',
        border: `1px solid `,
        padding: '0 0.3rem 0.4rem 0.3rem ',
        borderRadius: '1rem',
        width: '30%',
        backgroundColor: `${colors.primary[200]}`
      }}
    >
      {/* Title and CloseBTS */}
      <Box
        style={{
          // display: 'flex',
          // justifyContent: 'space-between',
          margin: '1rem 0.5rem',
          position: 'relative'
        }}
      >
        <IconButton
          onClick={DecrementWindows}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,

            '&:hover': { color: `${colors.red[500]}` }
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4">Register Bit Representation</Typography>
      </Box>
      {/* Inputs line */}
      <Box
        sx={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '1rem'
        }}
      >
        <AutocompleteInput_RegisterList type="1" />
        <Input_AutoFormat callback={filterHex} resolution="16" />
        <button
          style={{
            border: '1px solid yellow'
          }}
        >
          Technosoft
        </button>

        <IconButton onClick={IncrementWindows}>
          <AddIcon />
        </IconButton>
      </Box>
      {/* Register Painting */}
      <RegisterComponent register={Registers_THS[10]} value={1234} />
    </div>
  )
}

export const RegisterWindow = ({ navigateTo }) => {
  const [windowsNumber, setWindowsNumber] = useState(1)
  console.log('🚀 ~ file: RegisterWindow.jsx:82 ~ RegisterWindow ~ windowsNumber:', windowsNumber)

  const IncrementWindows = () => {
    if (windowsNumber > 3) return
    else {
      setWindowsNumber((prev) => prev + 1)
    }
  }
  const DecrementWindows = () => {
    if (windowsNumber < 1) navigateTo('/HOME')
    else {
      setWindowsNumber((prev) => prev - 1)
    }
  }
  return (
    <div className="border1 ">
      <Typography variant="h3">RegistersWINDOW</Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem'
          // border: '1px solid yellow'
        }}
      >
        {windowsNumber > 0 && (
          <RegisterSelectionComponent
            IncrementWindows={IncrementWindows}
            DecrementWindows={DecrementWindows}
          />
        )}
        {windowsNumber > 1 && (
          <RegisterSelectionComponent
            IncrementWindows={IncrementWindows}
            DecrementWindows={DecrementWindows}
          />
        )}
        {windowsNumber > 2 && (
          <RegisterSelectionComponent
            IncrementWindows={IncrementWindows}
            DecrementWindows={DecrementWindows}
          />
        )}
      </div>
      {/* ------------------------------------------------ */}
    </div>
  )
}
