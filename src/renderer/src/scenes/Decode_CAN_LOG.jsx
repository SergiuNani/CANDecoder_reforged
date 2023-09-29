import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Header } from '../components/SmallComponents'
import { SwitchComponent } from '../components/SmallComponents'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
const Decode_CAN_LOG = () => {
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText')
  const [TextAreaText, setTextAreaText] = useState('')

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleMenuChange(event) {
    if (event == 'FreeText') {
      setFreeTextVsCanLog('FreeText')
    } else {
      setFreeTextVsCanLog('UploadFile')
    }
  }
  return (
    <Box>
      <Header title="Decode a CAN LOG "></Header>

      {/* TOP MENU options --------------------------- */}
      <Box>
        <section
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '2rem'
          }}
        >
          <SwitchComponent
            option1="FreeText"
            option2="Upload File"
            tellParentValueChanged={handleMenuChange}
          />
        </section>
      </Box>

      {freeTextVsCanLog == 'FreeText' ? (
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <textarea
            name=""
            id=""
            cols="100"
            value={TextAreaText}
            onChange={(e) => {
              setTextAreaText(e.target.value)
            }}
            style={{
              background: `${colors.primary[300]}`,
              color: `${colors.yellow[600]}`,
              border: `1px solid ${colors.green[400]}`,
              height: '30vh',
              width: '80%'
            }}
          ></textarea>
          <IconButton
            sx={{
              zoom: '2'
              // color: `${colors.green[100]}`
            }}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </section>
      ) : (
        <section>
          <p>SECOND</p>
        </section>
      )}
      {/* TABLE ----------------------------------------- */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: `1px solid yellow`,
          height: '50vh'
        }}
      ></Box>
    </Box>
  )
}

export default Decode_CAN_LOG
