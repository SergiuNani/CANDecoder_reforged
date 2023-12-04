import { useContext, useState, createContext, useEffect, useRef } from 'react'
import { Box, IconButton, useTheme, Typography } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import CreateIcon from '@mui/icons-material/Create'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import Accordion from '@mui/material/Accordion'
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded'

import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { VerifyCANopenValidityArray_RAW } from '../../data/VerifyAlgorithmData'
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
  const [CalculatorStatus, setCalculatorStatus] = useState(true)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'c') {
        setCalculatorStatus((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

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
        CalculatorStatus={CalculatorStatus}
        setCalculatorStatus={setCalculatorStatus}
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
            setCalculatorStatus(true)
          }}
        >
          <CalculateRoundedIcon />
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
const CalculatorDialog = ({ CalculatorStatus, setCalculatorStatus }) => {
  console.log('CalculatorDialog')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [mode, setMode] = useState('DWORD') //DWORD, WORD, BYTE
  const [rez, setRez] = useState(32) //32, 16, 8
  const [hex, setHex] = useState(0)
  const [dec, setDec] = useState(0)
  const [binar, setBinar] = useState(0)
  const [array, setArray] = useState(hex2bin(0, 32).split(''))

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
    setBinar(hex2bin(0, temp))
    setArray(hex2bin(0, 32).split(''))
  }
  function handleHexChange(e) {
    if (e == '') {
      e = 0
    }
    setHex(e)
    setDec(hexToDec(e, rez))
    setBinar(hex2bin(e, rez))
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

  const OneBitComponent = ({ el, index }) => {
    return (
      <div
        key={index}
        style={{
          // border: `1px solid yellow`,
          padding: '0.2rem',
          marginRight: (31 - index) % 4 == 0 ? '0.5rem' : '0rem'
        }}
      >
        <p
          style={{
            color: el == '1' ? `${colors.red[400]}` : `${colors.grey[100]}`,
            fontWeight: '550',
            fontSize: '1.1rem'
          }}
        >
          {el}
        </p>
        <span
          style={{
            color: `${(31 - index) % 4 == 0 ? colors.grey[100] : 'transparent'}`,

            fontSize: '0.4rem'
          }}
        >
          {31 - index}
        </span>
      </div>
    )
  }
  return (
    <Dialog
      open={CalculatorStatus}
      onClose={() => setCalculatorStatus(false)}
      sx={{
        // borderRadius: '10rem !important',
        boxShadow: 'none !important',
        zoom: '1.4',
        '& .MuiDialog-paper': {
          backgroundColor: `${colors.primary[100]}`,
          // positition: 'absolute',
          top: '-20%'
          // borderRadius: '1rem',
          // boxShadow: 'none !important',
          // backgroundImage: `none`
        }
      }}
    >
      <section
        style={{
          padding: '1rem 6rem 1rem  1rem'
        }}
      >
        <Typography variant="h5" sx={{ mb: '1rem' }}>
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
      <section>
        <div
          style={{
            display: 'flex',
            margin: '0 1.5rem',
            alignContent: 'center'
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
    </Dialog>
  )
}
