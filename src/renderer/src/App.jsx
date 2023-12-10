import { useState, createContext, Profiler, useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Decode_CAN_LOG_Window from './scenes/Decode_CAN_LOG'
import { RegisterWindow } from './scenes/global/RegisterWindow'
import DebugScene from './scenes/debug'
import HelpWindow from './scenes/HelpWindow.jsx'
import { DrawerComponent } from './components/FloatingComponents'
import { ColorsComponent } from './scenes/debug'
import EditDataWindow from './scenes/EditDataWindow'
import { Objects_collection, Registers_CANopen, Registers_THS, ESM_info } from './data/BigData'
export var Objects_collection_LS = []
export var Registers_CANopen_LS = []
export var Registers_THS_LS = []
export var ESM_info_LS = []
import HomeWindow from './scenes/HomeWindow'
import MoreOptionsWindow from './scenes/MoreOptionsWindow.jsx'

function App() {
  if (
    !localStorage.getItem('Objects_collection_LS') ||
    !localStorage.getItem('Registers_CANopen_LS') ||
    !localStorage.getItem('Registers_THS_LS') ||
    !localStorage.getItem('ESM_info_LS')
  ) {
    // First Write in Local Storage if there is nothing there
    localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection))
    localStorage.setItem('Registers_CANopen_LS', JSON.stringify(Registers_CANopen))
    localStorage.setItem('Registers_THS_LS', JSON.stringify(Registers_THS))
    ESM_info_LS = Text2JSON_ESM_info()
    localStorage.setItem('ESM_info_LS', JSON.stringify(ESM_info_LS))
  }
  Objects_collection_LS = JSON.parse(localStorage.getItem('Objects_collection_LS'))
  Registers_CANopen_LS = JSON.parse(localStorage.getItem('Registers_CANopen_LS'))
  Registers_THS_LS = JSON.parse(localStorage.getItem('Registers_THS_LS'))
  ESM_info_LS = JSON.parse(localStorage.getItem('ESM_info_LS'))

  return (
    <MyProviders>
      <HashRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flexGrow: 1, position: 'relative', height: '100%' }}>
            <Topbar />
            <DrawerComponent title="Color Palatte" component={<ColorsComponent />} />
            <Routes>
              <Route path="/" element={<HomeWindow />} />
              <Route path="/Home" element={<HomeWindow />} />
              <Route path="/Decode_CAN_LOG" element={<Decode_CAN_LOG_Window />} />
              <Route path="/MoreOptionsWindow" element={<MoreOptionsWindow />} />
              <Route path="/Registers" element={<RegisterWindow />} />
              <Route path="/DebugScene" element={<DebugScene />} />
              <Route path="/EditDataWindow" element={<EditDataWindow />} />
              <Route path="/Help" element={<HelpWindow />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </MyProviders>
  )
}

export default App

export const SidebarContext = createContext(null)
export const MotorSpecificationsContext = createContext()
export const UserVsDebugModeContext = createContext()
export const FG_Context = createContext()
export const DecodeCANlog_topbarOptionsContext = createContext()

export const FG_OptionsStarter = {
  FG_Display_POS: 'IU',
  FG_Display_SPD: 'IU',
  FG_Display_ACC: 'IU',
  FG_Display_TIME: 'ms',
  FG_Applied_POS: 'IU',
  FG_Applied_SPD: 'IU',
  FG_Applied_ACC: 'IU',
  FG_Applied_TIME: 'IU'
}
function MyProviders({ children }) {
  const [theme, colorMode] = useMode()
  const [loadType, setLoadType] = useState('ROTARY')
  const [sidebarSelectedItem, setSidebarSelectedItem] = useState('Home')
  const [fullRot_IU, setFullRot_IU] = useState(2000)
  const [slowLoop, setSlowLoop] = useState(1)
  const [userVsDebugMode, setUserVsDebugMode] = useState('USER') //USER --DEBUG

  //Decode CANlog Options
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText') //CANlog --FreeText
  const [toggleFilterWindow_app, setToggleFilterWindow_app] = useState(false)
  const [toggleSearchWindow_app, setToggleSearchWindow_app] = useState(false)

  // FG OPTIONS
  const [FG_DisplayVSApplied, setFG_DisplayVSApplied] = useState('Display')
  const [FG_OptionsObject, setFG_OptionsObject] = useState(FG_OptionsStarter)

  return (
    <Profiler id="MyComponent" onRender={logProfilerData}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DecodeCANlog_topbarOptionsContext.Provider
            value={{
              freeTextVsCanLog,
              setFreeTextVsCanLog,
              toggleFilterWindow_app,
              setToggleFilterWindow_app,
              toggleSearchWindow_app,
              setToggleSearchWindow_app
            }}
          >
            <MotorSpecificationsContext.Provider
              value={{ loadType, setLoadType, fullRot_IU, setFullRot_IU, slowLoop, setSlowLoop }}
            >
              <SidebarContext.Provider value={{ sidebarSelectedItem, setSidebarSelectedItem }}>
                <UserVsDebugModeContext.Provider value={{ userVsDebugMode, setUserVsDebugMode }}>
                  <FG_Context.Provider
                    value={{
                      FG_DisplayVSApplied,
                      setFG_DisplayVSApplied,
                      FG_OptionsObject,
                      setFG_OptionsObject
                    }}
                  >
                    {children}
                  </FG_Context.Provider>
                </UserVsDebugModeContext.Provider>
              </SidebarContext.Provider>
            </MotorSpecificationsContext.Provider>
          </DecodeCANlog_topbarOptionsContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Profiler>
  )
}

function Text2JSON_ESM_info() {
  var text = ESM_info.split('\n').filter((item) => item !== '')

  text = text.map((row, index) => {
    var row = row.split(/\s+/).filter((item) => item !== '')
    var partNumber = 'P'.concat(row[1], '.', row[2], '.', row[3])
    return {
      id: index,
      driveName: row[0],
      partNumber: partNumber,
      firmware: row[4],
      HWID: row[5] ? row[5] : '-'
    }
  })
  return text
}
var diffTime = 0
function logProfilerData(id, phase, actualTime, baseTime, startTime, commitTime, interactions) {
  diffTime += commitTime - startTime
  console.log(actualTime)
  // console.log(diffTime)
}
