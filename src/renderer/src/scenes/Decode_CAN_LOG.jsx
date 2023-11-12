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
  CircularProgress,
  Dialog
} from '@mui/material'
import {
  Header,
  SwitchComponent,
  Button3,
  Button1,
  Button2,
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
import { UserVsDebugModeContext, DecodeCANlog_topbarOptionsContext } from '../App'
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
import { PDOdetectedModal } from './global/PDO'
import {
  PDO_mapped,
  SortMappingByAxis,
  DontBotherWithPDO_flag,
  SetAllPDOsEMPTY
} from '../functions/CANopenFunctions'
import {
  DefaultTable,
  CreateGroupedFilteredArray,
  SimplifiedTable,
  DebugTable,
  TableROW_simple
} from '../components/Table'
import { GroupingOptionsForMessages } from '../data/SmallData'

export let MessagesDecoded_ArrayOfObjects = []
export let AllCAN_MsgsExtracted_array = []

const Decode_CAN_LOG_Window = () => {
  console.log('---1---. Decode_CAN_LOG_Window')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)
  const [hideTableForceParentToggle, sethideTableForceParentToggle] = useState(false)
  const [shortcutToDecodeMessages, setShortcutToDecodeMessages] = useState(false)
  const [resetMainProgressBar, setResetMainProgressBar] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var { freeTextVsCanLog } = useContext(DecodeCANlog_topbarOptionsContext)

  const TextAreaText_Ref = useRef()
  const Decode_CAN_LOG_ref = useRef()

  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        DontBotherWithPDO_flag[0] = 0 //BUG -  Reset the convinience not to specify the PDOs
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
    for (const prop in PDO_mapped) {
      //We reseting all the mapping which was done up to now
      if (PDO_mapped.hasOwnProperty(prop)) {
        PDO_mapped[prop] = []
      }
    }
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
          console.log('IT IS BAD ---------')
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
        <DecodedTableOptions
          fileInnerText={fileInnerText}
          shortcutToDecodeMessages={shortcutToDecodeMessages}
          resetMainProgressBar={resetMainProgressBar}
          hideTableForceParentToggle={hideTableForceParentToggle}
        />
      </Box>
    )
  }, [fileInnerText, shortcutToDecodeMessages])

  return (
    <Box style={{ position: 'relative' }}>
      <Header title="Decode a CAN LOG "></Header>
      {/* TOP MENU options --------------------------- */}

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

export let globalIndex = [0]

const DecodedTableOptions = ({
  fileInnerText,
  hideTableForceParentToggle,
  shortcutToDecodeMessages,
  resetMainProgressBar
}) => {
  console.log('---2---. DecodedTableOptions')
  const [TableOption, setTableOption] = useState('Default')
  const [isTableVisible, setisTableVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(true)
  const [openPDOModal, setOpenPDOModal] = useState(false)
  const [objectIterationPDO, setObjectIterationPDO] = useState(null)
  const [restartDecoding, setRestartDecoding] = useState(false)

  const { toggleFilterWindow } = useContext(DecodeCANlog_topbarOptionsContext)
  const { toggleAdvancedSearch } = useContext(DecodeCANlog_topbarOptionsContext)
  const initialRender = useRef(true)

  // SHORTCUTS==========================
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      if (isTableVisible) {
        setIsDrawerOpen((prev) => !prev)
      }
    }
  }, [toggleFilterWindow])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      if (isTableVisible) {
        setIsAdvancedSearchOpen((prev) => !prev)
      }
    }
  }, [toggleAdvancedSearch])

  useEffect(() => {
    setisTableVisible(false)
  }, [hideTableForceParentToggle])

  AllCAN_MsgsExtracted_array = useMemo(() => {
    console.log('-2.1- - AllCAN_MsgsExtracted_array -  only once')
    globalIndex = [0]
    return Extract_MSGs_from_text(fileInnerText.split('\n'))
  }, [fileInnerText])

  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    console.log('-2.2- - MessagesDecoded_ArrayOfObjects')
    return CreateDecodedArrayOfObjects(
      AllCAN_MsgsExtracted_array,
      setIsDrawerOpen,
      setOpenPDOModal,
      setObjectIterationPDO
    )
  }, [fileInnerText, restartDecoding])

  const DecodePDOs_Memo = useMemo(() => {
    return (
      <div>
        {openPDOModal && (
          <PDOdetectedModal
            key={objectIterationPDO}
            open={openPDOModal}
            onClose={setOpenPDOModal}
            objectIteration={objectIterationPDO}
            setRestartDecoding={setRestartDecoding}
          />
        )}
      </div>
    )
  }, [fileInnerText, resetMainProgressBar, openPDOModal])

  const Drawer_Memo = useMemo(() => {
    // return null
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

  const AdvancedSearch_Memo = useMemo(() => {
    return (
      <div>
        {isAdvancedSearchOpen && (
          <AdvancedSearchComponent
            isAdvancedSearchOpen={isAdvancedSearchOpen}
            setIsAdvancedSearchOpen={setIsAdvancedSearchOpen}
          />
        )}
      </div>
    )
  }, [isAdvancedSearchOpen])
  return (
    <section>
      {DecodePDOs_Memo}
      {Drawer_Memo}
      {Table_Memo}
      {AdvancedSearch_Memo}
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
  console.log('---3---. DrawerComponent_DecodeOptions')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [optionReadingDirection, setOptionReadingDirection] = useState('UB')
  const [messageTypeSorting, setMessageTypeSorting] = useState('all')
  const [progressBarInsideDrawer, setProgressBarInsideDrawer] = useState(false)
  const [groupingOptionsRender, setGroupingOptionsRender] = useState(true)
  const [showMappingWindow, setShowMappingWindow] = useState(false)

  const isInitialMount = useRef(true)
  //Shortcut to open/close drawer
  useEffect(() => {
    const handleKeyPress = (event) => {
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
    handleDECODE() // BUG - remvoe

    if (isInitialMount.current) {
      isInitialMount.current = false
      return // Skip the first render on mount
    } else if (isDrawerOpen) {
      // handleDECODE() // BUG - this is not working with StrictMode
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

  const MappingWindowforDrawer_Memo = useMemo(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return null
    } else {
      return (
        <MappingWindowforDrawer
          showMappingWindow={showMappingWindow}
          setShowMappingWindow={setShowMappingWindow}
        />
      )
    }
  }, [showMappingWindow])
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
              <Button1
                onClick={() => {
                  setShowMappingWindow(true)
                }}
              >
                Show Mapping
              </Button1>
              {MappingWindowforDrawer_Memo}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
const AvailableAxes_Component = () => {
  console.log('---4---. AvailableAxes_Component ---- only once')
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

const MappingWindowforDrawer = ({ showMappingWindow, setShowMappingWindow }) => {
  console.log('---5---. MappingWindowforDrawer -- only once')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var SortedMapping = SortMappingByAxis(PDO_mapped)
  return (
    <Dialog open={showMappingWindow} onClose={() => setShowMappingWindow(false)}>
      <div
        style={{
          border: `1px solid ${colors.primary[400]}`,
          padding: '1rem',
          background: `${colors.primary[200]}`
        }}
      >
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Recorded Mapping
        </Typography>

        {SortedMapping.map((OneAxis, index) => {
          return (
            <Box key={index}>
              <Typography
                variant="h5"
                sx={{ display: 'flex', m: '1rem 0', gap: '0.4rem', color: `${colors.blue[400]}` }}
              >
                -- AxisID:
                <p style={{ fontWeight: '700' }}>{OneAxis.AxisID}</p>
              </Typography>
              <div>
                {Object.keys(OneAxis).map((propName) => {
                  if (propName === 'AxisID') return null
                  var Content = OneAxis[propName] // Array of objects
                  return (
                    <div
                      key={propName}
                      style={{
                        display: 'flex',
                        gap: '2rem',
                        borderBottom: `1px solid ${colors.grey[400]}`,
                        marginBottom: '0.4rem'
                      }}
                    >
                      {/*  COBID TYPE */}
                      <Typography variant="h5" sx={{ color: `${colors.yellow[400]}` }}>
                        {propName}
                      </Typography>
                      {/* List of mapped objects */}
                      <Box>
                        {Content.map((object, indx) => (
                          <div key={indx} style={{ display: 'flex', gap: '0.5rem' }}>
                            <p style={{ color: `${colors.yellow[500]}`, fontWeight: '500' }}>
                              {object[0]}:
                            </p>
                            <p style={{ color: `${colors.green[400]}` }}>{object[1]}</p>
                            <p>{object[2]}</p>
                            <p style={{ color: `${colors.green[400]}` }}> {object[3]}</p>
                          </div>
                        ))}
                      </Box>
                    </div>
                  )
                })}
              </div>
            </Box>
          )
        })}
      </div>
    </Dialog>
  )
}

const AdvancedSearchComponent = ({ isAdvancedSearchOpen, setIsAdvancedSearchOpen }) => {
  console.log('---6---. AdvancedSearchComponent -- only once')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [FilteredArray, setFilteredArray] = useState([])
  const InputRef = useRef()

  function handleUserInput(e) {
    const searchValue = e.toLowerCase()
    if (searchValue == '') return setFilteredArray([])
    const searchProperties = ['msgNr', 'Object', 'ObjectName', 'CobID', 'AxisID', 'Interpretation']
    var FilterResult = MessagesDecoded_ArrayOfObjects.filter((iteration) => {
      return searchProperties.some((property) =>
        iteration[property].toString().toLowerCase().includes(searchValue)
      )
    })
    setFilteredArray(FilterResult)
  }

  //SHORTCUTS ---------------------------
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('not good')
      if (event.key === 'Enter') {
        handleUserInput(InputRef.current.value)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <Dialog
      open={isAdvancedSearchOpen}
      onClose={() => setIsAdvancedSearchOpen(false)}
      sx={{
        maxWidth: 'none',

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
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Search a message
        </Typography>

        <input
          type="text"
          ref={InputRef}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: '0.2rem 0 0 1rem',
            width: '20rem',
            fontSize: '1.3rem'
          }}
        />

        {FilteredArray.length > 0
          ? FilteredArray.map((iteration) => {
              return <TableROW_simple key={iteration.msgNr} obj={iteration} />
            })
          : null}
      </div>
    </Dialog>
  )
}
