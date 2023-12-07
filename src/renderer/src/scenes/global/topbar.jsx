import { useContext, useState, createContext, useEffect, useRef } from 'react'
import { Box, IconButton, useTheme, Typography } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Dialog from '@mui/material/Dialog'
import Accordion from '@mui/material/Accordion'
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded'
import TableViewIcon from '@mui/icons-material/TableView'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { VerifyCANopenValidityArray_RAW } from '../../data/VerifyAlgorithmData'
import { RegisterSelectionComponent } from './RegisterWindow'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import {
  MotorSpecificationsContext,
  UserVsDebugModeContext,
  FG_Context,
  FG_OptionsStarter,
  DecodeCANlog_topbarOptionsContext,
  SidebarContext
} from '../../App'
import { Input_AutoFormat, Input_ChooseOption } from '../../components/ForumsComponents'
import {
  filterDecimal,
  filterDecimalWithComma,
  hex2bin,
  bin2hex,
  decToHex,
  hexToDec
} from '../../functions/NumberConversion'
import { SwitchComponent, ButtonTransparent } from '../../components/SmallComponents'
import SearchIcon from '@mui/icons-material/Search'
import {
  FG_units_pos_rot,
  FG_units_spd_rot,
  FG_units_acc_rot,
  FG_units_spd_lin,
  FG_units_pos_lin,
  FG_units_acc_lin,
  FG_units_time
} from '../../data/SmallData'
export let FG_OptionsObject_1 = {
  FG_Display_POS: 'IU',
  FG_Display_SPD: 'IU',
  FG_Display_ACC: 'IU',
  FG_Display_TIME: 'ms',
  FG_Applied_POS: 'IU',
  FG_Applied_SPD: 'IU',
  FG_Applied_ACC: 'IU',
  FG_Applied_TIME: 'IU'
}
export var fullRot_IU_1 = 2000
export var slowLoop_1 = 1
export var FG_DisplayVSApplied_1 = 'Display'

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false)
  const [CalcVsRegDialogStatus, setCalcVsRegDialogStatus] = useState(false)
  const [CalcVsRegister, setCalcVsRegister] = useState('Register')

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'c') {
        console.log('ev')
        // setCalcVsRegDialogStatus(false)

        // setTimeout(() => {
        setCalcVsRegDialogStatus(true)
        if (CalcVsRegister == 'Calculator') {
          setCalcVsRegister('Register')
        } else {
          setCalcVsRegister('Calculator')
        }
        // }, 10)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [CalcVsRegister])

  return (
    <Box
      sx={{
        bgcolor: colors.primary[200],
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.2rem'
      }}
    >
      <Box>
        <DecodeCANlogOptionsInsertPart />
      </Box>
      <SettingsDialog
        settingsDialogOpen={settingsDialogOpen}
        setSettingsDialogOpen={setSettingsDialogOpen}
      />
      <CalculatorDialog
        CalcVsRegDialogStatus={CalcVsRegDialogStatus}
        setCalcVsRegDialogStatus={setCalcVsRegDialogStatus}
        CalcVsRegister={CalcVsRegister}
        setCalcVsRegister={setCalcVsRegister}
      />
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton onClick={() => setSettingsDialogOpen(true)}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setCalcVsRegDialogStatus(true)
          }}
        >
          <TableViewIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar

export function SettingsDialog({ settingsDialogOpen, setSettingsDialogOpen }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  function handleClose() {
    setSettingsDialogOpen(false)
  }
  return (
    <Dialog open={settingsDialogOpen} onClose={handleClose}>
      <div
        style={{
          border: `1px solid ${colors.primary[400]}`,
          padding: '2rem',
          background: `${colors.primary[200]}`
        }}
      >
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Application Settings
        </Typography>

        <AccordionComponent title="Working Mode" children={<WorkingModeInsertPart />} />
        <AccordionComponent title="General Settings" children={<GeneralSettingsInsertPart />} />
        <AccordionComponent title="Factor Group" children={<FactorGroupInsertPart />} />
      </div>
    </Dialog>
  )
}

const AccordionComponent = ({ title, children }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Accordion defaultExpanded sx={{ background: `${colors.primary[300]}` }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          color: colors.yellow[500],
          fontSize: '1.2rem',
          // mb: '1rem',
          borderBottom: `1px solid ${colors.primary[400]}`,
          '&.Mui-expanded': {
            minHeight: '3rem !important'
          },
          '& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
            margin: '0 !important'
          }
        }}
      >
        {title}
      </AccordionSummary>
      {children}
    </Accordion>
  )
}

const WorkingModeInsertPart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { userVsDebugMode, setUserVsDebugMode } = useContext(UserVsDebugModeContext)
  return (
    <section style={{ padding: '1rem' }}>
      <li>Display Mode : </li>
      <RadioGroup
        row
        onChange={(e) => {
          setUserVsDebugMode(e.target.value)
        }}
        value={userVsDebugMode}
        sx={{
          justifyContent: 'center',
          '& .MuiSvgIcon-root': {
            // fontSize: '1rem'
            color: `${colors.green[400]}`
          }
        }}
      >
        <FormControlLabel value="USER" control={<Radio />} label="USER" />
        <FormControlLabel value="DEBUG" control={<Radio />} label="DEBUG" />
      </RadioGroup>
    </section>
  )
}

const GeneralSettingsInsertPart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var { loadType, setLoadType, fullRot_IU, setFullRot_IU, slowLoop, setSlowLoop } = useContext(
    MotorSpecificationsContext
  )

  function fctSetFullRot_IU(value) {
    setFullRot_IU(value)
    fullRot_IU_1 = parseInt(value)
  }
  function fctSetSlowLoop(value) {
    setSlowLoop(value)
    slowLoop_1 = parseFloat(value)
  }

  return (
    <section style={{ padding: '1rem' }}>
      <li>Load Type:</li>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={(e) => {
          setLoadType(e.target.value)
        }}
        name="row-radio-buttons-group"
        value={loadType}
        sx={{
          justifyContent: 'center',
          '& .MuiSvgIcon-root': {
            // fontSize: '1rem'
            color: `${colors.green[400]}`
          }
        }}
      >
        <FormControlLabel value="ROTARY" control={<Radio />} label="ROTARY" />
        <FormControlLabel value="LINEAR" control={<Radio />} label="LINEAR" />
      </RadioGroup>
      <br />
      {/* One full Mechanical/one meter input field ------------------ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {loadType == 'ROTARY' ? (
          <li>One mechanical rotation (1rot) is equal to: </li>
        ) : (
          <li>One meter (1m) is equal to: </li>
        )}
        <Input_AutoFormat
          callback={filterDecimal}
          resolution={32}
          // inputType={fourOptionsRadioSelection}
          tellParentValueChanged={fctSetFullRot_IU}
          forceValueFromParent={fullRot_IU}
          iteration={1}
          blockValueReset
        />{' '}
        <p> IU </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
        <li>Slow loop : </li>
        <Input_AutoFormat
          callback={filterDecimalWithComma}
          resolution={32}
          // inputType={fourOptionsRadioSelection}
          tellParentValueChanged={fctSetSlowLoop}
          forceValueFromParent={slowLoop}
          iteration={1}
          blockValueReset
        />{' '}
        <p> ms </p>
      </div>
    </section>
  )
}

const FactorGroupInsertPart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [delayedUseEffect, setDelayedUseEffect] = useState(false)
  const { FG_DisplayVSApplied, setFG_DisplayVSApplied, FG_OptionsObject, setFG_OptionsObject } =
    useContext(FG_Context)
  var { loadType } = useContext(MotorSpecificationsContext)

  function handleAnyInputChange(value, title) {
    if (title == 'POS') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_POS: value })
      FG_OptionsObject_1.FG_Display_POS = value
    } else if (title == 'SPD') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_SPD: value })
      FG_OptionsObject_1.FG_Display_SPD = value
    } else if (title == 'ACC') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_ACC: value })
      FG_OptionsObject_1.FG_Display_ACC = value
    } else {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_TIME: value })
      FG_OptionsObject_1.FG_Display_TIME = value
    }
  }
  function handleAppliedFG_inputChange(value, title) {
    if (title == 'POS') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_POS: value })
      FG_OptionsObject_1.FG_Applied_POS = value
    } else if (title == 'SPD') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_SPD: value })
      FG_OptionsObject_1.FG_Applied_SPD = value
    } else if (title == 'ACC') {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_ACC: value })
      FG_OptionsObject_1.FG_Applied_ACC = value
    } else {
      setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_TIME: value })
      FG_OptionsObject_1.FG_Applied_TIME = value
    }
  }
  useEffect(() => {
    if (delayedUseEffect) {
      setFG_OptionsObject({
        ...FG_OptionsObject,
        FG_Display_POS: 'IU',
        FG_Display_SPD: 'IU',
        FG_Display_ACC: 'IU',
        FG_Display_TIME: 'IU',
        FG_Applied_POS: 'IU',
        FG_Applied_SPD: 'IU',
        FG_Applied_ACC: 'IU',
        FG_Applied_TIME: 'IU'
      })

      FG_OptionsObject_1 = {
        FG_Display_POS: 'IU',
        FG_Display_SPD: 'IU',
        FG_Display_ACC: 'IU',
        FG_Display_TIME: 'IU',
        FG_Applied_POS: 'IU',
        FG_Applied_SPD: 'IU',
        FG_Applied_ACC: 'IU',
        FG_Applied_TIME: 'IU'
      }
    }
  }, [loadType])

  useEffect(() => {
    setDelayedUseEffect(true)
  }, [])
  return (
    <section style={{ padding: '1rem' }}>
      <li>Select "Applied Factor Group" only when it's enabled in the drive as well.</li>

      <RadioGroup
        // row
        onChange={(e) => {
          setFG_DisplayVSApplied(e.target.value)
          FG_DisplayVSApplied_1 = e.target.value
        }}
        value={FG_DisplayVSApplied}
        sx={{
          justifyContent: 'center',
          mt: '1rem',
          '& .MuiSvgIcon-root': {
            // fontSize: '1rem'
            color: `${colors.green[400]}`
          }
        }}
      >
        <FormControlLabel value="Display" control={<Radio />} label="Display Factor Group" />
        {/* DISPLAY FACTOR GROUP -------------------------------------- */}
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          <Input_ChooseOption
            title="POS"
            array={loadType == 'ROTARY' ? FG_units_pos_rot : FG_units_pos_lin}
            tellParentOptionChanged={handleAnyInputChange}
            parentForceValue={FG_OptionsObject.FG_Display_POS}
            variant
          />
          <Input_ChooseOption
            title="SPD"
            array={loadType == 'ROTARY' ? FG_units_spd_rot : FG_units_spd_lin}
            tellParentOptionChanged={handleAnyInputChange}
            parentForceValue={FG_OptionsObject.FG_Display_SPD}
            variant
          />
          <Input_ChooseOption
            title="ACC"
            array={loadType == 'ROTARY' ? FG_units_acc_rot : FG_units_acc_lin}
            tellParentOptionChanged={handleAnyInputChange}
            parentForceValue={FG_OptionsObject.FG_Display_ACC}
            variant
          />
          <Input_ChooseOption
            title="TIME"
            array={FG_units_time}
            tellParentOptionChanged={handleAnyInputChange}
            parentForceValue={FG_OptionsObject.FG_Display_TIME}
            variant
          />
        </div>
        <FormControlLabel value="Applied" control={<Radio />} label="Applied Factor Group" />
        {/* APPLIED FACTOR GROUP---------------------------- */}

        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          <Input_ChooseOption
            title="POS"
            array={loadType == 'ROTARY' ? FG_units_pos_rot : FG_units_pos_lin}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentForceValue={FG_OptionsObject.FG_Applied_POS}
            variant
          />
          <Input_ChooseOption
            title="SPD"
            array={loadType == 'ROTARY' ? FG_units_spd_rot : FG_units_spd_lin}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentForceValue={FG_OptionsObject.FG_Applied_SPD}
            variant
          />
          <Input_ChooseOption
            title="ACC"
            array={loadType == 'ROTARY' ? FG_units_acc_rot : FG_units_acc_lin}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentForceValue={FG_OptionsObject.FG_Applied_ACC}
            variant
          />
          <Input_ChooseOption
            title="TIME"
            array={FG_units_time}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentForceValue={FG_OptionsObject.FG_Applied_TIME}
            variant
          />
        </div>
      </RadioGroup>
    </section>
  )
}

// ========Decode CANlog Options================

const DecodeCANlogOptionsInsertPart = () => {
  var { sidebarSelectedItem } = useContext(SidebarContext)
  var { setFreeTextVsCanLog, setToggleFilterWindow_app, setToggleSearchWindow_app } = useContext(
    DecodeCANlog_topbarOptionsContext
  )
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <section>
      {/* {sidebarSelectedItem == 'Decode CAN-Log' ? ( */}
      {true ? (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              borderRight: `1px solid ${colors.green[400]}`,
              paddingRight: '0.5rem',
              marginRight: '0.5rem'
            }}
          >
            <SwitchComponent
              option1="FreeText"
              option2="Upload File"
              tellParentValueChanged={setFreeTextVsCanLog}
            />
          </div>
          <ButtonTransparent
            sx={{
              border: `1px solid ${colors.primary[400]}`
            }}
            onClick={() => {
              document.querySelector('#TextAreaText_ID_global').value =
                VerifyCANopenValidityArray_RAW
            }}
          >
            Load Demo
          </ButtonTransparent>
          <IconButton
            sx={{ zoom: '1.1' }}
            onClick={() => {
              setToggleFilterWindow_app((prev) => !prev)
            }}
          >
            <FilterAltIcon />
          </IconButton>
          <IconButton
            sx={{ zoom: '1.1' }}
            onClick={() => {
              setToggleSearchWindow_app((prev) => !prev)
            }}
          >
            <SearchIcon />
          </IconButton>
        </section>
      ) : null}
    </section>
  )
}
const CalculatorDialog = ({
  CalcVsRegDialogStatus,
  setCalcVsRegDialogStatus,
  CalcVsRegister,
  setCalcVsRegister
}) => {
  console.log('CalculatorDialog')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [mode, setMode] = useState('DWORD') //DWORD, WORD, BYTE
  const [rez, setRez] = useState(32) //32, 16, 8
  const [hex, setHex] = useState(0)
  const [dec, setDec] = useState(0)
  const [array, setArray] = useState(hex2bin(0, 32).split(''))
  function closeWindow() {
    //X button from the Register component
    setCalcVsRegDialogStatus(false)
  }
  const bitsDisplayRef = useRef(null)
  function handleModeChange() {
    var temp = 0
    if (mode == 'DWORD') {
      setMode('WORD')
      setRez(16)
      temp = 16
    } else if (mode == 'WORD') {
      setMode('BYTE')
      setRez(8)
      temp = 8
    } else {
      setMode('DWORD')
      setRez(32)
      temp = 32
    }

    setHex(0)
    setDec(0)
    setArray(hex2bin(0, 32).split(''))
  }
  function handleHexChange(e) {
    if (e == '') {
      e = 0
    }
    setHex(e)
    setDec(hexToDec(e, rez))
    setArray(hex2bin(e, 32).split(''))
  }
  function handleDecChange(e) {
    if (e == '') {
      e = 0
    }
    setDec(e)
    setHex(decToHex(e, rez))
    setArray(hex2bin(decToHex(e, rez), 32).split(''))
  }

  function handleBitClick(e) {
    console.log(e.target.innerText)
    var temp = e.target.innerText
    if (temp == '1') {
      e.target.innerText = '0'
    } else {
      e.target.innerText = '1'
    }
    var bits = bitsDisplayRef.current.querySelectorAll('.bitClassExtract')
    var tempArray = []
    bits.forEach((el, index) => {
      tempArray[index] = el.innerText
    })
    var e = bin2hex(tempArray.join(''))
    setHex(e)
    setDec(hexToDec(e, rez))
    setArray(hex2bin(e, 32).split(''))
  }

  const OneBitComponent = ({ el, index }) => {
    return (
      <div
        key={index}
        style={{
          padding: '0.2rem',
          marginRight: (31 - index) % 4 == 0 ? '0.5rem' : '0rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '0.4rem'
        }}
      >
        <p
          style={{
            color:
              rez - (31 - index) <= 0
                ? `${colors.primary[200]}`
                : el == '1'
                ? `${colors.red[400]}`
                : `${colors.grey[100]}`,
            fontWeight: '550',
            fontSize: '1.1rem',
            cursor: rez - (31 - index) > 0 ? 'pointer' : null
          }}
          className="bitClassExtract"
          onClick={rez - (31 - index) > 0 ? handleBitClick : null}
        >
          {el}
        </p>
        <p
          style={{
            color: `${(31 - index) % 4 == 0 ? colors.green[400] : 'transparent'}`,
            justifyContent: 'center',
            fontSize: '0.5rem'
          }}
        >
          {31 - index}
        </p>
      </div>
    )
  }
  return (
    <Dialog
      open={CalcVsRegDialogStatus}
      onClose={() => setCalcVsRegDialogStatus(false)}
      sx={{
        // borderRadius: '10rem !important',
        boxShadow: 'none !important',
        zoom: '1.4',
        '& .MuiDialog-paper': {
          backgroundColor: CalcVsRegister == 'Register' ? 'transparent' : `${colors.primary[100]}`,
          // positition: 'absolute',
          top: CalcVsRegister == 'Register' ? `0` : '-10%',
          userSelect: 'none',
          // borderRadius: '1rem',
          boxShadow: 'none',
          backgroundImage: CalcVsRegister == 'Register' ? `none` : null,
          overflow: 'hidden'
        }
      }}
    >
      {CalcVsRegister == 'Calculator' ? (
        <section>
          {/* //Calculator Programmer */}
          <section
            style={{
              padding: '1rem 6rem 1rem  1rem'
            }}
          >
            <Typography variant="h5" sx={{ mb: '1rem', color: `${colors.grey[100]}` }}>
              Calculator Programmer
            </Typography>
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.1rem',
                flexDirection: 'column',
                marginLeft: '1rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <p>HEX: </p>
                <Input_AutoFormat
                  callback={'filterHex'}
                  resolution={rez}
                  forceValueFromParent={hex}
                  tellParentValueChanged={handleHexChange}
                  background={colors.primary[200]}
                  border={`1px solid ${colors.green[400]}`}
                  width={'8rem'}
                  height={'1.5rem'}
                />{' '}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <p>DEC: </p>
                <Input_AutoFormat
                  callback={'filterDecimal'}
                  resolution={rez}
                  forceValueFromParent={dec}
                  tellParentValueChanged={handleDecChange}
                  background={colors.primary[200]}
                  border={`1px solid ${colors.green[400]}`}
                  width={'8rem'}
                  height={'1.5rem'}
                />{' '}
              </div>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '2rem',
                  right: '1.5rem',
                  zoom: '0.8',
                  border: `1px solid ${colors.primary[100]}`,
                  marginLeft: '5rem'
                }}
                onClick={() => {
                  setCalcVsRegister('Register')
                }}
              >
                <LibraryBooksIcon />
              </IconButton>
              <ButtonTransparent
                sx={{
                  position: 'absolute',
                  top: '6.5rem',
                  right: '1.5rem',
                  zoom: '0.8',
                  border: `1px solid ${colors.primary[100]}`,
                  marginLeft: '5rem'
                }}
                onClick={handleModeChange}
              >
                {mode}
              </ButtonTransparent>
            </section>
          </section>
          {/* Binary representaion */}
          <section ref={bitsDisplayRef}>
            <div
              style={{
                display: 'flex',
                margin: '0 1.5rem',
                alignContent: 'center',
                marginTop: '1rem'
              }}
            >
              {array.slice(0, 16).map((el, index) => (
                <OneBitComponent key={index} el={el} index={index} />
              ))}
            </div>
            {/* Second ROW */}
            <div
              style={{
                display: 'flex',
                margin: '0 1.5rem',
                alignContent: 'center',
                alignItems: 'center',
                alignText: 'center',
                justifyContent: 'center'
              }}
            >
              {array.slice(16).map((el, index) => (
                <OneBitComponent key={index} el={el} index={index + 16} />
              ))}
            </div>
          </section>
        </section>
      ) : (
        <section
          style={{
            zoom: '0.7',
            height: '100%',
            padding: '1rem',
            marginBottom: '55vh',
            display: 'flex'
          }}
        >
          <RegisterSelectionComponent DecrementWindows={closeWindow} />
          <div>
            <p
              style={{
                zoom: '1.8',
                margin: ' 1rem 0 0 0.5rem',
                cursor: 'pointer',
                color: `${colors.green[400]}`,
                border: `1px solid ${colors.green[400]}`,
                borderRadius: '50%',
                padding: '0.1rem',
                background: `${colors.primary[200]}`
              }}
              onClick={() => {
                setCalcVsRegister('Calculator')
              }}
            >
              <CalculateRoundedIcon />
            </p>
          </div>
        </section>
      )}
    </Dialog>
  )
}
