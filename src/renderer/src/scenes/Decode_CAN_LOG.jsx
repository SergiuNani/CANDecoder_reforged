import React, { useState, useRef, useEffect, useContext } from 'react'
import { Box, IconButton, Button } from '@mui/material'
import { Header } from '../components/SmallComponents'
import { SwitchComponent } from '../components/SmallComponents'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { UserVsDebugModeContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import { Extract_MSGs_from_text, CreateDecodedArrayOfObjects } from '../functions/CANopen'

export let MessagesDecoded_ArrayOfObjects = []

const Decode_CAN_LOG = () => {
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText')
  const [TextAreaText, setTextAreaText] = useState('')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { userVsDebugMode } = useContext(UserVsDebugModeContext)

  function handleMenuChange(event) {
    if (event === 'FreeText') {
      setFreeTextVsCanLog('FreeText')
    } else {
      setFreeTextVsCanLog('UploadFile')
    }
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  })

  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const fileContent = e.target.result
        setFileInnerText(fileContent)
      }

      reader.readAsText(file)
    }
  }
  function handleClickDecode() {
    var lines = TextAreaText
    setFileInnerText(lines)
  }
  return (
    <Box style={{ position: 'relative' }}>
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

      {freeTextVsCanLog === 'FreeText' ? (
        <section
          //FREE TEXT AREA SECTION
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
            }}
            onClick={handleClickDecode}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </section>
      ) : (
        <section
          //UPLOAD A FILE SECTION
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `1px solid yellow`,
            padding: '1rem'
          }}
        >
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
          </Button>
        </section>
      )}

      {/* TABLE ----------------------------------------- */}

      <Box
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // border: `1px solid yellow`,
          // height: '30vh',
          // overflow: 'auto',
          fontSize: '1.2rem'
        }}
      >
        {userVsDebugMode == 'USER' ? (
          <UserCANopenDecodedTable fileInnerText={fileInnerText} />
        ) : (
          <DebugCANopenDecodedTable fileInnerText={fileInnerText} />
        )}
      </Box>
    </Box>
  )
}

export default Decode_CAN_LOG

const UserCANopenDecodedTable = ({ fileInnerText }) => {
  if (fileInnerText == '') {
    return <div>CAN Nothing to decode. Oh Dear</div>
  }
  return <div>TOOO EARLY</div>
}

const FunArray = [
  {
    msgNr: '1',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'T_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '2',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'pop',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target VelocityDDDDDDD DDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDD DDDDDD DDDDDDDD',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'ahh',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: '45',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  },
  {
    msgNr: '3',
    OriginalMessage: '30)     62661.6  Rx         0581  8  60 81 60 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: ' 60 81 60 00 00 00 00 00 ',
    type: 'R_SDO',
    AxisID: '1',
    CS: '60',
    Object: '6081',
    ObjectName: 'Target Velocity',
    Data: '00 00 00 00',
    Interpretation: 'Confirming the write to object 6081'
  }
]

const DebugCANopenDecodedTable = ({ fileInnerText }) => {
  if (fileInnerText == '') {
    return <div>Debug Nothing to decode. Oh Dear</div>
  }
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var originalLines = fileInnerText.split('\n')
  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(originalLines)
  MessagesDecoded_ArrayOfObjects = CreateDecodedArrayOfObjects(AllCAN_MsgsExtracted_array)

  return (
    <section>
      <Box>
        <table
          style={{
            width: '100%',
            position: 'relative',
            color: `${colors.grey[100]}`,
            background: `${colors.blue[300]}`,
            fontFamily: 'Calibri'
          }}
        >
          <thead
            style={{
              fontWeight: '700',
              position: 'sticky',
              top: '2.5rem',
              background: `${colors.primary[300]}`,
              zIndex: 1
            }}
          >
            {/* Table ROW FOR THEAD---------------------------- */}
            <tr>
              <th
                style={{
                  padding: '0.5rem'
                }}
              >
                NR
              </th>
              <th>Original Message</th>
              <th>Type</th>
              <th>AxisID</th>
              <th>CS</th>
              <th>Object</th>
              <th>Object Name</th>
              <th>Data</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {MessagesDecoded_ArrayOfObjects.map((iteration, index) => {
              var isRecieveTypeMessage = [
                'R_SDO',
                'RPDO1',
                'RPDO2',
                'RPDO3',
                'RPDO1',
                'NMT'
              ].includes(iteration.type)
              return (
                <tr
                  key={index}
                  style={{
                    borderBottom: `1px solid ${colors.grey[400]}`,
                    background: isRecieveTypeMessage ? `${colors.blue[200]}` : 'inherit',
                    borderLeft: isRecieveTypeMessage
                      ? `0.5rem solid ${colors.primary[400]}`
                      : 'inherit'
                  }}
                >
                  <td
                    style={{
                      textAlign: 'center',
                      padding: '0.7rem 0'
                    }}
                  >
                    {iteration.msgNr}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {iteration.CobID} - {iteration.FrameData}
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      color: `${colors.blue[100]}`,
                      fontWeight: '600'
                    }}
                  >
                    {iteration.type}
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      color: `${colors.personal[100]}`,
                      fontWeight: '700'
                    }}
                  >
                    {iteration.AxisID}
                  </td>
                  <td style={{ textAlign: 'center' }}>{iteration.CS}</td>
                  <td
                    style={{
                      textAlign: 'center',
                      color: `${colors.yellow[100]}`,
                      fontWeight: '600'
                    }}
                  >
                    {iteration.Object}
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      maxWidth: '10rem',
                      overflowY: 'auto'
                    }}
                  >
                    {iteration.ObjectName}
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      color: `${colors.green[100]}`,
                      fontWeight: '700'
                    }}
                  >
                    {iteration.Data}
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      maxWidth: '25rem',
                      overflowY: 'auto'
                    }}
                  >
                    {iteration.Interpretation}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </section>
  )
}
