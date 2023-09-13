import { useState, useEffect } from 'react'
import { Box, Button, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import CloseIcon from '@mui/icons-material/Close'
import { Button1, Button2 } from './SmallComponents'
import Modal from '@mui/material/Modal'

export const DrawerComponent = ({ title, component }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isDrawerOpen, closeDrawer] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === '`') {
        closeDrawer((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  function handleClose() {
    closeDrawer((prev) => {
      !prev
    })
  }

  return (
    <Box className="relative">
      <Box
        className="drawerComponenet "
        style={{
          background: `${colors.primary[100]}`,
          border: `1px solid ${colors.grey[500]}`,
          right: isDrawerOpen ? '0' : '-200rem'
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ borderBottom: `1px solid ${colors.grey[500]}` }}
        >
          <Typography variant="h2">{title} </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
        {component}
      </Box>
    </Box>
  )
}

export function ConfirmationModal({
  isModalOpen,
  tellParentModalClosed,
  tellParentModalConfirmed
}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [open, setOpen] = useState(isModalOpen)
  const handleClose = () => {
    setOpen(false)
    tellParentModalClosed()
  }

  useEffect(() => {
    setOpen(isModalOpen)
  }, [isModalOpen])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    bgcolor: `${colors.primary[200]}`,
    border: `1px solid ${colors.green[400]}`,
    p: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            sx={{ color: `${colors.yellow[600]}` }}
          >
            Warning !
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: '1rem', color: `${colors.grey[100]}` }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Box sx={{ mt: '0.2rem' }}>
            <Button1
              onClick={() => {
                handleClose()
                tellParentModalConfirmed()
              }}
            >
              Confirm
            </Button1>
            <Button2 onClick={handleClose}>Cancel</Button2>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
