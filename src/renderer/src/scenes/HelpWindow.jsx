import { Header } from '../components/SmallComponents'
import { useState } from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { HelpRegister } from './global/RegisterWindow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ViewListIcon from '@mui/icons-material/ViewList'
import CalculateIcon from '@mui/icons-material/Calculate'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import HelpIcon from '@mui/icons-material/Help'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import AdbIcon from '@mui/icons-material/Adb'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import CreateIcon from '@mui/icons-material/Create'

const HelpWindow = () => {
  return (
    <>
      <Header
        title="Welcome to Help"
        subtitle="This section contains all the necessary information for correctly utilizing CANDecoder."
      ></Header>
      <ControlledAccordions />
    </>
  )
}

function ControlledAccordions() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '90%'
        }}
      >
        <AccordionComponent
          expanded={expanded}
          panelNR="1"
          handleChange={handleChange}
          icon={<ListAltIcon sx={{ zoom: 1.2 }} />}
          title="Register"
          subtitle=" This component allows you to search any Register and see what each bits mean"
          body={<HelpRegister />}
        />
        <AccordionComponent
          expanded={expanded}
          panelNR="2"
          handleChange={handleChange}
          icon={<CreateIcon sx={{ zoom: 1.2 }} />}
          title="Edit Data Menu"
          subtitle=" This menu allows you to edit any Register or Object"
          // body={</>}
        />
      </div>
    </div>
  )
}

export default HelpWindow

function AccordionComponent({ expanded, panelNR, handleChange, icon, body, title, subtitle }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Accordion
      expanded={expanded === `${panelNR}`}
      onChange={handleChange(`${panelNR}`)}
      sx={{ background: `${colors.primary[300]}`, color: `${colors.primary[600]}` }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ borderBottom: `1px solid ${colors.yellow[400]} ` }}
      >
        <Typography
          sx={{
            width: '33%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.2rem',
            color: `${colors.yellow[500]}`
          }}
        >
          {icon} {title}
        </Typography>
        <Typography sx={{ color: `${colors.yellow[400]}`, fontSize: '1rem' }}>
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{body}</AccordionDetails>
    </Accordion>
  )
}
