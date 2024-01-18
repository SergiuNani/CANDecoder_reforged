import React, { useState, useRef, useEffect, useContext, useMemo, memo, createContext } from 'react'
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
  Button3,
  Button1,
  Checkbox_Component,
  ButtonTransparent
} from '../components/SmallComponents'
import { tokens } from '../theme'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { DecodeCANlog_topbarOptionsContext, ProtocolGlobalContext, ClearanceContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import {
  Extract_MSGs_from_text,
  CreateDecodedArrayOfObjects,
  CanLogStatistics,
  filterMessagesByAxesAndCobID
} from '../functions/CANopen'
import { Input_AutoFormat } from '../components/ForumsComponents'
import { filterDecimal } from '../functions/NumberConversion'
import CloseIcon from '@mui/icons-material/Close'
import { PDOdetectedModal } from './global/PDO'
import {
  PDO_mapped,
  SortMappingByAxis,
  DontBotherWithPDO_flag,
  SetAllPDOsEMPTY,
  ObjectValuesSaved_global,
  PDO_mapped_aux
} from '../functions/CANopenFunctions'
import { DefaultTable, CreateGroupedFilteredArray, TableROW_simple } from '../components/Table'
import { GroupingOptionsForMessages } from '../data/SmallData'
export var Decode_CAN_LOG_WindowContext = createContext()
export var DecodedTableOptionsContext = createContext()
export let MessagesDecoded_ArrayOfObjects = []
export let AllCAN_MsgsExtracted_array = []
export let filteredMessages_auxGlobal = [] // only filtered messages
export let filteredMessages_g = [] // includes the the filtered messages and its cut
const Decode_CAN_LOG_Window = () => {
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea) //Load LOG from withing project
  // const [fileInnerText, setFileInnerText] = useState('')
  const [hideTableForceParentToggle, sethideTableForceParentToggle] = useState(false)
  const [shortcutToDecodeMessages, setShortcutToDecodeMessages] = useState(false)
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false)

  const shortcutToDecodeMessages_whoCalled = useRef('none')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { freeTextVsCanLog, toggleSearchWindow_app } = useContext(DecodeCANlog_topbarOptionsContext)
  var { Clearance } = useContext(ClearanceContext)
  const TextAreaText_Ref = useRef()
  const Decode_CAN_LOG_ref = useRef()
  const initalMount_Deocde_CAN_LOG_ref = useRef(true)
  const SearchVsGotoLineRef = useRef('')

  function newLog_resetSystem() {
    DontBotherWithPDO_flag[0] = 0
    SetAllPDOsEMPTY[0] = 0
    globalIndex = [0]
    for (const prop in PDO_mapped) {
      //We reseting all the mapping which was done up to now
      if (PDO_mapped.hasOwnProperty(prop)) {
        PDO_mapped[prop] = []
      }
    }
    for (const prop in PDO_mapped_aux) {
      //We reseting all the mapping which was done up to now
      if (PDO_mapped_aux.hasOwnProperty(prop)) {
        PDO_mapped_aux[prop] = []
      }
    }

    for (const prop in ObjectValuesSaved_global) {
      //We reseting all the prev objects data
      if (ObjectValuesSaved_global.hasOwnProperty(prop)) {
        ObjectValuesSaved_global[prop] = []
      }
    }
    filteredMessages_auxGlobal = []
    filteredMessages_g = []
  }
  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        newLog_resetSystem()
        const fileContent = e.target.result
        setFileInnerText(fileContent)
        sethideTableForceParentToggle((prev) => !prev)
      }

      reader.readAsText(file)
    }
  }
  function handleClickArrow() {
    newLog_resetSystem()
    var lines = TextAreaText_Ref.current.value
    setFileInnerText(lines)
    sethideTableForceParentToggle((prev) => !prev)
  }
  //====================== SHORTCUTS ======================
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        if (!isAdvancedSearchOpen) {
          if (
            !Decode_CAN_LOG_ref.current
              .querySelector('#DrawerComponent')
              .classList.contains('DrawerOpened')
          ) {
            //Open Drawer, hide table
            if (freeTextVsCanLog == 'FreeText') {
              handleClickArrow()
            }
          } else {
            shortcutToDecodeMessages_whoCalled.current = 'KeyboardShortcut'
            setShortcutToDecodeMessages((prev) => !prev)
          }
        }
      } else if (event.ctrlKey && event.key === 'Tab') {
        TextAreaText_Ref.current.focus()
      } else if (event.ctrlKey && event.key === 'f' && Clearance > 11) {
        if (SearchVsGotoLineRef.current == 'Search') {
          setIsAdvancedSearchOpen((prev) => !prev)
        } else {
          setIsAdvancedSearchOpen(false)
          setTimeout(() => {
            setIsAdvancedSearchOpen(true)
          }, 10)
        }
        SearchVsGotoLineRef.current = 'Search'
      } else if (event.ctrlKey && event.key === 'g' && Clearance > 11) {
        if (SearchVsGotoLineRef.current == 'gotoLine') {
          setIsAdvancedSearchOpen((prev) => !prev)
        } else {
          setIsAdvancedSearchOpen(false)
          setTimeout(() => {
            setIsAdvancedSearchOpen(true)
          }, 10)
        }
        SearchVsGotoLineRef.current = 'gotoLine'
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAdvancedSearchOpen, freeTextVsCanLog, Clearance])

  useEffect(() => {
    if (initalMount_Deocde_CAN_LOG_ref.current) {
      initalMount_Deocde_CAN_LOG_ref.current = false
      return
    } else {
      setIsAdvancedSearchOpen((prev) => !prev)
    }
  }, [toggleSearchWindow_app])

  const TableAndDrawerComponent = useMemo(() => {
    return (
      <Box
        ref={Decode_CAN_LOG_ref}
        style={{
          fontSize: '1.2rem'
        }}
      >
        <DecodedTableOptions fileInnerText={fileInnerText} />
      </Box>
    )
  }, [fileInnerText])

  return (
    <Decode_CAN_LOG_WindowContext.Provider
      value={{
        shortcutToDecodeMessages,
        setShortcutToDecodeMessages,
        hideTableForceParentToggle,
        shortcutToDecodeMessages_whoCalled,
        isAdvancedSearchOpen,
        setIsAdvancedSearchOpen,
        SearchVsGotoLineRef
      }}
    >
      <Box style={{ position: 'relative' }}>
        <Header title="Decode LOG "></Header>

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
              id="TextAreaText_ID_global"
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
    </Decode_CAN_LOG_WindowContext.Provider>
  )
}

export default Decode_CAN_LOG_Window

export let globalIndex = [0] //used when there is a PDO detected and no mapping is done - then we cancel the function and will recall it with this index
const DecodedTableOptions = ({ fileInnerText }) => {
  const [isTableVisible, setisTableVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openPDOModal, setOpenPDOModal] = useState(false)
  const [objectIterationPDO, setObjectIterationPDO] = useState(null)
  const [restartDecoding, setRestartDecoding] = useState(false)
  const { ProtocolGlobal, FW_version } = useContext(ProtocolGlobalContext)
  var { Clearance } = useContext(ClearanceContext)
  const { toggleFilterWindow_app } = useContext(DecodeCANlog_topbarOptionsContext)
  const { hideTableForceParentToggle, isAdvancedSearchOpen } = useContext(
    Decode_CAN_LOG_WindowContext
  )
  const initialRender = useRef(true)
  const LogDisplayRange = useRef(3000)
  const LogDisplayRange_Inf = useRef(0)
  const LogDisplayRange_Sup = useRef(3000)
  const FilteredLogLenght = useRef(0) // will be set in HandleDecode
  const FullLogLength = useRef(0)
  const CutTable_Inf = useRef(1)
  const CutTable_Sup = useRef(FullLogLength.current)
  const auxTable = useRef([
    LogDisplayRange.current,
    LogDisplayRange_Inf.current,
    LogDisplayRange_Sup.current,
    CutTable_Inf.current,
    CutTable_Sup.current
  ])

  const [showTime, setShowTime] = useState(false)
  const [showExtraction, setShowExtraction] = useState(false)
  const [showMappingWindow, setShowMappingWindow] = useState(false)
  const [showRawMsgsWindow, setShowRawMsgsWindow] = useState(false)

  const TableRefForScroll = useRef(null)
  // SHORTCUTS==========================
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      if (isTableVisible) {
        setIsDrawerOpen((prev) => !prev)
      }
    }
  }, [toggleFilterWindow_app])

  useEffect(() => {
    setisTableVisible(false)
  }, [hideTableForceParentToggle])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (Clearance > 11) {
        if (event.ctrlKey && event.key === 'm') {
          event.preventDefault()
          setShowMappingWindow(true)
        } else if (event.ctrlKey && event.key === 'e') {
          event.preventDefault()
          setShowExtraction(true)
        } else if (event.ctrlKey && event.key === 't') {
          event.preventDefault()
          setShowTime(true)
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [Clearance])

  AllCAN_MsgsExtracted_array = useMemo(() => {
    globalIndex = [0]
    return Extract_MSGs_from_text(fileInnerText.split('\n'), ProtocolGlobal)
  }, [fileInnerText])

  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    FullLogLength.current = AllCAN_MsgsExtracted_array.length
    CutTable_Sup.current = FullLogLength.current

    auxTable.current[3] = 1
    auxTable.current[4] = FullLogLength.current
    return CreateDecodedArrayOfObjects(
      AllCAN_MsgsExtracted_array,
      setIsDrawerOpen,
      setOpenPDOModal,
      setObjectIterationPDO,
      ProtocolGlobal,
      FW_version
    )
  }, [fileInnerText, restartDecoding])

  const MappingWindowforDrawer_Memo = useMemo(() => {
    return (
      showMappingWindow && (
        <MappingWindowforDrawer
          showMappingWindow={showMappingWindow}
          setShowMappingWindow={setShowMappingWindow}
        />
      )
    )
  }, [showMappingWindow])
  const MessagesRawForDrawer_Memo = useMemo(() => {
    return (
      showRawMsgsWindow && (
        <MessageWindowForDrawerComponent
          showRawMsgsWindow={showRawMsgsWindow}
          setShowRawMsgsWindow={setShowRawMsgsWindow}
        />
      )
    )
  }, [showRawMsgsWindow, filteredMessages_auxGlobal])

  const showTimeWindow_Memo = useMemo(() => {
    return showTime && <ShowTimeWindowComponent showTime={showTime} setShowTime={setShowTime} />
  }, [showTime])
  const showExtraction_Memo = useMemo(() => {
    return (
      showExtraction && (
        <ShowExtractionComponent
          showExtraction={showExtraction}
          setShowExtraction={setShowExtraction}
        />
      )
    )
  }, [showExtraction])
  //Load PREV/NEXT buttons

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
  }, [fileInnerText, openPDOModal])

  const Drawer_Memo = useMemo(() => {
    // return null
    return (
      <DrawerComponent_DecodeOptions
        setisTableVisible={setisTableVisible}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    )
  }, [fileInnerText, isDrawerOpen])

  const Table_Memo = useMemo(() => {
    return (
      <Box ref={TableRefForScroll}>
        {isTableVisible && <DefaultTable ProtocolGlobal={ProtocolGlobal} />}
      </Box>
    )
  }, [isTableVisible])

  const AdvancedSearch_Memo = useMemo(() => {
    return <div>{isAdvancedSearchOpen && <AdvancedSearchComponent />}</div>
  }, [isAdvancedSearchOpen])

  return (
    <DecodedTableOptionsContext.Provider
      value={{
        LogDisplayRange,
        LogDisplayRange_Inf,
        LogDisplayRange_Sup,
        FilteredLogLenght,
        FullLogLength,
        CutTable_Inf,
        CutTable_Sup,
        auxTable,
        AllCAN_MsgsExtracted_array,
        TableRefForScroll,
        setShowTime,
        setShowExtraction,
        setShowMappingWindow,
        setShowRawMsgsWindow
      }}
    >
      <Box>
        {DecodePDOs_Memo}
        {Drawer_Memo}
        {Table_Memo}
        {AdvancedSearch_Memo}
      </Box>
      {MappingWindowforDrawer_Memo}
      {MessagesRawForDrawer_Memo}
      {showTimeWindow_Memo}
      {showExtraction_Memo}
    </DecodedTableOptionsContext.Provider>
  )
}

const DrawerComponent_DecodeOptions = ({ setisTableVisible, isDrawerOpen, setIsDrawerOpen }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var { Clearance } = useContext(ClearanceContext)
  var { ProtocolGlobal } = useContext(ProtocolGlobalContext)
  const [messageTypeSorting, setMessageTypeSorting] = useState('All')
  const [progressBarInsideDrawer, setProgressBarInsideDrawer] = useState(false)
  const [groupingOptionsRender, setGroupingOptionsRender] = useState(true)

  const [toggle, setToggle] = useState(false)
  const [CheckedAll, setCheckedAll] = useState(true)

  //Shortcut to open/close drawer
  const { shortcutToDecodeMessages, shortcutToDecodeMessages_whoCalled } = useContext(
    Decode_CAN_LOG_WindowContext
  )
  const isInitialMount = useRef(true)

  var {
    LogDisplayRange,
    LogDisplayRange_Inf,
    LogDisplayRange_Sup,
    FilteredLogLenght,
    FullLogLength,
    CutTable_Inf,
    CutTable_Sup,
    auxTable,
    setShowTime,
    setShowExtraction,
    setShowMappingWindow,
    setShowRawMsgsWindow
  } = useContext(DecodedTableOptionsContext)

  useEffect(() => {
    //When a new log is introduced
    LogDisplayRange_Inf.current = 0
    LogDisplayRange_Sup.current = LogDisplayRange.current
    FullLogLength.current = AllCAN_MsgsExtracted_array.length
    CutTable_Inf.current = 1
    CutTable_Sup.current = FullLogLength.current

    auxTable.current = [
      LogDisplayRange.current,
      LogDisplayRange_Inf.current,
      LogDisplayRange_Sup.current,
      CutTable_Inf.current,
      CutTable_Sup.current
    ]

    setToggle((prev) => !prev)
  }, [AllCAN_MsgsExtracted_array])

  //On CTRL + ` open/close drawer
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
    if (isInitialMount.current) {
      isInitialMount.current = false
      return // Skip the first render on mount
    } else if (
      isDrawerOpen ||
      shortcutToDecodeMessages_whoCalled.current == 'NextPrevMsgsButtons'
    ) {
      handleDECODE() // BUG - this is not working with StrictMode
    }
  }, [shortcutToDecodeMessages])

  //* ============================================= *//
  //*===================== HANDLE DECODE ===================== Groups the messages and shows the table
  //*=============================================

  function handleDECODE() {
    setisTableVisible(false) // Needed to reset the table
    if (shortcutToDecodeMessages_whoCalled.current == 'DecodeButton') {
      // Because of the animation of the button
      setProgressBarInsideDrawer(true)
    }
    // We cut the array of messages
    if (shortcutToDecodeMessages_whoCalled.current != 'NextPrevMsgsButtons') {
      LogDisplayRange.current = auxTable.current[0]
      LogDisplayRange_Inf.current = auxTable.current[1]
      LogDisplayRange_Sup.current = auxTable.current[2]
      CutTable_Inf.current = auxTable.current[3]
      CutTable_Sup.current = auxTable.current[4]
    }

    setTimeout(
      () => {
        filteredMessages_g = MessagesDecoded_ArrayOfObjects.slice(
          CutTable_Inf.current - 1,
          CutTable_Sup.current
        )

        filteredMessages_g = filterMessagesByAxesAndCobID(filteredMessages_g, messageTypeSorting)

        FilteredLogLenght.current = filteredMessages_g.length
        filteredMessages_auxGlobal = filteredMessages_g
        //filteredMessages_auxGlobal -  contains all the filters applied
        // We're showing only the TableRange selected by the user
        filteredMessages_g = filteredMessages_g.slice(
          LogDisplayRange_Inf.current,
          LogDisplayRange_Sup.current
        )

        CreateGroupedFilteredArray(
          filteredMessages_g,
          GroupingOptionsForMessages,
          setProgressBarInsideDrawer,
          ProtocolGlobal
        )
        setisTableVisible(true)
        setIsDrawerOpen(false)
      },
      shortcutToDecodeMessages_whoCalled.current == 'DecodeButton' ? 200 : 10
    )
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
  }, [CheckedAll])

  function handleLogCUTLimits(e, name) {
    setToggle((prev) => !prev)
    e = parseInt(e)
    if (name == 'lower') {
      if (auxTable.current[4] < e) {
        //if CutTablle_Sup
        //Inf is bigger than Sup
        auxTable.current[3] = auxTable.current[4] - 1
      } else if (e <= 0) {
        auxTable.current[3] = 1
      } else {
        auxTable.current[3] = e
      }
    } else {
      if (e > FullLogLength.current) {
        auxTable.current[4] = FullLogLength.current
      } else if (auxTable.current[3] > e) {
        auxTable.current[4] = auxTable.current[3] + 1
      } else {
        auxTable.current[4] = e
      }
    }
  }

  function DeselectAllAxes() {
    var boolean = !CheckedAll
    CanLogStatistics.forEach((iteration, idx) => {
      var Keys = Object.keys(iteration)
      Keys.forEach((prop) => {
        CanLogStatistics[idx][prop][1] = boolean
      })
    })
  }
  const DrawerOptionsList = useMemo(() => {
    return (
      <Box sx={{ userSelect: 'none' }}>
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

        {/* Maximum displayed messages ----------------- */}
        <Box
          sx={{
            border: `2px solid ${colors.primary[400]}`,
            borderRadius: '1rem',
            margin: '1rem 0',
            background: `${colors.blue[200]}`,
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem'
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
            Maximum displayed messages:{' '}
          </p>

          <Input_AutoFormat
            callback={filterDecimal}
            resolution={'TIME'}
            tellParentValueChanged={(e) => {
              setToggle((prev) => !prev)
              if (parseInt(e) > 3000) {
                e = 4000 // Hardcoded limit for messages
              }
              auxTable.current[0] = parseInt(e) //range
              auxTable.current[1] = 0 //inf range
              auxTable.current[2] = auxTable.current[0] //sup range
            }}
            forceValueFromParent={auxTable.current[0]}
            background={colors.blue[200]}
            border={`2px solid ${colors.blue[500]}`}
            width="5rem"
            center
            padding="0.2rem"
            blockValueReset
            forceRender={toggle}
          />
        </Box>
        {/* CUT the LOG between ----------------- */}
        <Box
          sx={{
            border: `2px solid ${colors.primary[400]}`,
            borderRadius: '1rem',
            margin: '1rem 0',
            background: `${colors.blue[200]}`,
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem'
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
            Cut the Log between:{' '}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Input_AutoFormat
              callback={filterDecimal}
              resolution={0}
              tellParentValueChanged={(e) => {
                handleLogCUTLimits(e, 'lower')
              }}
              forceValueFromParent={auxTable.current[3]}
              forceRender={toggle}
              background={colors.blue[200]}
              border={`2px solid ${colors.blue[500]}`}
              width="5rem"
              center
              padding="0.2rem"
              blockValueReset
            />
            <Input_AutoFormat
              callback={filterDecimal}
              resolution={0}
              tellParentValueChanged={(e) => {
                handleLogCUTLimits(e, 'superior')
              }}
              forceValueFromParent={auxTable.current[4]}
              forceRender={toggle}
              background={colors.blue[200]}
              border={`2px solid ${colors.blue[500]}`}
              width="5rem"
              center
              padding="0.2rem"
              blockValueReset
            />
          </div>
        </Box>

        {/* Available Axes  ----------------- */}
        {Clearance > 11 ? (
          <Box
            sx={{
              border: `2px solid ${colors.primary[400]}`,
              borderRadius: '1rem',
              margin: '1rem 0',
              background: `${colors.blue[200]}`,
              padding: '0.4rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              <Checkbox_Component
                label={`All Axes`}
                checked={CheckedAll}
                onChange={() => {
                  DeselectAllAxes()
                  setCheckedAll((prev) => !prev)
                }}
              />
            </div>
            {AvailableAxes_Component_Memo}
          </Box>
        ) : null}

        {/* SORT BY ----------------- */}

        {ProtocolGlobal != 'RS232' ? (
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
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="Master" control={<Radio />} label="Master" />
              <FormControlLabel value="Mapping" control={<Radio />} label="Mapping" />
              <FormControlLabel value="Errors" control={<Radio />} label="Errors" />
            </RadioGroup>
          </Box>
        ) : null}
        {/* Extra help ----------------- */}
        {Clearance > 11 ? (
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
              Extra help:
            </p>
            <Box style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <ButtonTransparent
                onClick={() => {
                  setShowMappingWindow(true)
                }}
                sx={{
                  background: `${colors.primary1[100]}`,
                  padding: '0.5rem',
                  fontSize: '0.8rem',
                  '&:hover': {
                    background: `${colors.primary[500]}`
                  }
                }}
              >
                Mapping
              </ButtonTransparent>

              <ButtonTransparent
                onClick={() => {
                  setShowRawMsgsWindow(true)
                }}
                sx={{
                  background: `${colors.primary1[100]}`,
                  padding: '0.5rem',
                  fontSize: '0.8rem',
                  '&:hover': {
                    background: `${colors.primary[500]}`
                  }
                }}
              >
                Raw Msgs
              </ButtonTransparent>

              <ButtonTransparent
                onClick={() => {
                  setShowTime(true)
                }}
                sx={{
                  background: `${colors.primary1[100]}`,
                  padding: '0.5rem',
                  fontSize: '0.8rem',
                  '&:hover': {
                    background: `${colors.primary[500]}`
                  }
                }}
              >
                Show Time
              </ButtonTransparent>
              <ButtonTransparent
                onClick={() => {
                  setShowExtraction(true)
                }}
                sx={{
                  background: `${colors.primary1[100]}`,
                  padding: '0.5rem',
                  fontSize: '0.8rem',
                  '&:hover': {
                    background: `${colors.primary[500]}`
                  }
                }}
              >
                Show Extraction
              </ButtonTransparent>
            </Box>
          </Box>
        ) : null}
      </Box>
    )
  }, [groupingOptionsRender, toggle, messageTypeSorting, CheckedAll, Clearance, ProtocolGlobal])
  return (
    <Box className={isDrawerOpen ? 'DrawerOpened' : null} id="DrawerComponent">
      {isDrawerOpen ? (
        <Box
          style={{
            position: 'fixed',
            top: '3rem',
            width: '30rem',
            backgroundColor: '#333',
            color: `${colors.grey[100]}`,
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
            {/* ****  A List of options  ----------------- */}
            {DrawerOptionsList}

            {/* DISPLAY MESSAGES BUTTON + PROGRESS BAR----------------- */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '1rem',
                marginLeft: '0.5rem'
              }}
            >
              <Button3
                onClick={() => {
                  shortcutToDecodeMessages_whoCalled.current = 'DecodeButton'
                  handleDECODE()
                }}
              >
                DECODE
              </Button3>
              {progressBarInsideDrawer && <CircularProgress />}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
const AvailableAxes_Component = () => {
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
                  fontWeight: '700',
                  boxShadow: 'none'
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
                        {Content[0] && Content[0][4] != '' && (
                          <p style={{ color: `${colors.yellow[300]}`, fontSize: '0.7rem' }}>
                            {' '}
                            {Content[0][4]}
                          </p>
                        )}
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
const MessageWindowForDrawerComponent = ({ showRawMsgsWindow, setShowRawMsgsWindow }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const textAreaRef = useRef(null)
  return (
    <Dialog
      open={showRawMsgsWindow}
      onClose={() => setShowRawMsgsWindow(false)}
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
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Filtered Original Messages
        </Typography>
        <textarea
          ref={textAreaRef}
          name=""
          id=""
          cols="30"
          rows="10"
          defaultValue={filteredMessages_auxGlobal
            .map((iteration) => `[${iteration.msgNr}] --  ${iteration.OriginalMessage}`)
            .join('\n')}
          style={{
            background: `${colors.primary[300]}`,
            color: `${colors.green[500]}`,
            border: `1px solid ${colors.green[400]}`,
            height: '75vh',
            width: '80rem'
          }}
        ></textarea>
      </div>
    </Dialog>
  )
}
const AdvancedSearchComponent = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [FilteredArray, setFilteredArray] = useState([])
  const inputRef = useRef(null)
  const axisID_ref = useRef(null)
  const { isAdvancedSearchOpen, setIsAdvancedSearchOpen, SearchVsGotoLineRef } = useContext(
    Decode_CAN_LOG_WindowContext
  )
  const { TableRefForScroll } = useContext(DecodedTableOptionsContext)
  const [checkboxAxisID, setCheckboxAxisID] = useState(false)
  const [msgNr, setMsgNr] = useState(false)
  const [object, setObject] = useState(true)
  const [objectName, setObjectName] = useState(true)
  const [CobID, setCobID] = useState(false)
  const [interpretation, setInterpretation] = useState(false)
  const [useFilteredArray, setUseFilteredArray] = useState(true)
  const [gotoLineStatus, setGotoLineStatus] = useState(false)
  const [dataFilter, setDataFilter] = useState(false)
  const [TextReturn, setTextReturn] = useState('Ready to go')

  var searchProperties = [
    { key: 'msgNr', enabled: msgNr },
    { key: 'Object', enabled: object },
    { key: 'ObjectName', enabled: objectName },
    { key: 'CobID', enabled: CobID },
    { key: 'AxisID', enabled: checkboxAxisID },
    { key: 'Interpretation', enabled: interpretation },
    { key: 'Data', enabled: dataFilter }
  ]

  useEffect(() => {
    if (SearchVsGotoLineRef.current == 'gotoLine') {
      setObject(false)
      setObjectName(false)
      setUseFilteredArray(false)
      setGotoLineStatus(true)
    }
  }, [SearchVsGotoLineRef.current])

  function handleUserInput(e) {
    if (gotoLineStatus) {
      //Goto line
      let lineToScroll = e.toLowerCase()
      var Table_NRs = TableRefForScroll.current.querySelectorAll('.msgNrClass')
      var index = Array.from(Table_NRs).findIndex((element) => {
        return element.textContent == lineToScroll
      })
      if (index == -1) {
        setFilteredArray([])
        setTextReturn('Cannot go to this line')
        return
      }
      var potentialGroup = Table_NRs[index].closest('table').parentElement.parentElement
      if (
        potentialGroup.classList.contains('GroupBody') &&
        potentialGroup.style.display == 'none'
      ) {
        potentialGroup.parentElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        Table_NRs[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      window.scrollBy(0, -90)

      setFilteredArray([])
      setIsAdvancedSearchOpen(false)
      setTextReturn('GOTO LINE')
    } else {
      //Searching
      const searchValue = e.toLowerCase()
      if (searchValue == '') return setFilteredArray([])

      var array = []
      if (useFilteredArray) {
        array = filteredMessages_auxGlobal
      } else {
        array = MessagesDecoded_ArrayOfObjects
      }
      var FilterResult = array.filter((iteration) => {
        var axisID
        if (checkboxAxisID) {
          axisID = iteration.AxisID == axisID_ref.current
        } else axisID = true
        return searchProperties.some(
          ({ key, enabled }) =>
            enabled && axisID && iteration[key]?.toString().toLowerCase().includes(searchValue)
        )
      })
      setFilteredArray(FilterResult)
      setTextReturn('Nothing found')
    }
  }

  //SHORTCUTS ---------------------------

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus()
    }, 1)
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        setTextReturn('Searching...')
        setTimeout(() => {
          handleUserInput(inputRef.current.value)
        }, 100)
      } else if (event.ctrlKey && event.key === 'Tab') inputRef.current.focus()
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [
    object,
    objectName,
    msgNr,
    checkboxAxisID,
    CobID,
    interpretation,
    dataFilter,
    useFilteredArray,
    gotoLineStatus
  ])

  return (
    <section>
      {isAdvancedSearchOpen && (
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
              padding: '1.5rem ',
              overflowX: 'none',
              background: `${colors.primary[200]}`
            }}
          >
            <section
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
                userSelect: 'none'
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for a message"
                style={{
                  backgroundColor: `${colors.primary[300]}`,
                  padding: '0.5rem 1rem',
                  borderRadius: '0.9rem',
                  color: `${colors.red[200]}`,
                  outline: 'none',
                  margin: '0.2rem 0 0 1rem',
                  width: '20rem',
                  fontSize: '1.3rem',
                  marginBottom: '1rem'
                }}
              />
              <section>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                    // whiteSpace: 'nowrap',
                    // flexDirection: 'column'
                    // overflow: 'hidden'
                  }}
                >
                  <div>
                    <Checkbox_Component
                      label={'msgNr'}
                      checked={msgNr}
                      onChange={() => {
                        setMsgNr((prev) => !prev)
                      }}
                    />
                    <Checkbox_Component
                      label={'Object'}
                      checked={object}
                      onChange={() => {
                        setObject((prev) => !prev)
                      }}
                    />

                    <Checkbox_Component
                      label={'ObjectName'}
                      checked={objectName}
                      onChange={() => {
                        setObjectName((prev) => !prev)
                      }}
                    />
                  </div>
                  {/* Second Column */}
                  <div>
                    <Checkbox_Component
                      label={'CobID'}
                      checked={CobID}
                      onChange={() => {
                        setCobID((prev) => !prev)
                      }}
                    />
                    <Checkbox_Component
                      label={'Data'}
                      checked={dataFilter}
                      onChange={() => {
                        setDataFilter((prev) => !prev)
                      }}
                    />
                    <Checkbox_Component
                      label={'Interpretation'}
                      checked={interpretation}
                      onChange={() => {
                        setInterpretation((prev) => !prev)
                      }}
                    />
                  </div>

                  {/* //Third Column */}
                  <div>
                    <div
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Checkbox_Component
                        label={'AxisID'}
                        checked={checkboxAxisID}
                        onChange={() => {
                          setCheckboxAxisID((prev) => !prev)
                        }}
                      />
                      <Input_AutoFormat
                        callback={filterDecimal}
                        resolution={8}
                        tellParentValueChanged={(e) => {
                          axisID_ref.current = e
                        }}
                        forceValueFromParent={1}
                        background={colors.primary[300]}
                        // border={`1px solid ${colors.blue[500]}`}
                        width="4rem"
                        center
                        padding="0.1rem"
                        blockValueReset
                        disabled={!checkboxAxisID}
                      />
                    </div>
                    <Checkbox_Component
                      label={'Filtered msgs'}
                      checked={useFilteredArray}
                      onChange={() => {
                        setUseFilteredArray((prev) => !prev)
                      }}
                    />
                    <Checkbox_Component
                      label={'Goto Line'}
                      checked={gotoLineStatus}
                      onChange={() => {
                        setGotoLineStatus((prev) => !prev)
                      }}
                    />
                  </div>
                </div>
              </section>
            </section>
            {FilteredArray.length > 0 ? (
              FilteredArray.map((iteration) => {
                return <TableROW_simple key={iteration.msgNr} obj={iteration} type="Finder" />
              })
            ) : (
              <div style={{ color: `${colors.red[400]}` }}>{TextReturn}</div>
            )}
          </div>
        </Dialog>
      )}
    </section>
  )
}

const ShowTimeWindowComponent = ({ showTime, setShowTime }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function timeStringToMilliseconds(timeString) {
    var Process = ''
    var attachedMiliseconds = 0
    var attachedMicroSeconds = 0
    var attachement = ''
    var devision = 1000
    var [hours, minutes, seconds] = timeString.split(':').map(Number)
    if (isNaN(seconds)) {
      var temp = timeString.split(':')[2].split('.')
      seconds = parseInt(temp[0])
      if (temp[2].length == 1) devision = 10
      attachedMiliseconds = parseInt(temp[1])
      attachedMicroSeconds = parseInt(temp[2]) / devision
      attachement = ` + ${attachedMiliseconds} +  ${temp[2]}/${devision}`
    }
    // Calculate the total milliseconds
    const totalMilliseconds =
      (hours * 60 * 60 + minutes * 60 + seconds) * 1000 + attachedMiliseconds + attachedMicroSeconds
    Process = `${hours}*60*60 + ${minutes}*60 + ${seconds} ${attachement}`

    return [totalMilliseconds, Process]
  }
  function ExtractTimeFromFrame(strInput, previousElement) {
    var time = 0
    var Proccess = ''
    var devision = 1000

    strInput = strInput.replace(/\t/g, ' ')
    strInput = strInput
      .split(' ')
      .filter((el) => el !== '')
      .filter((el) => el.includes(':') || el.includes('.'))
    var DoubleColumn_flag = -1
    strInput.forEach((item, idx) => {
      const colonCount = (item.match(/:/g) || []).length
      if (colonCount == 2) {
        DoubleColumn_flag = idx
      }
    })
    if (DoubleColumn_flag != -1) {
      // there is an item which has time like this : hh:mm:ss. IF there are multiple only the last one will be considered

      ;[time, Proccess] = timeStringToMilliseconds(strInput[DoubleColumn_flag])
      if (strInput[DoubleColumn_flag].split(':')[2].length == 2) {
        // checking for ms and us if they were not attached to the second unit
        if (strInput[DoubleColumn_flag + 1]) {
          // hh:mm:ss + ms + us
          var temp = strInput[DoubleColumn_flag + 1].split('.')
          if (temp[1].length == 1) devision = 10
          time += parseInt(temp[0]) + parseInt(temp[1]) / devision
          Proccess = Proccess + `+ ${temp[0]} + ${temp[1]} / ${devision}}`
          strInput.splice(DoubleColumn_flag + 2)
        } else {
          //only hh:mm:ss and no ms or us
          strInput.splice(DoubleColumn_flag + 1)
        }
      } else {
        // hh:mm:ss.ms.us
        strInput.splice(DoubleColumn_flag + 1)
      }
    } else {
      if (strInput.length > 0) {
        // ms.us

        var temp = strInput[0].split('.')
        if (temp[1].length == 1) devision = 10

        time += parseInt(temp[0]) + parseInt(temp[1]) / devision
        Proccess = Proccess + `${temp[0]} + ${temp[1]} / ${devision}}`
        strInput.splice(1)
      } else {
        return ['-', '-', '-', '-']
      }
    }

    var diffTime = '-'
    if (previousElement && previousElement[0] != '-' && time != '-') {
      diffTime = (time - previousElement[0]).toFixed(3)
    }
    return [time, diffTime, strInput, Proccess]
  }
  var ArrayCopy = [...filteredMessages_auxGlobal]

  ArrayCopy.forEach((iteration, indexMain) => {
    var strIndex = iteration.OriginalMessage.match(iteration.CobID)
    if (strIndex && strIndex.input && strIndex.index && iteration.FrameData != 'invalid') {
      ArrayCopy[indexMain] = ExtractTimeFromFrame(
        strIndex.input.slice(0, strIndex.index),
        ArrayCopy[indexMain - 1]
      )
    } else {
      ArrayCopy[indexMain] = ['-', '-', '-', '-']
    }
  })
  var arrCopy = [...filteredMessages_auxGlobal]
  if (arrCopy.length > 2000) {
    //Prevent the app from crushing
    arrCopy.slice(0, 2000)
  }
  return (
    <Dialog
      open={showTime}
      onClose={() => setShowTime(false)}
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
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Time difference
        </Typography>
        <ul
          style={{ color: `${colors.green[400]}`, margin: '0 0 1rem 1rem', listStyleType: 'disc' }}
        >
          <li>Click on DECODE button first to apply the filters.</li>
          <li>
            Only the first 2000 messages will be shown. To view the next batch, modify the "Cut the
            Log between" option.
          </li>
        </ul>
        <section>
          {arrCopy.length > 0 ? (
            arrCopy.map((iteration, index) => {
              return (
                <TableROW_simple
                  key={iteration.msgNr}
                  obj={iteration}
                  timeInfo={ArrayCopy[index]}
                  type="Time"
                />
              )
            })
          ) : (
            <div style={{ color: `${colors.red[400]}` }}>{'Empty Array'}</div>
          )}
        </section>
      </div>
    </Dialog>
  )
}

const ShowExtractionComponent = ({ showExtraction, setShowExtraction }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var rawMessagesCutted = []
  filteredMessages_auxGlobal.forEach((el) => {
    rawMessagesCutted.push(AllCAN_MsgsExtracted_array[el.msgNr - 1])
  })

  if (rawMessagesCutted.length > 1000) {
    //Prevent the app from crushing
    rawMessagesCutted.slice(0, 1000)
  }
  return (
    <Dialog
      open={showExtraction}
      onClose={() => setShowExtraction(false)}
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
        <Typography variant="h4" sx={{ mb: '1rem' }}>
          Extraction Process
        </Typography>
        <ul
          style={{ color: `${colors.green[400]}`, margin: '0 0 1rem 1rem', listStyleType: 'disc' }}
        >
          <li>Click on DECODE button first to apply the filters.</li>
          <li>
            Only the first 1000 messages will be shown. To view the next batch, modify the "Cut the
            Log between" option.
          </li>
        </ul>

        <section>
          {rawMessagesCutted.length > 0 ? (
            rawMessagesCutted.map((iteration, index) => {
              return <TableROW_simple key={iteration[0]} obj={iteration} type="Extraction" />
            })
          ) : (
            <div style={{ color: `${colors.red[400]}` }}>{'Empty Array'}</div>
          )}
        </section>
      </div>
    </Dialog>
  )
}
