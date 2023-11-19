import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useMemo,
  Profiler,
  memo,
  createContext
} from 'react'
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
  CanLogStatistics,
  filterMessagesByAxesAndCobID
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
  SetAllPDOsEMPTY,
  PDO_mapped_aux
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
export let filteredMessages_auxGlobal = []

export var Decode_CAN_LOG_WindowContext = createContext()
export var DecodedTableOptionsContext = createContext()
const Decode_CAN_LOG_Window = () => {
  console.log('---1---. Decode_CAN_LOG_Window')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)
  const [hideTableForceParentToggle, sethideTableForceParentToggle] = useState(false)
  const [shortcutToDecodeMessages, setShortcutToDecodeMessages] = useState(false)
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false)

  const shortcutToDecodeMessages_whoCalled = useRef('none')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { freeTextVsCanLog, toggleSearchWindow_app } = useContext(DecodeCANlog_topbarOptionsContext)
  const TextAreaText_Ref = useRef()
  const Decode_CAN_LOG_ref = useRef()
  const initalMount_Deocde_CAN_LOG_ref = useRef(true)
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
            handleClickArrow()
          } else {
            shortcutToDecodeMessages_whoCalled.current = 'KeyboardShortcut'
            setShortcutToDecodeMessages((prev) => !prev)
          }
        }
      } else if (event.ctrlKey && event.key === 'Tab') {
        TextAreaText_Ref.current.focus()
      } else if (event.ctrlKey && event.key === 'f') {
        setIsAdvancedSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAdvancedSearchOpen])

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
        setIsAdvancedSearchOpen
      }}
    >
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
    </Decode_CAN_LOG_WindowContext.Provider>
  )
}

export default Decode_CAN_LOG_Window

export let globalIndex = [0] //used when there is a PDO detected and no mapping is done - then we cancel the function and will recall it with this index

const DecodedTableOptions = ({ fileInnerText }) => {
  console.log('---2---. DecodedTableOptions')
  const [TableOption, setTableOption] = useState('Default')
  const [isTableVisible, setisTableVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openPDOModal, setOpenPDOModal] = useState(false)
  const [objectIterationPDO, setObjectIterationPDO] = useState(null)
  const [restartDecoding, setRestartDecoding] = useState(false)
  const [renderDrawer, setRenderDrawer] = useState(false)
  const { toggleFilterWindow_app } = useContext(DecodeCANlog_topbarOptionsContext)
  const { hideTableForceParentToggle, isAdvancedSearchOpen } = useContext(
    Decode_CAN_LOG_WindowContext
  )
  const initialRender = useRef(true)

  const LogDisplayRange = useRef(3000) //BUG Change to 3000
  const LogDisplayRange_Inf = useRef(0)
  const LogDisplayRange_Sup = useRef(3000) //BUG Change to 3000

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

  AllCAN_MsgsExtracted_array = useMemo(() => {
    console.log('-2.1- - AllCAN_MsgsExtracted_array -  only once')
    globalIndex = [0]
    return Extract_MSGs_from_text(fileInnerText.split('\n'))
  }, [fileInnerText])

  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    console.log('-2.2- - MessagesDecoded_ArrayOfObjects')
    FullLogLength.current = AllCAN_MsgsExtracted_array.length
    CutTable_Sup.current = FullLogLength.current
    auxTable.current[3] = 1
    auxTable.current[4] = FullLogLength.current
    return CreateDecodedArrayOfObjects(
      AllCAN_MsgsExtracted_array,
      setIsDrawerOpen,
      setOpenPDOModal,
      setObjectIterationPDO
    )
  }, [fileInnerText, restartDecoding])

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
        TableOption={TableOption}
        setTableOption={setTableOption}
        renderDrawer={renderDrawer}
      />
    )
  }, [fileInnerText, isDrawerOpen, TableOption, renderDrawer])

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
        renderDrawer
      }}
    >
      {DecodePDOs_Memo}
      {Drawer_Memo}
      {Table_Memo}
      {AdvancedSearch_Memo}
    </DecodedTableOptionsContext.Provider>
  )
}

const DrawerComponent_DecodeOptions = ({
  setisTableVisible,
  setTableOption,
  isDrawerOpen,
  setIsDrawerOpen,
  TableOption,
  renderDrawer
}) => {
  console.log('---3---. DrawerComponent_DecodeOptions')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [optionReadingDirection, setOptionReadingDirection] = useState('UB')
  const [messageTypeSorting, setMessageTypeSorting] = useState('all')
  const [progressBarInsideDrawer, setProgressBarInsideDrawer] = useState(false)
  const [groupingOptionsRender, setGroupingOptionsRender] = useState(true)
  const [showMappingWindow, setShowMappingWindow] = useState(false)
  const [toggle, setToggle] = useState(false)
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
    auxTable
  } = useContext(DecodedTableOptionsContext)

  useEffect(() => {
    //When a new log is introduced
    console.log('WEEEEEEEEEEEEEEEEEEEEEEE')
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
    // handleDECODE() // BUG - remvoe
    if (isInitialMount.current) {
      console.log('Initial Mount of DrawerComponent_DecodeOptions was ignored')
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
    console.log('handleDECODE')
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
        var filteredMessages = MessagesDecoded_ArrayOfObjects.slice(
          CutTable_Inf.current - 1,
          CutTable_Sup.current
        )

        filteredMessages = filterMessagesByAxesAndCobID(filteredMessages)

        // return
        FilteredLogLenght.current = filteredMessages.length
        filteredMessages_auxGlobal = filteredMessages

        // We're showing only the TableRange selected by the user
        filteredMessages = filteredMessages.slice(
          LogDisplayRange_Inf.current,
          LogDisplayRange_Sup.current
        )

        CreateGroupedFilteredArray(
          filteredMessages,
          GroupingOptionsForMessages,
          setProgressBarInsideDrawer
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
  }, [])

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

  function handleLogCUTLimits(e, name) {
    console.log('🚀 ~  handleLogCUTLimits:')
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
  const DrawerOptionsList = useMemo(() => {
    console.log('DrawerOptionsList Rendering')
    console.log(auxTable.current[0])
    console.log(auxTable.current[3])
    console.log(auxTable.current[4])
    if (auxTable.current[4] == undefined) {
      // auxTable.current[4] = 999
    }
    return (
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
      </Box>
    )
  }, [TableOption, optionReadingDirection, groupingOptionsRender, renderDrawer, toggle])
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
            {/* A List of options  ----------------- */}
            {DrawerOptionsList}

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
              <Button3
                onClick={() => {
                  shortcutToDecodeMessages_whoCalled.current = 'DecodeButton'
                  handleDECODE()
                }}
              >
                DECODE
              </Button3>
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
  console.log('---4---. AvailableAxes_Component ')
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
  console.log(
    '🚀 ~ file: Decode_CAN_LOG.jsx:1102 ~ MappingWindowforDrawer ~ SortedMapping:',
    SortedMapping
  )
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
                        {Content[0][4] != '' && (
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

const AdvancedSearchComponent = () => {
  console.log('---6---. AdvancedSearchComponent ')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [FilteredArray, setFilteredArray] = useState([])
  const inputRef = useRef(null)
  const { isAdvancedSearchOpen, setIsAdvancedSearchOpen } = useContext(Decode_CAN_LOG_WindowContext)

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
    setTimeout(() => {
      inputRef.current.focus()
    }, 1)
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('We are in the advanced search and actively looking')
        handleUserInput(inputRef.current.value)
      } else if (event.ctrlKey && event.key === 'Tab') inputRef.current.focus()
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
          padding: '1rem ',
          overflowX: 'none',

          background: `${colors.primary[200]}`
        }}
      >
        <p style={{ padding: '0.3rem', marginBottom: '0.1rem' }}>
          Searches by:{' '}
          <span style={{ color: `${colors.blue[100]}` }}>
            msgNr, Object, ObjectName, CobID, AxisID, Interpretation
          </span>
        </p>
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

        {FilteredArray.length > 0
          ? FilteredArray.map((iteration) => {
              return <TableROW_simple key={iteration.msgNr} obj={iteration} />
            })
          : null}
      </div>
    </Dialog>
  )
}
