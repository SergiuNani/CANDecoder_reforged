import { useState, useEffect, useContext } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import CreateIcon from '@mui/icons-material/Create'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import HelpIcon from '@mui/icons-material/Help'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import AdbIcon from '@mui/icons-material/Adb'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useNavigate } from 'react-router-dom'
import { SidebarContext, ClearanceContext, AppContext } from '../../App'
import TableChartIcon from '@mui/icons-material/TableChart'
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
  const { sidebarSelectedItem, setSidebarSelectedItem } = useContext(SidebarContext)
  var { Clearance } = useContext(ClearanceContext)
  const { setShortcutTrigger_g } = useContext(AppContext)

  // var sidebarSelectedItem = 'Home'
  // function setSidebarSelectedItem() {
  //   console.log('setSidebarSelectedItem')
  // }
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
      } else if (event.ctrlKey && event.key === '4' && Clearance > 1) {
        setSidebarSelectedItem('Decode LOG')
        navigate('/Decode_CAN_LOG')
      } else if (event.ctrlKey && event.key === '3') {
        setSidebarSelectedItem('Edit Data')
        navigate('/EditDataWindow')
      } else if (event.ctrlKey && event.key === '5' && Clearance > 11) {
        setSidebarSelectedItem('More Options')
        navigate('/MoreOptionsWindow')
      } else if (event.ctrlKey && event.key === '6') {
        setSidebarSelectedItem('Help')
        navigate('/Help')
      } else if (event.altKey && event.key === 'v' && Clearance > 33) {
        setSidebarSelectedItem('Debug')
        navigate('/DebugScene')
      } else if (event.ctrlKey && event.key === 's') {
        setSidebarSelectedItem('Home')
        navigate('/Home')
        setShortcutTrigger_g((prev) => !prev)
        setTimeout(() => {
          document.querySelector('#HomeSearchBar').focus()
        }, 90)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [Clearance])

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
              icon={<LibraryBooksIcon />}
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

            {Clearance > 1 ? (
              <section>
                <Typography variant="h6" color={colors.grey[200]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
                  Decode
                </Typography>
                <Item
                  title="Decode LOG"
                  to="/Decode_CAN_LOG"
                  icon={<TableChartIcon />}
                  selected={sidebarSelectedItem}
                  setSelected={setSidebarSelectedItem}
                />
              </section>
            ) : null}
            {Clearance > 11 ? (
              <Item
                title="More Options"
                to="/MoreOptionsWindow"
                icon={<DragIndicatorIcon />}
                selected={sidebarSelectedItem}
                setSelected={setSidebarSelectedItem}
              />
            ) : null}

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
            {Clearance > 33 ? (
              <Item
                title="Debug"
                to="/DebugScene"
                icon={<AdbIcon />}
                selected={sidebarSelectedItem}
                setSelected={setSidebarSelectedItem}
              />
            ) : null}
            {Clearance > 33 ? (
              <Item
                title="DebugButton"
                // to="/DebugScene"
                icon={<HealthAndSafetyIcon />}
                selected={sidebarSelectedItem}
                setSelected={setSidebarSelectedItem}
              />
            ) : null}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
