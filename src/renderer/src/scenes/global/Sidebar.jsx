import { useState, useEffect, useContext } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import CreateIcon from '@mui/icons-material/Create'

import HelpIcon from '@mui/icons-material/Help'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import AdbIcon from '@mui/icons-material/Adb'
import DvrIcon from '@mui/icons-material/Dvr'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined'
import { useNavigate } from 'react-router-dom'
import { SidebarContext } from '../../App'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import { handleDebugButton } from '../debug'
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        zoom: '1.2',
        margin: '0'
      }}
      onClick={() => {
        setSelected(title)

        if (title == 'DebugButton') {
          handleDebugButton()
        }
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(true)
  // const { sidebarSelectedItem, setSidebarSelectedItem } = useContext(SidebarContext)

  var sidebarSelectedItem = 'Home'
  function setSidebarSelectedItem() {
    console.log('setSidebarSelectedItem')
  }
  const navigate = useNavigate() //BUG uncomment this to enable shortcuts
  useEffect(() => {
    //SHORTCUTS
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === '1') {
        setSidebarSelectedItem('Home')
        navigate('/Home')
      } else if (event.ctrlKey && event.key === '2') {
        setSidebarSelectedItem('Registers')
        navigate('/Registers')
      } else if (event.ctrlKey && event.key === '3') {
        setSidebarSelectedItem('Decode CAN-Log')
        navigate('/Decode_CAN_LOG')
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
        position: 'sticky',
        top: 0,
        height: '100vh',
        '& .pro-sidebar-inner': {
          background: `${colors.primary[200]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '0.5rem 1rem 0.2rem 1rem !important'
        },
        '& .pro-inner-item:hover': {
          color: `${colors.primary[400]} !important`
        },
        '& .pro-menu-item.active': {
          color: `${colors.green[400]} !important`
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '0.5rem 0rem 0rem 0.4rem'
              // color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="1rem">
                <Typography variant="h4">
                  CAN{' '}
                  <span
                    style={{
                      color: colors.red[400]
                    }}
                  >
                    DECODER
                  </span>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Home"
              to="/Home"
              icon={<HomeOutlinedIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />

            <Typography variant="h6" color={colors.grey[200]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Tools
            </Typography>
            <Item
              title="Registers"
              to="/Registers"
              icon={<ListAltIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="Edit Data"
              to="/EditDataWindow"
              icon={<CreateIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />

            <Typography variant="h6" color={colors.grey[200]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Decode
            </Typography>
            <Item
              title="Decode CAN-Log"
              to="/Decode_CAN_LOG"
              icon={<DvrIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="Decode Messages"
              to="/form"
              icon={<ReceiptLongIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />

            <Typography variant="h6" color={colors.grey[200]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Encrypt
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Typography variant="h6" color={colors.grey[200]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              More
            </Typography>
            <Item
              title="Help"
              to="/Help"
              icon={<HelpIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="React_Logic"
              to="/React_Logic"
              icon={<DragIndicatorIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="React_Logic2"
              to="/React_Logic2"
              icon={<DragIndicatorIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="Debug"
              to="/DebugScene"
              icon={<AdbIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
            <Item
              title="DebugButton"
              // to="/DebugScene"
              icon={<HealthAndSafetyIcon />}
              selected={sidebarSelectedItem}
              setSelected={setSidebarSelectedItem}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
