import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Box, IconButton, Button, Typography } from '@mui/material'
import { Header, SwitchComponent, Button1 } from '../components/SmallComponents'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { UserVsDebugModeContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import { Extract_MSGs_from_text, CreateDecodedArrayOfObjects } from '../functions/CANopen'
import { TooltipClickable } from '../components/SmallComponents'
import { Input_AutoFormat } from '../components/ForumsComponents'
import { filterDecimal, filterHex } from '../functions/NumberConversion'
import CloseIcon from '@mui/icons-material/Close'
import { RegisterTooltip } from '../components/Register'
import { DecodePDO_component } from './global/PDO'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

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
      <DrawerComponent_DecodeOptions />
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

const DebugCANopenDecodedTable = ({ fileInnerText }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [lineToScroll, setLineToScroll] = useState('')

  if (fileInnerText == '') {
    return <div> Nothing to decode. Oh Dear. Maybe try writing something so I can Decode</div>
  }
  const scrollRef = useRef(null)

  useEffect(() => {
    if (lineToScroll !== '') {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [lineToScroll])

  function handleNewSearch(event) {
    setLineToScroll(event)
  }
  var originalLines = fileInnerText.split('\n')
  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(originalLines)
  return (
    <Box sx={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          position: 'sticky',
          top: '2.5rem',
          background: `${colors.primary[200]}`
        }}
      >
        <Typography variant="h4">GOTO LINE: </Typography>
        <Input_AutoFormat
          callback={filterDecimal}
          resolution={'TIME'}
          tellParentValueChanged={handleNewSearch}
          forceValueFromParent={lineToScroll}
        />
      </div>
      <Box>
        {AllCAN_MsgsExtracted_array.map((iteration, index) => {
          const isHighlighted = index === lineToScroll - 1
          return (
            <div
              key={index}
              ref={isHighlighted ? scrollRef : null}
              style={{
                display: 'flex',
                border: isHighlighted
                  ? `4px solid ${colors.yellow[500]}`
                  : `1px solid ${colors.primary[400]}`,

                gap: '1rem',
                padding: '0.2rem'
              }}
            >
              <p style={{}}> [{iteration[0]}]. </p>
              <p style={{ color: `${colors.yellow[500]}` }}> {iteration[1]}</p>
              <div style={{ color: `${colors.red[300]}`, display: 'flex' }}>
                {' '}
                {iteration[4].map((i, ii) => {
                  return (
                    <p
                      key={ii + 'abc'}
                      style={{
                        display: 'flex'
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // border: `1px solid yellow`
                      }}
                    >
                      {' '}
                      {i} -
                    </p>
                  )
                })}
              </div>
              <p style={{ color: `${colors.green[100]}` }}>-- [{iteration[2]}]</p>
              <p style={{ color: `${colors.personal[100]}` }}>-- [{iteration[3]}]</p>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}

const UserCANopenDecodedTable = ({ fileInnerText }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [PDOareDone, setPDOareDone] = useState(false)

  if (fileInnerText == '') {
    fileInnerText = ` `
  }

  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(fileInnerText.split('\n'))
  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    return CreateDecodedArrayOfObjects(AllCAN_MsgsExtracted_array)
  }, [fileInnerText])

  return (
    <section>
      <Box>
        <DecodePDO_component
          MessagesDecoded_ArrayOfObjects={MessagesDecoded_ArrayOfObjects}
          setPDOareDone={setPDOareDone}
        />

        {PDOareDone && (
          <table
            style={{
              width: '100%',
              position: 'relative',
              color: `${colors.grey[100]}`,
              background: `${colors.blue[300]}`,
              fontFamily: 'Calibri',
              marginBottom: '20rem'
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
                  'RPDO4',
                  'NMT'
                ].includes(iteration.type)
                return (
                  <tr
                    key={index}
                    style={{
                      borderBottom: `1px solid ${colors.grey[300]}`,
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
                    <td style={{ textAlign: 'center', cursor: 'pointer' }}>
                      <TooltipClickable title={iteration.OriginalMessage} arrow placement="top">
                        <p>
                          {iteration.CobID} - {iteration.FrameData}
                        </p>
                      </TooltipClickable>
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
                      <RegisterTooltip objects={iteration.Object} objectData={iteration.Data}>
                        {iteration.Data}
                      </RegisterTooltip>
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        maxWidth: '25rem',
                        overflowY: 'auto',
                        fontWeight:
                          iteration.errorStatus == 'error'
                            ? '700'
                            : iteration.errorStatus == 'blue'
                            ? '700'
                            : 'inherit',
                        color:
                          iteration.errorStatus == 'error'
                            ? `${colors.red[500]}`
                            : iteration.errorStatus == 'warning'
                            ? `${colors.yellow[500]}`
                            : iteration.errorStatus == 'idk'
                            ? `${colors.primary[400]}`
                            : iteration.errorStatus == 'blue'
                            ? `${colors.personal[300]}`
                            : 'inherit'
                      }}
                    >
                      {iteration.Interpretation}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Box>
    </section>
  )
}

export const DrawerComponent_DecodeOptions = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isDrawerOpen, closeDrawer] = useState(true)

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
          <Typography variant="h3">CAN-LOG Display Settings </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
        <CanOpenDisplaySettings />
      </Box>
    </Box>
  )
}

function CanOpenDisplaySettings() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [optionReadingDirection, setOptionReadingDirection] = useState('UB')
  const [lowerLimit, setLowerLimit] = useState(1)
  const [upperLimit, setUpperLimit] = useState(3)

  const [messageTypeSorting, setMessageTypeSorting] = useState('all')

  return (
    <Box>
      {/* Reading Direction Radio Buttons ----------------- */}
      <Box
        sx={{
          border: `2px solid ${colors.primary[400]}`,
          borderRadius: '1rem',
          margin: '1rem 0',
          background: `${colors.blue[200]}`,
          padding: '0.4rem'
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            color: `${colors.yellow[500]}`
          }}
        >
          CAN_LOG reading direction:{' '}
        </p>
        <RadioGroup
          row
          onChange={(e) => {
            setOptionReadingDirection(e.target.value)
          }}
          value={optionReadingDirection}
          sx={{
            justifyContent: 'center',
            '& .MuiSvgIcon-root': {
              // fontSize: '1rem'
              color: `${colors.green[400]}`
            }
          }}
        >
          <FormControlLabel value="UB" control={<Radio />} label="Up-Bottom" />
          <FormControlLabel value="BU" control={<Radio />} label="Bottom-Up" />
        </RadioGroup>
      </Box>

      {/* Choose interval  ----------------- */}

      <Box
        sx={{
          border: `2px solid ${colors.primary[400]}`,
          borderRadius: '1rem',
          margin: '1rem 0',
          background: `${colors.blue[200]}`,
          padding: '0.4rem',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          gap: '1.3rem'
        }}
      >
        <Typography
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            color: `${colors.yellow[500]}`
          }}
        >
          Choose interval :
        </Typography>
        <Input_AutoFormat
          callback={filterDecimal}
          resolution={'TIME'}
          tellParentValueChanged={(value) => {
            if (value == '0') value = '1'
            setLowerLimit(value)
          }}
          forceValueFromParent={lowerLimit}
          width={'4rem'}
          border={`2px solid ${colors.primary1[200]}`}
          color={`${colors.primary[600]}`}
          center
          blockValueReset
          padding="0.1rem"
        />

        <Input_AutoFormat
          callback={filterDecimal}
          resolution={'TIME'}
          tellParentValueChanged={(value) => {
            if (value == '0') value = '1'
            setUpperLimit(value)
          }}
          forceValueFromParent={upperLimit}
          width={'4rem'}
          border={`2px solid ${colors.primary1[200]}`}
          color={`${colors.primary[600]}`}
          center
          blockValueReset
          padding="0.1rem"
        />
      </Box>
      {/* Available Axes  ----------------- */}

      <Box
        sx={{
          border: `2px solid ${colors.primary[400]}`,
          borderRadius: '1rem',
          margin: '1rem 0',
          background: `${colors.blue[200]}`,
          padding: '0.4rem'
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            color: `${colors.yellow[500]}`
          }}
        >
          Available Axes:{' '}
        </p>
      </Box>

      {/* Message Types ----------------- */}

      <Box
        sx={{
          border: `2px solid ${colors.primary[400]}`,
          borderRadius: '1rem',
          margin: '1rem 0',
          background: `${colors.blue[200]}`,
          padding: '0.4rem'
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            color: `${colors.yellow[500]}`
          }}
        >
          Sort By:{' '}
        </p>

        <RadioGroup
          row
          onChange={(e) => {
            setMessageTypeSorting(e.target.value)
          }}
          value={messageTypeSorting}
          sx={{
            justifyContent: 'center',
            '& .MuiSvgIcon-root': {
              // fontSize: '1rem'
              color: `${colors.green[400]}`,
              display: 'flex',
              gap: '2rem'
            }
          }}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="master" control={<Radio />} label="Master" />
          <FormControlLabel value="mapping" control={<Radio />} label="Mapping" />
          <FormControlLabel value="errors" control={<Radio />} label="Errors" />
        </RadioGroup>
      </Box>
    </Box>
  )
}
