import { useState } from 'react'
import { Typography, Box, IconButton, Button } from '@mui/material'
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
import { Header } from '../../components/SmallComponents'
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
      setWindowsNumber((prev) => prev - 1)
    }
  }
  return (
    <div>
      <Header title="Registers Window " subtitle="Look up any register" />
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

const RegisterSelectionComponent = ({
  IncrementWindows,
  DecrementWindows,
  ComponentHeight,
  ComponentWidth
}) => {
  const [registerSelected, setRegisterSelected] = useState(null)
  const [registerResolution, setRegisterResolution] = useState(0)
  const [valueRegister, setValueRegister] = useState('')
  const [listType, setListType] = useState('CANopen')
  const [inputType, setInputType] = useState('HEX')
  // This is added because of the useEffect of the Input_AutoFormat component
  const [valueRegister4Child, setvalueRegister4Child] = useState('')

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
    setValueRegister('')
  }
  function tellParentValueChanged(value, htmlType) {
    if (htmlType == 'input') {
      if (inputType == 'DEC') {
        setValueRegister(decToHex(value, registerResolution))
      } else {
        setValueRegister(value)
      }
    } else if (htmlType == 'p') {
      setValueRegister(value)
      setvalueRegister4Child(value)
    }
  }
  return (
    <div
      style={{
        // display: 'flex',
        border: `1px solid  ${colors.red[200]}`,
        padding: '0 0.3rem 0.4rem 0.3rem ',
        borderRadius: '1rem',
        width: ComponentWidth ? ComponentWidth : '27.5rem',
        // maxHeight: '44vh',
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
        <Typography
          variant="h4"
          sx={{
            color: `${colors.primary1[100]}`
            // textAlign: 'center'
          }}
        >
          Register Bit Representation
        </Typography>
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
            valueRegisterFromParent={valueRegister4Child}
          />
        ) : (
          <Input_AutoFormat
            callback={filterDecimal}
            resolution={registerResolution}
            inputType={inputType}
            placeholder="Value"
            tellParentValueChanged={tellParentValueChanged}
            registerChanged={registerSelected}
            valueRegisterFromParent={valueRegister4Child}
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
        ComponentHeight={ComponentHeight}
      />
    </div>
  )
}
export const HelpRegister = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '5rem',
        margin: '0 2rem',
        textAlign: 'justify'
      }}
    >
      <div>
        <Typography variant="h5">
          The <span className="primaryColor">Register Bit Representation</span> window was build to
          easily visualize any registers from the CANopen Standard (CiA 402 v4.0) or TML Registers
          from Technosoft.{' '}
        </Typography>
        <br />
        <p>
          A <span className="primaryColor">REGISTER</span> is a fundamental component of a
          computer's central processing unit (CPU) and is used to store and manage data temporarily
          during the execution of instructions. Registers are typically divided into bits, where
          each bit corresponds to a specific action or represents a unit of information.
        </p>
        <br />
        <p>
          This interface offers a significant advantage by eliminating the need for users to manualy
          search through the CiA standard or the Technosoft Help menu to access specific register
          details and then convert the register values into binary for the purpose of linking each
          bit description to its corresponding value.
        </p>
        <br />
        <p>Basic overview of the Register Tool:</p>
        <br />
        <ol className="ol">
          <li>
            <span className="primaryColor">Autocomplete Search Bar:</span> Quickly find any register
            by clicking on the search bar. To trigger updates, it's necessary not only to type the
            register name but also to either click on it or navigate through the generated list
            using the arrow keys followed by the ENTER key. Once a register is selected, the tool
            generates a visual interface.
          </li>
          <li>
            {' '}
            <span className="primaryColor">HEX/DEC Toggle Button: </span>
            Next component is a button which toggles between HEX (hexadecimal) and DEC(decimal) and
            the purpose of it is to tell the tool in which format the user will input the register
            value.
          </li>
          <li>
            <span className="primaryColor">Value Input Bar:</span> This input bar allows users to
            specify the register data, either in decimal or hexadecimal, depending on the previous
            button selection. The visual representation of the register updates in real-time as the
            input value changes.
          </li>

          <li>
            <span className="primaryColor">CANopen/Technosoft Toggle:</span> This button provides
            the option to switch between "CANopen" and "Technosoft" registers. It helps users
            differentiate between CiA registers and Technosoft TML registers, allowing them to
            select the relevant category for their search.
          </li>
          <li>
            <span className="primaryColor">Clone Button (+):</span> The "+" button can replicate the
            current tool, allowing for up to three separate instances. Each clone retains the same
            functionality and operates independently. This feature is useful when users need to
            query multiple registers or compare them. Clones of the Register tool can be deleted at
            any time by clicking the close button.
          </li>
          <li>
            <span className="primaryColor">Generated Register Display:</span> The sixth component is
            the generated register itself. It consists of multiple lines, with each line indicating
            the bit number, its description, and its current value. You can click on the box
            containing the value of a specific bit, this action will negate the previous value,
            simultaneously updating the "Value Input Bar" (3) of the register. This feature proves
            helpful when you need to know what value the register will have if one or more bits have
            changed.
          </li>
        </ol>
      </div>
      <div>
        <RegisterSelectionComponent ComponentHeight="50vh" />
      </div>
    </div>
  )
}
