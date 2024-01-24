import { useState } from 'react'
import { Box, Dialog, useTheme, Typography } from '@mui/material'
import { tokens } from '../theme'
import { filteredMessages_auxGlobal } from '../scenes/Decode_CAN_LOG'
import { TableROW_simple } from './Table'
import { ButtonTransparent } from './SmallComponents'

export const CANRealComponent = ({ showCANReal, setShowCANReal }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var arrCopy = [...filteredMessages_auxGlobal]
  const MasterMessages = ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT']
  arrCopy = arrCopy.filter((el) => MasterMessages.includes(el.type))
  return (
    <Dialog
      open={showCANReal}
      onClose={() => setShowCANReal(false)}
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: 'none'
        }
      }}
    >
      <div
        style={{
          border: `1px solid ${colors.primary[400]}`,
          padding: '1rem',
          background: `${colors.primary[200]}`
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 1rem'
          }}
        >
          <Typography variant="h4" sx={{ mb: '1rem' }}>
            CANReal Generator
          </Typography>
          <ButtonTransparent
            sx={{
              zoom: 1.3,
              color: `${colors.grey[100]}`,
              background: `${colors.primary[500]}`
            }}
          >
            Generate
          </ButtonTransparent>
        </div>
        <ul
          style={{ color: `${colors.green[400]}`, margin: '0 0 1rem 1rem', listStyleType: 'disc' }}
        >
          <li>Click on DECODE button first to apply the filters.</li>
        </ul>

        <section>
          {arrCopy.length > 0 ? (
            arrCopy.map((iteration, index) => {
              return <TableROW_simple key={iteration.msgNr} obj={iteration} type="CANReal" />
            })
          ) : (
            <div style={{ color: `${colors.red[400]}` }}>{'Empty Array'}</div>
          )}
        </section>
      </div>
    </Dialog>
  )
}
