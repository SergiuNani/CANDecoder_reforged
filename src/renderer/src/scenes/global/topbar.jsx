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
import { MotorSpecificationsContext } from '../../App'
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
        top: '0',
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
  var { loadType, setLoadType, fullRot_IU, setFullRot_IU, slowLoop, setSlowLoop } = useContext(
    MotorSpecificationsContext
  )
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
        {/*---------------------------------- Parameters for motors load------------------------------------------- */}
        <Accordion defaultExpanded sx={{ background: `${colors.primary[300]}` }}>
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
          >
            General Settings
          </AccordionSummary>
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
                mt: '1rem',
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
              />{' '}
              <p> IU </p>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
            >
              <li>Slow loop : </li>
              <Input_AutoFormat
                callback={filterDecimalWithComma}
                resolution={32}
                // inputType={fourOptionsRadioSelection}
                tellParentValueChanged={setSlowLoop}
                forceValueFromParent={slowLoop}
                iteration={1}
              />{' '}
              <p> ms </p>
            </div>
          </section>
        </Accordion>
      </div>
    </Dialog>
  )
}
