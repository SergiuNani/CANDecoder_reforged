import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
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
      onClick={() => setSelected(title)}
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
  const [selected, setSelected] = useState('HOME')

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
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
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
              margin: '0.5rem 0rem 0rem 0.4rem',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="1rem"
                style={{
                  transition: 'color 1s', // Adding transition for smooth color change
                  ':hover': {
                    color: 'green' // Desired color on hover
                  }
                }}
              >
                <Typography variant="h4">
                  CAN{' '}
                  <span
                    style={{
                      color: colors.red[500]
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
              title="HOME"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Tools
            </Typography>
            <Item
              title="Registers"
              to="/Registers"
              icon={<ListAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calculator"
              to="/contacts"
              icon={<CalculateIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Decode
            </Typography>
            <Item
              title="Decode CAN-Log"
              to="/Decode_CAN_LOG"
              icon={<AttachFileIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Decode Messages"
              to="/form"
              icon={<ReceiptLongIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              Encrypt
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '0 0 0.1rem 1.1rem' }}>
              More
            </Typography>
            <Item
              title="Help"
              to="/bar"
              icon={<HelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="React_Logic"
              to="/React_Logic"
              icon={<DragIndicatorIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="React_Logic2"
              to="/React_Logic2"
              icon={<DragIndicatorIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Debug"
              to="/DebugScene"
              icon={<AdbIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
