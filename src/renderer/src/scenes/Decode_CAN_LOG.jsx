import React, { useState, useRef, useEffect, useContext, useMemo, Profiler, memo } from 'react'
import {
  Box,
  IconButton,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress
} from '@mui/material'
import {
  Header,
  SwitchComponent,
  Button3,
  TooltipClickable,
  Checkbox_Component,
  ButtonTransparent,
  CircularProgressWithLabel,
  ProgressComponent
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
import {
  DefaultTable,
  CreateGroupedFilteredArray,
  SimplifiedTable,
  DebugTable
} from '../components/Table'
import { GroupingOptionsForMessages } from '../data/SmallData'

export let MessagesDecoded_ArrayOfObjects = []
export let AllCAN_MsgsExtracted_array = []

const Decode_CAN_LOG_Window = () => {
  console.log('1. Decode_CAN_LOG++')
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)
  const [hideTableForceParentToggle, sethideTableForceParentToggle] = useState(false)
  const [shortcutToDecodeMessages, setShortcutToDecodeMessages] = useState(false)
  const [resetMainProgressBar, setResetMainProgressBar] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const TextAreaText_Ref = useRef()
  const Decode_CAN_LOG_ref = useRef()

  function handleMenuChange(event) {
    if (event === 'FreeText') {
      setFreeTextVsCanLog('FreeText')
    } else {
      setFreeTextVsCanLog('UploadFile')
    }
  }

  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        DontBotherWithPDO_flag[0] = 0 // Reset the convinience not to specify the PDOs
        SetAllPDOsEMPTY[0] = 0
        for (const prop in PDO_mapped) {
          //We reseting all the mapping which was done up to now
          if (PDO_mapped.hasOwnProperty(prop)) {
            PDO_mapped[prop] = []
          }
        }
        const fileContent = e.target.result
        setFileInnerText(fileContent)
        sethideTableForceParentToggle((prev) => !prev)
        setResetMainProgressBar((prev) => !prev)
      }

      reader.readAsText(file)
    }
  }
  function handleClickArrow() {
    DontBotherWithPDO_flag[0] = 0 // Reset the convinience not to specify the PDOs
    SetAllPDOsEMPTY[0] = 0
    var lines = TextAreaText_Ref.current.value
    setFileInnerText(lines)
    sethideTableForceParentToggle((prev) => !prev)
    setResetMainProgressBar((prev) => !prev)
  }
  //SHORTCUTS ---------------------------
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        if (
          !Decode_CAN_LOG_ref.current
            .querySelector('#DrawerComponent')
            .classList.contains('DrawerOpened')
        ) {
          //Open Drawer, hide table
          handleClickArrow()
        } else {
          setShortcutToDecodeMessages((prev) => !prev)
        }
      } else if (event.ctrlKey && event.key === 'Tab') {
        TextAreaText_Ref.current.focus()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const TableAndDrawerComponent = useMemo(() => {
    return (
      <Box
        ref={Decode_CAN_LOG_ref}
        style={{
          fontSize: '1.2rem'
        }}
      >
        <Profiler id="MyComponent" onRender={logProfilerData}>
          <DecodedTableOptions
            fileInnerText={fileInnerText}
            shortcutToDecodeMessages={shortcutToDecodeMessages}
            resetMainProgressBar={resetMainProgressBar}
            hideTableForceParentToggle={hideTableForceParentToggle}
          />
        </Profiler>
      </Box>
    )
  }, [fileInnerText, shortcutToDecodeMessages])

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
            {/* <VisuallyHiddenInput type="file" onChange={handleFileUpload} /> */}
            <input
              type="file"
              style={{
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: 1,
                overflow: 'hidden',
                position: 'absolute',
                bottom: 0,
                left: 0,
                whiteSpace: 'nowrap',
                width: 1
              }}
              onChange={handleFileUpload}
            />
          </Button>
        </section>
      )}

      {/* TABLE ----------------------------------------- */}
      {TableAndDrawerComponent}
    </Box>
  )
}

export default Decode_CAN_LOG_Window

const DecodedTableOptions = ({
  fileInnerText,
  hideTableForceParentToggle,
  shortcutToDecodeMessages,
  resetMainProgressBar
}) => {
  console.log('3. --------------- UserCANopenDecodedTable')
  const [TableOption, setTableOption] = useState('Default')
  const [isTableVisible, setisTableVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    setisTableVisible(false)
  }, [hideTableForceParentToggle])

  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(fileInnerText.split('\n'))
    return CreateDecodedArrayOfObjects(AllCAN_MsgsExtracted_array)
  }, [fileInnerText])

  const DecodePDOs_Memo = useMemo(() => {
    return (
      <DecodePDO_component
        MessagesDecoded_ArrayOfObjects={MessagesDecoded_ArrayOfObjects}
        setIsDrawerOpen={setIsDrawerOpen}
        resetMainProgressBar={resetMainProgressBar}
      />
    )
  }, [fileInnerText, resetMainProgressBar])

  const Drawer_Memo = useMemo(() => {
    return (
      <DrawerComponent_DecodeOptions
        setisTableVisible={setisTableVisible}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        shortcutToDecodeMessages={shortcutToDecodeMessages}
        TableOption={TableOption}
        setTableOption={setTableOption}
      />
    )
  }, [fileInnerText, isDrawerOpen, shortcutToDecodeMessages, TableOption])

  const Table_Memo = useMemo(() => {
    return (
      <Box>
        {isTableVisible &&
          (TableOption == 'Default' ? (
            <DefaultTable />
          ) : TableOption == 'Simplified' ? (
            <SimplifiedTable />
          ) : (
            <DebugTable />
          ))}
      </Box>
    )
  }, [fileInnerText, isTableVisible])

  return (
    <section>
      {DecodePDOs_Memo}
      {Drawer_Memo}
      {Table_Memo}
    </section>
  )
}

const DrawerComponent_DecodeOptions = ({
  setisTableVisible,
  isDrawerOpen,
  setIsDrawerOpen,
  TableOption,
  setTableOption,
  shortcutToDecodeMessages
}) => {
  console.log('4. DrawerComponent_DecodeOptions')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [optionReadingDirection, setOptionReadingDirection] = useState('UB')
  const [messageTypeSorting, setMessageTypeSorting] = useState('all')
  const [progressBarInsideDrawer, setProgressBarInsideDrawer] = useState(false)
  const [groupingOptionsRender, setGroupingOptionsRender] = useState(true)

  //Shortcut to open/close drawer
  useEffect(() => {
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

  //On CTRL+ENTER start decoding
  useEffect(() => {
    if (isDrawerOpen) {
      handleDECODE()
    }
  }, [shortcutToDecodeMessages])
  //Groups the messages and shows the table
  function handleDECODE() {
    console.log('handleDECODE')
    setProgressBarInsideDrawer(true)
    setisTableVisible(false)
    setTimeout(() => {
      setisTableVisible(true)
      setIsDrawerOpen(false)
      CreateGroupedFilteredArray(
        MessagesDecoded_ArrayOfObjects,
        GroupingOptionsForMessages,
        setProgressBarInsideDrawer
      )
    }, 800)
  }

  function handleClose() {
    setIsDrawerOpen((prev) => {
      !prev
    })
  }

  function handleGroupingOptions(e) {
    var option = e.target.closest('label').innerText.split('by')[1].split(' ')[1]
    var state = e.target.checked
    for (const prop in GroupingOptionsForMessages) {
      if (prop == option) {
        GroupingOptionsForMessages[prop] = state
      }
    }
    setGroupingOptionsRender((prev) => !prev)
  }

  const AvailableAxes_Component_Memo = useMemo(() => {
    return <AvailableAxes_Component />
  }, [])

  return (
    <Box className={isDrawerOpen ? 'DrawerOpened' : null} id="DrawerComponent">
      {isDrawerOpen ? (
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
            {/* TABLE DISPLAY OPTIONS ----------------- */}
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
                Table display options:{' '}
              </p>
              <RadioGroup
                row
                onChange={(e) => {
                  setTableOption(e.target.value)
                }}
                value={TableOption}
                sx={{
                  justifyContent: 'center',
                  '& .MuiSvgIcon-root': {
                    // fontSize: '1rem'
                    color: `${colors.green[400]}`
                  }
                }}
              >
                <FormControlLabel value="Default" control={<Radio />} label="Default" />
                <FormControlLabel value="Simplified" control={<Radio />} label="Simplified" />
                <FormControlLabel value="Debug" control={<Radio />} label="Debug" />
              </RadioGroup>
            </Box>
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
                <Checkbox_Component
                  label="Group by Modes of Operation"
                  onChange={handleGroupingOptions}
                  checked={GroupingOptionsForMessages.Modes}
                />
                <Checkbox_Component
                  label="Group by Mapping Objects"
                  onChange={handleGroupingOptions}
                  checked={GroupingOptionsForMessages.Mapping}
                />
                <Checkbox_Component
                  label="Group by Repetitive Messages (SYNC, Heartbeat, etc)"
                  onChange={handleGroupingOptions}
                  checked={GroupingOptionsForMessages.Repetitive}
                />
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
              {AvailableAxes_Component_Memo}
            </Box>
            {/* MESSAGES TYPE ----------------- */}
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
            {/* DISPLAY MESSAGES BUTTON + PROGRESS BAR----------------- */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center'
              }}
            >
              <Button3 onClick={handleDECODE}>DECODE</Button3>
              {progressBarInsideDrawer && <CircularProgress />}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
function AvailableAxes_Component() {
  console.log('6. AvailableAxes_Component ---- only once')
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

var diffTime = 0
function logProfilerData(id, phase, actualTime, baseTime, startTime, commitTime, interactions) {
  diffTime += commitTime - startTime
  console.log(actualTime)
  // console.log(diffTime)
}
