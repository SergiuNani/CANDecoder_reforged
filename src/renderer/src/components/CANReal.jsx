import { useState, useRef, useEffect, useMemo } from 'react'
import { Box, Dialog, useTheme, Typography, IconButton } from '@mui/material'
import { tokens } from '../theme'
import { filteredMessages_auxGlobal } from '../scenes/Decode_CAN_LOG'
import { TableROW_simple } from './Table'
import { ButtonTransparent } from './SmallComponents'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { hexToDec } from '../functions/NumberConversion'
var GeneratedText = ''

export const CANRealComponent = ({ showCANReal, setShowCANReal }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [showGeneratedText, setShowGeneratedText] = useState(false)

  var arrCopy = [...filteredMessages_auxGlobal]
  const MasterMessages = ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT']
  arrCopy = arrCopy.filter((el) => MasterMessages.includes(el.type))

  function handleGenerateCANReal() {
    var Array = []
    var CheckedMsgs = document.getElementById('CANReal_TableID').querySelectorAll('.IncludeLine')
    // CheckedMsgs = [begginingEl, ...CheckedMsgs]
    CheckedMsgs.forEach((el, index) => {
      index = index + 1
      var finalStringRow = ''
      var [cobID, message] = el.querySelector('.cobID_CANreal').innerText.split('-')
      cobID = cobID.trim()
      var cobID_dec = hexToDec(cobID, 32).toString()
      message = message.trim()
      var dataString = ''

      message.match(/.{1,2}/g).forEach((byte) => {
        dataString += byte + '\t'
      })
      var obj = el.querySelector('.obj_CANreal').innerText
      if (obj.slice(0, 2) == '#x') obj = obj.slice(2)
      else if (obj == '-') obj = ''
      var obj_value = el.querySelector('.obj_value_CANreal').innerText
      var interpretation = el.querySelector('.interp_CANreal').innerText
      finalStringRow =
        ' '.repeat(12 - index.toString().length) +
        index +
        '\t' +
        ' ' +
        '\t' +
        ' ' +
        '\t' +
        ' ' +
        '\t' +
        ' '.repeat(14) +
        '0' +
        '\t' +
        obj +
        '\t' +
        ' '.repeat(10 - cobID_dec.length) +
        cobID_dec +
        '\t' +
        cobID.padStart(8, '0') +
        '\t' +
        ' ' +
        '\t' +
        ' ' +
        ' ' +
        message.length / 2 +
        '\t' +
        dataString

      Array.push(finalStringRow)
    })
    var firstRow =
      ' '.repeat(11) +
      '0' +
      '\t' +
      ' ' +
      '\t' +
      ' ' +
      '\t' +
      ' ' +
      '\t' +
      ' '.repeat(14) +
      '0' +
      '\t' +
      '\t' +
      ' '.repeat(9) +
      '0' +
      '\t' +
      '00000000' +
      '\t' +
      ' ' +
      '\t' +
      ' ' +
      ' ' +
      '0' +
      '\t' +
      ('00' + '\t').repeat(8)
    Array = [firstRow, ...Array]
    var tempText = Array.join('\n')

    GeneratedText = initStr + '\n' + tempText
    setShowGeneratedText(true)
  }
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'q') {
        if (showGeneratedText) {
          setShowGeneratedText(false)
        } else {
          handleGenerateCANReal()
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [showGeneratedText])
  const Msgs_Memo = useMemo(() => {
    return (
      <section id="CANReal_TableID">
        {arrCopy.length > 0 ? (
          arrCopy.map((iteration, index) => {
            return <TableROW_simple key={iteration.msgNr} obj={iteration} type="CANReal" />
          })
        ) : (
          <div style={{ color: `${colors.red[400]}` }}>{'Empty Array'}</div>
        )}
      </section>
    )
  }, [])
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
            onClick={handleGenerateCANReal}
          >
            Generate
          </ButtonTransparent>
        </div>
        <ul
          style={{ color: `${colors.green[400]}`, margin: '0 0 1rem 1rem', listStyleType: 'disc' }}
        >
          <li>Click on DECODE button first to apply the filters.</li>
          <li>The messages will be additionally be filtered by 'R_SDO', 'RPDOx' and 'NMT'</li>
        </ul>
        {Msgs_Memo}
      </div>

      {showGeneratedText ? (
        <CANRealComponent_2
          showGeneratedText={showGeneratedText}
          setShowGeneratedText={setShowGeneratedText}
        />
      ) : null}
    </Dialog>
  )
}

var initStr = `[--] ----------------------------------------------
[--] CANreal Send List
[--] ----------------------------------------------`
const CANRealComponent_2 = ({ showGeneratedText, setShowGeneratedText }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const TextAreaText_Ref = useRef()

  function handleCopyClipboard() {
    TextAreaText_Ref.current.select()
    navigator.clipboard.writeText(TextAreaText_Ref.current.value)
  }

  return (
    <Dialog
      open={showGeneratedText}
      onClose={() => setShowGeneratedText(false)}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: '1rem' }}>
            CANReal Generator Result
          </Typography>
          <IconButton sx={{ zoom: 1.5 }} onClick={handleCopyClipboard}>
            <ContentCopyIcon />
          </IconButton>
        </div>
        <ul
          style={{ color: `${colors.green[400]}`, margin: '0 0 1rem 1rem', listStyleType: 'disc' }}
        >
          <li>
            Extention:{' '}
            <span style={{ color: `${colors.red[400]}`, fontWeight: 700, fontSize: '1rem' }}>
              .cspsl
            </span>
          </li>
          <li>In CANreal: Send -- Load List </li>
        </ul>
        <textarea
          ref={TextAreaText_Ref}
          id="TextAreaCANReal"
          cols="100"
          defaultValue={GeneratedText}
          style={{
            background: `${colors.primary[300]}`,
            color: `${colors.yellow[600]}`,
            border: `1px solid ${colors.green[400]}`,
            height: '40vh',
            width: '100%'
          }}
        ></textarea>
      </div>
    </Dialog>
  )
}
