import { useContext, useState, createContext } from 'react'
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
import { MotorSpecificationsContext, UserVsDebugModeContext } from '../../App'
import { Input_AutoFormat } from '../../components/ForumsComponents'
import { filterDecimal, filterDecimalWithComma } from '../../functions/NumberConversion'

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
