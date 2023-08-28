import { Typography, Box, IconButton } from '@mui/material'
import { Registers_THS, Registers_CANopen } from '../../data/BigData'
import RegisterComponent from '../../components/Register'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import CloseIcon from '@mui/icons-material/Close'

import { AutocompleteInput_Custom } from '../../components/ForumsComponents'
const RegisterSelectionComponent = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div
      style={{
        // display: 'flex',
        border: '1px solid yellow',
        padding: '0 0.3rem 0.4rem 0.3rem ',
        borderRadius: '1rem',
        width: '25%'
      }}
    >
      <Box
        style={{
          // display: 'flex',
          // justifyContent: 'space-between',
          margin: '1rem 0.5rem',
          position: 'relative'
        }}
      >
        <IconButton
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
      <Box>
        <AutocompleteInput_Custom title="Objects" type="1" />
        <AutocompleteInput_Custom title="RegisterList" type="2" />
      </Box>

      <RegisterComponent register={Registers_THS[10]} value={1234} />
    </div>
  )
}

export const RegisterWindow = () => {
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
        <RegisterSelectionComponent />
        <RegisterSelectionComponent />
        <RegisterSelectionComponent />
      </div>
      {/* ------------------------------------------------ */}
    </div>
  )
}
