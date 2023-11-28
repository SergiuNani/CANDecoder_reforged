import { useState, useEffect, forwardRef } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import CloseIcon from '@mui/icons-material/Close'
import { Button1, Button3 } from './SmallComponents'
import Modal from '@mui/material/Modal'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

export const DrawerComponent = ({ title, component }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isDrawerOpen, closeDrawer] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === '`') {
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
        style={{
          position: 'fixed',
          width: '30rem',
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '1rem',
          height: '95vh',
          padding: '20px',
          boxShadow: '5px 0px 15px rgba(0, 0, 0, 0.2)',
          transition: 'right 0.3s ease-in-out',
          overflow: 'auto',
          background: `${colors.primary[100]}`,
          border: `1px solid ${colors.grey[400]}`,
          zIndex: 2,
          right: isDrawerOpen ? '0' : '-200rem'
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ borderBottom: `1px solid ${colors.grey[400]}` }}
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
  tellParentModalConfirmed,
  message
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
            {message}
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
            <Button3 onClick={handleClose}>Cancel</Button3>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export function SnackBarMessage({ message, severity, isOpen, closeSnackBarParent }) {
  //severity="error || warning || info || success"
  //------------------Parent:
  // const [openSnackBar, setOpenSnackBar] = useState(false)

  // {
  //   openSnackBar && (
  //     <SnackBarMessage
  //       message="This is Snackbar 1"
  //       severity="success"
  //       isOpen={openSnackBar}
  //       closeSnackBarParent={closeSnackBarParent}
  //     />
  //   )
  // }

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [formattedMessage, setFormattedMessage] = useState('')
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />
  }

  const formatMessage = (message) => {
    const regex = /"([^"]+)"/g
    return message.replace(
      regex,
      '<span style="font-weight: bold; font-style: italic;">"$1"</span>'
    )
  }
  useEffect(() => {
    setFormattedMessage(formatMessage(message))
  }, [message])
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })
  const handleClose = (reason) => {
    if (reason === null) {
      return
    }
    closeSnackBarParent()
  }
  setTimeout(() => {
    handleClose()
  }, 7000)
  return (
    <>
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={TransitionLeft}
        sx={{
          mt: '2rem'
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%', color: `${colors.primary[600]}` }}
        >
          <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
        </Alert>
      </Snackbar>
    </>
  )
}
