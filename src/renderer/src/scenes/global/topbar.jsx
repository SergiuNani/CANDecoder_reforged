import { useContext, useState, useEffect, useRef } from 'react'
import { Box, IconButton, useTheme, Typography, useStepContext } from '@mui/material'
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
import { RegisterSelectionComponent } from './RegisterWindow'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { Verify_RS232_rawList, Verify_TechnoCAN_rawList } from '../../data/verifyRS232'
import {
  AppContext,
  ProtocolGlobalContext,
  FG_Context,
  DecodeCANlog_topbarOptionsContext,
  SidebarContext,
  ClearanceContext
} from '../../App'
import { Input_AutoFormat, Input_ChooseOption } from '../../components/ForumsComponents'
import {
  filterDecimal,
  filterDecimalWithComma,
  hex2bin,
  bin2hex,
  decToHex,
  hexToDec,
  asciiToDec
} from '../../functions/NumberConversion'
import {
  SwitchComponent,
  ButtonTransparent,
  Checkbox_Component
} from '../../components/SmallComponents'
import SearchIcon from '@mui/icons-material/Search'
import {
  FG_units_pos_rot,
  FG_units_spd_rot,
  FG_units_acc_rot,
  FG_units_spd_lin,
  FG_units_pos_lin,
  FG_units_acc_lin,
  FG_units_time,
  TrendTrackerObjects
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
import { DEMO_CANopen_raw } from '../../data/BigData'
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
  const [expandLogin, setExpandLogin] = useState(false)
  const { setProtocolGlobal } = useContext(ProtocolGlobalContext)
  const { Clearance } = useContext(ClearanceContext)
  const zoomLevel = useRef(1)
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === 'c') {
        setCalcVsRegDialogStatus(true)
        if (CalcVsRegister == 'Calculator') {
          setCalcVsRegister('Register')
        } else {
          setCalcVsRegister('Calculator')
        }
      } else if (event.ctrlKey && event.key === 'l') {
        setSettingsDialogOpen(true)
        setExpandLogin(true)
      } else if ((event.key == 'F1' || event.key == 'F2' || event.key == 'F3') && Clearance > 22) {
        if (event.key == 'F1') {
          setProtocolGlobal('CANOPEN')
        } else if (event.key == 'F2') {
          setProtocolGlobal('CAN')
        } else if (event.key == 'F3') {
          setProtocolGlobal('RS232')
        }
      } else if (event.ctrlKey && event.key === '+') {
        zoomLevel.current += 0.1
        document.querySelector('#root').style.zoom = zoomLevel.current
      } else if (event.ctrlKey && event.key === '-') {
        zoomLevel.current -= 0.1
        document.querySelector('#root').style.zoom = zoomLevel.current
      } else if (event.ctrlKey && event.key === '0') {
        zoomLevel.current = 1
        document.querySelector('#root').style.zoom = zoomLevel.current
      } else if (event.ctrlKey && event.key === 'w') {
        //Stop exiting the app
        event.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [CalcVsRegister, Clearance])

  return (
    <Box
      sx={{
        bgcolor: colors.primary[200],
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.2rem',
        userSelect: 'none'
      }}
    >
      <Box>
        <DecodeCANlogOptionsInsertPart />
      </Box>
      <SettingsDialog
        settingsDialogOpen={settingsDialogOpen}
        setSettingsDialogOpen={setSettingsDialogOpen}
        expandLogin={expandLogin}
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

export function SettingsDialog({ settingsDialogOpen, setSettingsDialogOpen, expandLogin }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var { Clearance } = useContext(ClearanceContext)

  function handleClose() {
    setSettingsDialogOpen(false)
  }
  return (
    <Dialog open={settingsDialogOpen} onClose={handleClose}>
      <div
        style={{
          border: `1px solid ${colors.primary[400]}`,
          padding: '1rem',
          background: `${colors.primary[200]}`,
          fontSize: '1rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 1rem 0 0'
          }}
        >
          <Typography variant="h4">Application Settings</Typography>
          <Typography variant="h3" sx={{ color: `${colors.yellow[500]}`, fontWeight: '700' }}>
            V1.3
          </Typography>
        </div>
        {Clearance > 22 ? (
          <AccordionComponent
            title="Working Mode"
            children={<WorkingModeInsertPart />}
            expanded={true}
          />
        ) : null}
        <AccordionComponent title="General Settings" children={<GeneralSettingsInsertPart />} />

        <AccordionComponent
          title="CANlog Settings"
          children={<CANlogSettingsPart />}
          expanded={true}
        />
        <AccordionComponent
          title="Authentication"
          children={<AutenthificationDialog expandLogin={expandLogin} />}
          expanded={expandLogin}
        />
      </div>
    </Dialog>
  )
}

const AccordionComponent = ({ title, children, defaultExpanded, expanded }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [expandedd, setExpandedd] = useState(expanded ?? false)
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      expanded={expandedd}
      sx={{ background: `${colors.primary[300]}`, userSelect: 'none' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          color: colors.yellow[500],
          fontSize: '1.2rem',
          borderBottom: `1px solid ${colors.primary[400]}`,
          '&.Mui-expanded': {
            minHeight: '3rem !important'
          },
          '& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
            margin: '0 !important'
          }
        }}
        onClick={() => {
          setExpandedd((prev) => !prev)
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
  const {
    ProtocolGlobal,
    setProtocolGlobal,
    ValidationMethod,
    setValidationMethod,
    FW_version,
    setFW_version
  } = useContext(ProtocolGlobalContext)
  var { Clearance } = useContext(ClearanceContext)

  return (
    <section style={{ padding: '1rem', display: 'flex', gap: '3rem' }}>
      <div>
        <li>Communication Protocol: </li>
        <RadioGroup
          onChange={(e) => {
            setProtocolGlobal(e.target.value)
          }}
          value={ProtocolGlobal}
          sx={{
            justifyContent: 'center',
            ml: '1rem',
            '& .MuiSvgIcon-root': {
              color: `${colors.green[400]}`
            }
          }}
        >
          <FormControlLabel value="CANOPEN" control={<Radio />} label="CANopen" />
          <FormControlLabel value="CAN" control={<Radio />} label="CANOpen + TechnoCAN" />
          <FormControlLabel value="RS232" control={<Radio />} label="RS232" />
        </RadioGroup>
        <br />
      </div>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Clearance > 22 ? (
          <div>
            <li>Firmware variables: </li>
            <RadioGroup
              onChange={(e) => {
                setFW_version(e.target.value)
              }}
              value={FW_version}
              sx={{
                justifyContent: 'center',
                ml: '1rem',
                '& .MuiSvgIcon-root': {
                  color: `${colors.green[400]}`
                },
                '& .MuiButtonBase-root': {
                  padding: '0.3rem'
                }
              }}
            >
              <FormControlLabel value="F514L" control={<Radio />} label="F514L" />
              <FormControlLabel value="FA00G" control={<Radio />} label="FA00G" />
            </RadioGroup>
          </div>
        ) : null}
        {Clearance > 33 ? (
          <div>
            <li>Validation Method</li>
            <RadioGroup
              onChange={(e) => {
                setValidationMethod(e.target.value)
              }}
              value={ValidationMethod}
              sx={{
                justifyContent: 'center',
                ml: '1rem',
                '& .MuiSvgIcon-root': {
                  color: `${colors.green[400]}`
                },
                '& .MuiButtonBase-root': {
                  padding: '0.3rem'
                }
              }}
            >
              <FormControlLabel value="Internal" control={<Radio />} label="Internal" />
              <FormControlLabel value="LocalStorage" control={<Radio />} label="LocalStorage" />
            </RadioGroup>
          </div>
        ) : null}
      </section>
    </section>
  )
}

const GeneralSettingsInsertPart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var { loadType, setLoadType, fullRot_IU, setFullRot_IU, slowLoop, setSlowLoop } =
    useContext(AppContext)

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

const CANlogSettingsPart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [TrendTrackerStatus, setTrendTrackerStatus] = useState(TrendTrackerObjects.status)
  const [toggleRender, setToggleRender] = useState(true)
  const [delayedUseEffect, setDelayedUseEffect] = useState(false)
  const { FG_DisplayVSApplied, setFG_DisplayVSApplied, FG_OptionsObject, setFG_OptionsObject } =
    useContext(FG_Context)
  var { loadType } = useContext(AppContext)
  var ArrayOfTrendTrakerObjects = Object.keys(TrendTrackerObjects).filter(
    (el) => !['showValue', 'status', 'difference'].includes(el)
  )

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

  function handleTrendTrackerCheckboxes(e) {
    var option = e.target.closest('label').innerText
    var state = e.target.checked
    for (const prop in TrendTrackerObjects) {
      if (prop == option) {
        TrendTrackerObjects[prop] = state
      }
    }
    setToggleRender((prev) => !prev)
  }
  return (
    <section style={{ padding: '1rem' }}>
      <section
        style={{
          marginBottom: '1rem',
          borderBottom: `1px solid ${colors.yellow[400]}`
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <li>Trend Tracker: </li>

          <Checkbox_Component
            label={TrendTrackerStatus}
            onChange={() => {
              if (TrendTrackerStatus == 'Enabled') {
                setTrendTrackerStatus('Disabled')
                TrendTrackerObjects.status = 'Disabled'
              } else {
                setTrendTrackerStatus('Enabled')
                TrendTrackerObjects.status = 'Enabled'
              }
            }}
            checked={TrendTrackerStatus == 'Enabled'}
          />
        </div>
        {TrendTrackerStatus == 'Enabled' && (
          <section
            style={{
              marginLeft: '2rem',
              padding: '1rem 0'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                gap: '0.5rem',
                alignItems: 'center'
                // zoom: 1.1
              }}
            >
              {ArrayOfTrendTrakerObjects.map((el, index) => {
                return (
                  <Checkbox_Component
                    key={index}
                    label={el}
                    onChange={handleTrendTrackerCheckboxes}
                    checked={TrendTrackerObjects[el]}
                  />
                )
              })}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Typography variant="h6">Notify if difference exceeds: </Typography>
              <Input_AutoFormat
                callback={filterDecimal}
                resolution={'TIME'}
                tellParentValueChanged={(e) => {
                  TrendTrackerObjects.difference = e
                }}
                forceValueFromParent={TrendTrackerObjects.difference}
                background={colors.blue[200]}
                border={`2px solid ${colors.blue[500]}`}
                width="5rem"
                center
                padding="0.2rem"
                blockValueReset
              />
            </div>
            <div>
              <Checkbox_Component
                label="Instead of arrows show subtracted value"
                onChange={() => {
                  if (TrendTrackerObjects.showValue) {
                    TrendTrackerObjects.showValue = false
                  } else TrendTrackerObjects.showValue = true
                  setToggleRender((prev) => !prev)
                }}
                checked={TrendTrackerObjects.showValue}
              />
            </div>
          </section>
        )}
      </section>

      <div>
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
      </div>
    </section>
  )
}

// ========Decode CANlog Options================

const DecodeCANlogOptionsInsertPart = () => {
  var { sidebarSelectedItem } = useContext(SidebarContext)
  var {
    freeTextVsCanLog,
    setFreeTextVsCanLog,
    setToggleFilterWindow_app,
    setToggleSearchWindow_app
  } = useContext(DecodeCANlog_topbarOptionsContext)
  const { ProtocolGlobal } = useContext(ProtocolGlobalContext)
  var { Clearance } = useContext(ClearanceContext)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.ctrlKey &&
        (event.key === 'ArrowRight' || event.key === 'ArrowLeft') &&
        sidebarSelectedItem == 'Decode LOG'
      ) {
        event.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })

        if (freeTextVsCanLog == 'CANlog') setFreeTextVsCanLog('FreeText')
        else setFreeTextVsCanLog('CANlog')
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [sidebarSelectedItem, freeTextVsCanLog])

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <section>
      {sidebarSelectedItem == 'Decode LOG' ? (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              borderRight: `1px solid ${colors.green[400]}`,
              paddingRight: '0.5rem',
              marginRight: '0.5rem'
            }}
          >
            <SwitchComponent option1="FreeText" option2="Upload File" />
          </div>
          <ButtonTransparent
            sx={{
              border: `1px solid ${colors.primary[400]}`
            }}
            onClick={() => {
              var text = ''
              if (ProtocolGlobal == 'RS232') {
                text = Verify_RS232_rawList
              } else if (ProtocolGlobal == 'CANOPEN') {
                text = DEMO_CANopen_raw
              } else if (ProtocolGlobal == 'CAN') {
                text = Verify_TechnoCAN_rawList
              }
              document.querySelector('#TextAreaText_ID_global').value = text
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

          {Clearance > 11 ? (
            <IconButton
              sx={{ zoom: '1.1' }}
              onClick={() => {
                setToggleSearchWindow_app((prev) => !prev)
              }}
            >
              <SearchIcon />
            </IconButton>
          ) : null}
          <p style={{ color: `${colors.blue[400]}`, fontWeight: '700' }}>{ProtocolGlobal}</p>
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

const AutenthificationDialog = ({ expandLogin }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const InputRef = useRef()
  const [level, setLevel] = useState(1)
  var { Clearance, setClearance } = useContext(ClearanceContext)
  useEffect(() => {
    if (expandLogin) {
      InputRef.current.focus()
    }
  }, [expandLogin])
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && document.activeElement === InputRef.current) {
        var pass = asciiToDec(InputRef.current.value)
        if (pass == 418548904545) {
          localStorage.setItem('Timer', 44)
          setClearance(44)
          setLevel(4)
        } else if (pass == 27988495321099876 || pass == 8319385953830004000 || pass == 1952804208) {
          setClearance(44)
          setLevel(4)
        } else if (pass == 465491092325) {
          localStorage.setItem('Timer', 33)
          setClearance(33)
          setLevel(3)
        } else if (pass == 1751474532) {
          localStorage.setItem('Timer', 22)
          setClearance(22)
          setLevel(2)
        } else if (pass == 32492133653505390) {
          localStorage.setItem('Timer', 11)
          setClearance(11)
          setLevel(1)
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [InputRef.current])

  useEffect(() => {
    var pass = localStorage.getItem('Timer')
    if (pass == '44') {
      setLevel(4)
    } else if (pass == '33') {
      setLevel(3)
    } else if (pass == '22') {
      setLevel(2)
    } else if (pass == '11') {
      setLevel(1)
    }
  }, [])
  return (
    <Box sx={{ padding: '1rem' }}>
      <li>Enter your login information</li>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="password"
          ref={InputRef}
          style={{
            color: `${colors.grey[700]}`,
            padding: '0.5rem',
            background: `${colors.primary[200]}`,
            border: `1px solid ${colors.green[400]}`,
            borderRadius: '0.5rem',
            margin: '0.5rem 0',
            fontSize: '1rem'
          }}
        />
      </div>
      <div style={{ fontSize: '1rem' }}>
        Clearance: <b style={{ color: `${colors.primary[400]}` }}>{level}</b>
      </div>
    </Box>
  )
}
