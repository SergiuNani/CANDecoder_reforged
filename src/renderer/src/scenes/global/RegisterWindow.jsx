import { useState } from 'react'
import { Typography, Box, IconButton, Button } from '@mui/material'
import { Registers_THS, Registers_CANopen } from '../../data/BigData'
import RegisterComponent from '../../components/Register'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import CloseIcon from '@mui/icons-material/Close'
import { filterDecimalWithComma, filterDecimal, filterHex } from '../../functions/NumberConversion'
import { AutocompleteInput_RegisterList, Input_AutoFormat } from '../../components/ForumsComponents'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { AlignVerticalCenter } from '@mui/icons-material'

export const RegisterWindow = () => {
  const navigate = useNavigate()

  const [windowsNumber, setWindowsNumber] = useState(1)
  const IncrementWindows = () => {
    if (windowsNumber > 3) return
    else {
      setWindowsNumber((prev) => prev + 1)
    }
  }
  const DecrementWindows = () => {
    if (windowsNumber < 1) {
      //TODO: change the icon color accordingly
      return navigate('/React_logic2')
    } else {
      setTimeout(() => {
        //If there are three windows, then the animation is sent to the upcoming one
        setWindowsNumber((prev) => prev - 1)
      }, 300)
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

const RegisterSelectionComponent = ({ IncrementWindows, DecrementWindows }) => {
  const [registerSelected, setRegisterSelected] = useState(null)
  const [valueRegister, setValueRegister] = useState('')
  const [listType, setListType] = useState('CANopen')
  const [inputType, setInputType] = useState('HEX')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleChangeType() {
    if (listType == 'CANopen') setListType('TECHNOSOFT')
    else setListType('CANopen')
  }
  function handleInputType() {
    if (inputType == 'HEX') setInputType('DEC')
    else setInputType('HEX')
  }

  function tellParentRegisterChanged(e) {
    setRegisterSelected(e)
  }
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
      {/* Title and CloseBTS ----------------------------------------------------*/}
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
      {/* Inputs line ---------------------------------------------------- */}
      <Box
        sx={{
          display: 'flex',
          gap: '0.8rem',
          marginBottom: '1rem',
          justifyContent: 'center'
        }}
      >
        {listType == 'CANopen' ? (
          <AutocompleteInput_RegisterList
            type="1"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
          />
        )}
        <Button
          sx={{
            // border: '1px solid yellow',
            color: `${colors.grey[100]}`
          }}
          onClick={handleInputType}
        >
          {inputType} :
        </Button>
        {inputType == 'HEX' ? (
          <Input_AutoFormat callback={filterHex} resolution="16" inputType={inputType} />
        ) : (
          <Input_AutoFormat callback={filterHex} resolution="16" inputType={inputType} />
        )}
        <Button
          onClick={handleChangeType}
          sx={{
            // border: '1px solid yellow',
            color: `${colors.grey[100]}`
          }}
        >
          {listType}
        </Button>

        <IconButton onClick={IncrementWindows}>
          <AddIcon />
        </IconButton>
      </Box>
      {/* Register Painting ----------------------------------------------------*/}
      <RegisterComponent register={registerSelected} value={1234} />
    </div>
  )
}
