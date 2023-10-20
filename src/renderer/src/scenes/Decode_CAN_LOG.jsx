import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import {
  Box,
  IconButton,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material'
import {
  Header,
  SwitchComponent,
  Button3,
  TooltipClickable,
  Checkbox_Component,
  ButtonTransparent
} from '../components/SmallComponents'
import { tokens } from '../theme'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { UserVsDebugModeContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import {
  Extract_MSGs_from_text,
  CreateDecodedArrayOfObjects,
  CanLogStatistics
} from '../functions/CANopen'
import { Input_AutoFormat } from '../components/ForumsComponents'
import { filterDecimal, filterHex } from '../functions/NumberConversion'
import CloseIcon from '@mui/icons-material/Close'
import { RegisterTooltip } from '../components/Register'
import { DecodePDO_component } from './global/PDO'
import { DontBotherWithPDO_flag, SetAllPDOsEMPTY } from './global/PDO'
import { PDO_mapped } from '../functions/CANopenFunctions'
import { TableComponent } from '../components/Table'
export let MessagesDecoded_ArrayOfObjects = []

const Decode_CAN_LOG = () => {
  console.log('1. Decode_CAN_LOG++')
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)
  const [hideTableForceParentToggle, sethideTableForceParentToggle] = useState(false)
  const [forceDecodeFromParent, setforceDecodeFromParent] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { userVsDebugMode } = useContext(UserVsDebugModeContext)

  const TextAreaText_Ref = useRef()
  const Decode_CAN_LOG_ref = useRef()
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
        DontBotherWithPDO_flag[0] = 0 // Force for PDO window to reapear
        SetAllPDOsEMPTY[0] = 0
        for (const prop in PDO_mapped) {
          if (PDO_mapped.hasOwnProperty(prop)) {
            PDO_mapped[prop] = []
          }
        }
        const fileContent = e.target.result
        setFileInnerText(fileContent)
        sethideTableForceParentToggle((prev) => !prev)
      }

      reader.readAsText(file)
    }
  }
  function handleClickArrow() {
    DontBotherWithPDO_flag[0] = 0 // Force for PDO window to reapear
    SetAllPDOsEMPTY[0] = 0
    var lines = TextAreaText_Ref.current.value
    setFileInnerText(lines)
    sethideTableForceParentToggle((prev) => !prev)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        if (
          !Decode_CAN_LOG_ref.current
            .querySelector('#DrawerComponent')
            .classList.contains('DrawerOpened')
        ) {
          //Open Drawer, close table
          console.log('YOOO')
          handleClickArrow()
        } else {
          console.log('NOOO')
          setforceDecodeFromParent((prev) => !prev)
        }
        // setIsDrawerOpen((prev) => !prev)
      } else if (event.ctrlKey && event.key === 'Tab') {
        TextAreaText_Ref.current.focus()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const TableDisplay = useMemo(() => {
    return (
      <Box
        ref={Decode_CAN_LOG_ref}
        style={{
          fontSize: '1.2rem'
        }}
      >
        {userVsDebugMode == 'USER' ? (
          <UserCANopenDecodedTable
            fileInnerText={fileInnerText}
            hideTableForceParentToggle={hideTableForceParentToggle}
            forceDecodeFromParent={forceDecodeFromParent}
          />
        ) : (
          <DebugCANopenDecodedTable
            fileInnerText={fileInnerText}
            hideTableForceParentToggle={hideTableForceParentToggle}
          />
        )}
      </Box>
    )
  }, [fileInnerText, forceDecodeFromParent, userVsDebugMode])

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
            ref={TextAreaText_Ref}
            cols="100"
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
            onClick={handleClickArrow}
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
            border: `1px solid  ${colors.primary[400]}`,
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
      {TableDisplay}
    </Box>
  )
}

export default Decode_CAN_LOG

const DebugCANopenDecodedTable = ({ fileInnerText }) => {
  console.log('2. DebugCANopenDecodedTable')
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

const UserCANopenDecodedTable = ({
  fileInnerText,
  hideTableForceParentToggle,
  forceDecodeFromParent
}) => {
  console.log('3. UserCANopenDecodedTable')
  const [displayTable, setDisplayTable] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    setDisplayTable(false)
  }, [hideTableForceParentToggle])

  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(fileInnerText.split('\n'))
  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    return CreateDecodedArrayOfObjects(AllCAN_MsgsExtracted_array)
  }, [fileInnerText])

  return (
    <section>
      <Box>
        <DecodePDO_component
          MessagesDecoded_ArrayOfObjects={MessagesDecoded_ArrayOfObjects}
          setIsDrawerOpen={setIsDrawerOpen}
        />

        <DrawerComponent_DecodeOptions
          setDisplayTable={setDisplayTable}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          forceDecodeFromParent={forceDecodeFromParent}
        />

        {displayTable && <TableComponent filtereGroupeddArray={MessagesDecoded_ArrayOfObjects} />}
      </Box>
    </section>
  )
}

export const DrawerComponent_DecodeOptions = ({
  setDisplayTable,
  isDrawerOpen,
  setIsDrawerOpen,
  forceDecodeFromParent
}) => {
  console.log('4. DrawerComponent_DecodeOptions')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [optionReadingDirection, setOptionReadingDirection] = useState('UB')
  const [messageTypeSorting, setMessageTypeSorting] = useState('all')

  useEffect(() => {
    //Shortcut to open/close drawer
    const handleKeyPress = (event) => {
      console.log('event.key')
      if (event.ctrlKey && event.key === '`') {
        setIsDrawerOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    handleDECODE()
  }, [forceDecodeFromParent])

  function handleDECODE() {
    console.log('handleDECODE')
    setDisplayTable(true)
    setIsDrawerOpen(false)
  }

  function handleClose() {
    setIsDrawerOpen((prev) => {
      !prev
    })
  }

  return (
    <Box className={isDrawerOpen ? 'DrawerOpened' : null} id="DrawerComponent">
      <Box
        style={{
          position: 'fixed',
          top: '3rem',
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
        <Box sx={{ userSelect: 'none' }}>
          {console.log('5. CanLogDisplaySettings')}
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
          {/* GROUPING OPTIONS ----------------- */}
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
              Grouping Options:{' '}
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                marginLeft: '2rem',
                gap: '0.5rem'
              }}
            >
              <Checkbox_Component label="Group by Axis ID" />
              <Checkbox_Component label="Group by Modes of Operation" />
              <Checkbox_Component label="Group by Mapping Objects" />
              <Checkbox_Component label="Group by Repetitive messages" />
            </div>
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
            <AvailableAxes_Component />
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
          {/* Display Messages Button ----------------- */}
          <Box>
            <Button3 onClick={handleDECODE}>DECODE</Button3>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
function AvailableAxes_Component({}) {
  console.log('6. AvailableAxes_Component ---- NOTGOOD')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [renderToggle, setRenderToggle] = useState(true)

  function handleAxisClick(e) {
    var axis = e.target.textContent.split(': ')[1]
    var arrayIndex = CanLogStatistics.findIndex((iteration) => {
      return iteration.Axis[0] == axis
    })
    if (arrayIndex != -1) {
      var AxisState = CanLogStatistics[arrayIndex].Axis[1]
      Object.keys(CanLogStatistics[arrayIndex]).forEach((prop) => {
        CanLogStatistics[arrayIndex][prop][1] = !AxisState
      })
      setRenderToggle((prev) => !prev)
    }
  }

  function handleChecboxClicked(e) {
    var axis = e.target.closest('.AxisIndication').querySelector('button').innerText
    var propToChange = e.target.parentElement.parentElement.innerText.split(' - ')[0]
    axis = axis.split(': ')[1]
    var arrayIndex = CanLogStatistics.findIndex((iteration) => {
      return iteration.Axis[0] == axis
    })

    if (arrayIndex != -1) {
      // Check if all other props (except 'Axis') have the opposite value of the clicked checkbox
      var currentCheckboxState = CanLogStatistics[arrayIndex][propToChange][1]
      const allPropsAreTheSameState = Object.keys(CanLogStatistics[arrayIndex]).every((prop) => {
        return (
          prop === 'Axis' ||
          prop === propToChange ||
          CanLogStatistics[arrayIndex][prop][1] !== currentCheckboxState
        )
      })

      // If all other props have the opposite value, update the 'Axis' property
      if (allPropsAreTheSameState) {
        CanLogStatistics[arrayIndex].Axis[1] = !currentCheckboxState
      }

      // Update the clicked checkbox's value
      CanLogStatistics[arrayIndex][propToChange][1] = !currentCheckboxState
      if (!currentCheckboxState == true) {
        CanLogStatistics[arrayIndex].Axis[1] = true
      }
      setRenderToggle((prev) => !prev)
    }
  }
  return (
    <Box>
      {CanLogStatistics.map((axisIteration) => {
        return (
          <Box key={axisIteration.Axis}>
            {/* ONE AXIS  ---------- */}
            <Box
              sx={{
                border: axisIteration.Axis[1] ? `1px solid ${colors.red[500]}` : null,
                borderRadius: '1rem',
                marginBottom: '1rem',
                padding: '0.1rem'
              }}
              className="AxisIndication"
            >
              <ButtonTransparent
                sx={{
                  fontSize: '1.1rem',
                  color: `${colors.red[500]}`,
                  fontWeight: '700'
                }}
                onClick={handleAxisClick}
              >
                Axis: {axisIteration.Axis[0]}
              </ButtonTransparent>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  margin: '0 0 1rem 1rem'
                }}
              >
                {Object.keys(axisIteration).map((propName) => {
                  if (propName == 'Axis') return
                  return (
                    <div key={propName}>
                      <div
                        key={propName}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          maxWidth: '9rem',
                          whiteSpace: 'nowrap'
                          // overflow: 'hidden'
                        }}
                      >
                        <Checkbox_Component
                          label={`${propName} - ${axisIteration[propName][0]}`}
                          checked={axisIteration[propName][1]}
                          onChange={handleChecboxClicked}
                        />
                      </div>
                    </div>
                  )
                })}
              </Box>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
