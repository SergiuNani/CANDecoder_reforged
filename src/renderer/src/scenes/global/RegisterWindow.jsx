import { useState } from 'react'
import { Typography, Box, IconButton, Button } from '@mui/material'
import { Registers_THS, Registers_CANopen } from '../../data/BigData'
import RegisterComponent from '../../components/Register'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import CloseIcon from '@mui/icons-material/Close'
import {
  filterDecimalWithComma,
  filterDecimal,
  filterHex,
  hexToDec,
  decToHex,
  getMaxNumberFromStringRange
} from '../../functions/NumberConversion'
import { AutocompleteInput_RegisterList, Input_AutoFormat } from '../../components/ForumsComponents'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
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
  const [registerResolution, setRegisterResolution] = useState(0)
  const [valueRegister, setValueRegister] = useState('')
  const [listType, setListType] = useState('CANopen')
  const [inputType, setInputType] = useState('HEX')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleChangeListType() {
    setRegisterSelected(null)
    setValueRegister('')
    if (listType == 'CANopen') setListType('TECHNOSOFT')
    else setListType('CANopen')
  }
  function handleInputTypeChange() {
    setValueRegister('')
    if (inputType == 'HEX') setInputType('DEC')
    else setInputType('HEX')
  }

  function tellParentRegisterChanged(register) {
    //this will be a child prop
    setRegisterSelected(register)
    setRegisterResolution(parseInt(getMaxNumberFromStringRange(register.BitInfo[0].bit) + 1))
  }
  function tellParentValueChanged(value, htmlType) {
    if (htmlType == 'input') {
      if (listType == 'DEC') {
        setValueRegister(decToHex(value, registerResolution))
      } else {
        setValueRegister(value)
      }
    } else {
      setValueRegister(value)
    }
  }
  return (
    <div
      style={{
        // display: 'flex',
        border: `1px solid `,
        padding: '0 0.3rem 0.4rem 0.3rem ',
        borderRadius: '1rem',
        width: '27rem',
        // minHeight: '20vh',
        // overflow: 'auto',
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
          gap: '0.7rem',
          marginBottom: '1rem',
          justifyContent: 'center'
        }}
      >
        {listType == 'CANopen' ? (
          <AutocompleteInput_RegisterList
            type="1"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
            placeholder="Select"
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
            placeholder="Select"
          />
        )}
        <Button
          sx={{
            // border: '1px solid yellow',
            color: `${colors.grey[100]}`,
            fontSize: '0.9rem'
            // marginLeft: '1rem'
          }}
          onClick={handleInputTypeChange}
        >
          {inputType} :
        </Button>
        {inputType == 'HEX' ? (
          <Input_AutoFormat
            callback={filterHex}
            resolution={registerResolution}
            inputType={inputType}
            placeholder="Value"
            tellParentValueChanged={tellParentValueChanged}
            registerChanged={registerSelected}
            valueRegisterFromParent={valueRegister}
          />
        ) : (
          <Input_AutoFormat
            callback={filterDecimal}
            resolution={registerResolution}
            inputType={inputType}
            placeholder="Value"
            tellParentValueChanged={tellParentValueChanged}
            registerChanged={registerSelected}
            valueRegisterFromParent={valueRegister}
          />
        )}
        <Button
          onClick={handleChangeListType}
          sx={{
            // border: '1px solid yellow',
            color: `${colors.grey[100]}`,
            fontSize: '0.9rem',
            marginLeft: '0.5rem '
          }}
        >
          {listType}
        </Button>

        <IconButton onClick={IncrementWindows}>
          <AddIcon />
        </IconButton>
      </Box>
      {/* Register Painting ----------------------------------------------------*/}
      <RegisterComponent
        register={registerSelected}
        value={valueRegister}
        allowClickBox={true}
        tellParentValueChanged={tellParentValueChanged}
      />
    </div>
  )
}
