import { useContext, useState, createContext, useEffect } from 'react'
import { Box, IconButton, useTheme, Typography } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import CreateIcon from '@mui/icons-material/Create'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { RadioGroup, FormControlLabel } from '@mui/material'
import Radio from '@mui/material/Radio'
import {
  MotorSpecificationsContext,
  UserVsDebugModeContext,
  FG_Context,
  FG_OptionsStarter
} from '../../App'
import { Input_AutoFormat, Input_ChooseOption } from '../../components/ForumsComponents'
import { filterDecimal, filterDecimalWithComma } from '../../functions/NumberConversion'

import {
  FG_units_pos_rot,
  FG_units_spd_rot,
  FG_units_acc_rot,
  FG_units_spd_lin,
  FG_units_pos_lin,
  FG_units_acc_lin,
  FG_units_time
} from '../../data/SmallData'
const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false)
  const navigate = useNavigate()

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
      {/* SEARCH BAR */}
      <Box></Box>
      <SettingsDialog
        settingsDialogOpen={settingsDialogOpen}
        setSettingsDialogOpen={setSettingsDialogOpen}
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
            navigate('/EditDataWindow')
          }}
        >
          <CreateIcon />
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
          tellParentValueChanged={setFullRot_IU}
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
          tellParentValueChanged={setSlowLoop}
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

  const { FG_DisplayVSApplied, setFG_DisplayVSApplied, FG_OptionsObject, setFG_OptionsObject } =
    useContext(FG_Context)
  var { loadType } = useContext(MotorSpecificationsContext)

  // console.log(
  //   'DISPLAY: ' +
  //     FG_OptionsObject.FG_Display_POS +
  //     ' - ' +
  //     FG_OptionsObject.FG_Display_SPD +
  //     ' - ' +
  //     FG_OptionsObject.FG_Display_ACC +
  //     ' - ' +
  //     FG_OptionsObject.FG_Display_TIME
  // )
  // console.log(
  //   'Applied: ' +
  //     FG_OptionsObject.FG_Applied_POS +
  //     ' - ' +
  //     FG_OptionsObject.FG_Applied_SPD +
  //     ' - ' +
  //     FG_OptionsObject.FG_Applied_ACC +
  //     ' - ' +
  //     FG_OptionsObject.FG_Applied_TIME
  // )
  function handleAnyInputChange(value, title) {
    if (title == 'POS') setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_POS: value })
    else if (title == 'SPD') setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_SPD: value })
    else if (title == 'ACC') setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_ACC: value })
    else setFG_OptionsObject({ ...FG_OptionsObject, FG_Display_TIME: value })
    console.log('handleAnyInputChange MODIFY: ' + FG_OptionsObject.FG_Display_POS)
  }
  function handleAppliedFG_inputChange(value, title) {
    if (title == 'POS') setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_POS: value })
    else if (title == 'SPD') setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_SPD: value })
    else if (title == 'ACC') setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_ACC: value })
    else setFG_OptionsObject({ ...FG_OptionsObject, FG_Applied_TIME: value })
  }

  // useEffect(() => {
  //   if (loadType == 'ROTARY') {
  //     console.log(`WTF-----------------`)

  //     // setFG_OptionsObject(setFG_OptionsObject)
  //     setFG_OptionsObject({
  //       ...FG_OptionsObject,
  //       FG_Display_POS: 'IU',
  //       FG_Display_SPD: 'IU',
  //       FG_Display_ACC: 'IU',
  //       FG_Display_TIME: 'IU',
  //       FG_Applied_POS: 'IU',
  //       FG_Applied_SPD: 'IU',
  //       FG_Applied_ACC: 'IU',
  //       FG_Applied_TIME: 'IU'
  //     })
  //   } else {
  //     console.log(`Shit going down-----------------`)
  //     setFG_OptionsObject({
  //       ...FG_OptionsObject,
  //       FG_Display_POS: 'IU',
  //       FG_Display_SPD: 'IU',
  //       FG_Display_ACC: 'IU',
  //       FG_Display_TIME: 'IU',
  //       FG_Applied_POS: 'IU',
  //       FG_Applied_SPD: 'IU',
  //       FG_Applied_ACC: 'IU',
  //       FG_Applied_TIME: 'IU'
  //     })
  //   }
  // }, [loadType])
  return (
    <section style={{ padding: '1rem' }}>
      <li>Select "Applied Factor Group" only when it's activated in the drive as well.</li>

      <RadioGroup
        // row
        onChange={(e) => {
          setFG_DisplayVSApplied(e.target.value)
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
            forceValueReset={loadType}
            variant
          />
          {/* <Input_ChooseOption
            key={loadType + 'SPD'}
            title="SPD"
            array={loadType == 'ROTARY' ? FG_units_spd_rot : FG_units_spd_lin}
            tellParentOptionChanged={handleAnyInputChange}
            parentTellsFirstValue={FG_OptionsObject.FG_Display_SPD}
            variant
            forceValueReset={loadType}
          />
          <Input_ChooseOption
            key={loadType + 'ACC'}
            title="ACC"
            array={loadType == 'ROTARY' ? FG_units_acc_rot : FG_units_acc_lin}
            parentTellsFirstValue={FG_OptionsObject.FG_Display_ACC}
            tellParentOptionChanged={handleAnyInputChange}
            variant
            forceValueReset={loadType}
          />
          <Input_ChooseOption
            key={loadType + 'TIME'}
            title="TIME"
            array={FG_units_time}
            tellParentOptionChanged={handleAnyInputChange}
            parentTellsFirstValue={FG_OptionsObject.FG_Display_TIME}
            variant
            forceValueReset={loadType}
          /> */}
        </div>
        <FormControlLabel value="Applied" control={<Radio />} label="Applied Factor Group" />
        {/* APPLIED FACTOR GROUP---------------------------- */}
        {/* <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          <Input_ChooseOption
            key={loadType + 'POS1'}
            title="POS"
            array={loadType ? FG_units_pos_rot : FG_units_pos_lin}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentTellsFirstValue={FG_OptionsObject.FG_Applied_POS}
            variant
            forceValueReset={loadType}
          />
          <Input_ChooseOption
            key={loadType + 'SPD1'}
            title="SPD"
            array={loadType ? FG_units_spd_rot : FG_units_spd_lin}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentTellsFirstValue={FG_OptionsObject.FG_Applied_SPD}
            variant
            forceValueReset={loadType}
          />
          <Input_ChooseOption
            key={loadType + 'ACC1'}
            title="ACC"
            array={loadType ? FG_units_acc_rot : FG_units_acc_lin}
            parentTellsFirstValue={FG_OptionsObject.FG_Applied_ACC}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            variant
            forceValueReset={loadType}
          />
          <Input_ChooseOption
            key={loadType + 'TIME1'}
            title="TIME"
            array={FG_units_time}
            tellParentOptionChanged={handleAppliedFG_inputChange}
            parentTellsFirstValue={FG_OptionsObject.FG_Applied_TIME}
            variant
            forceValueReset={loadType}
          />
        </div> */}
      </RadioGroup>
    </section>
  )
}
