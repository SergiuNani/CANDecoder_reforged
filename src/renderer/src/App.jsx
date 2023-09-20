import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Decode_CAN_LOG from './scenes/Decode_CAN_LOG'
import { RegisterWindow } from './scenes/global/RegisterWindow'
import React_Logic from './scenes/React_logic'
import React_Logic2 from './scenes/React_Logic2'
import DebugScene from './scenes/debug'
import HelpWindow from './scenes/HelpWindow.jsx'
import { DrawerComponent } from './components/FloatingComponents'
import { ColorsComponent } from './scenes/debug'
import EditDataWindow from './scenes/EditDataWindow'
import { Objects_collection, Registers_CANopen, Registers_THS } from './data/BigData'
export var Objects_collection_LS = []
export var Registers_CANopen_LS = []
export var Registers_THS_LS = []
import HomeWindow from './scenes/HomeWIndow'

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  if (
    !localStorage.getItem('Objects_collection_LS') ||
    !localStorage.getItem('Registers_CANopen_LS') ||
    !localStorage.getItem('Registers_THS_LS')
  ) {
    // First Write in Local Storage if there is nothing there
    localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection))
    localStorage.setItem('Registers_CANopen_LS', JSON.stringify(Registers_CANopen))
    localStorage.setItem('Registers_THS_LS', JSON.stringify(Registers_THS))
  }
  Objects_collection_LS = JSON.parse(localStorage.getItem('Objects_collection_LS'))
  Registers_CANopen_LS = JSON.parse(localStorage.getItem('Registers_CANopen_LS'))
  Registers_THS_LS = JSON.parse(localStorage.getItem('Registers_THS_LS'))

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="Topbar_Routes_container">
              <Topbar />
              <DrawerComponent title="Color Palatte" component={<ColorsComponent />} />
              <Routes>
                <Route path="/" element={<HomeWindow />} />
                <Route path="/Home" element={<HomeWindow />} />
                <Route path="/Decode_CAN_LOG" element={<Decode_CAN_LOG />} />
                <Route path="/Registers" element={<RegisterWindow />} />
                <Route path="/React_Logic" element={<React_Logic />} />
                <Route path="/React_Logic2" element={<React_Logic2 />} />
                <Route path="/DebugScene" element={<DebugScene />} />
                <Route path="/EditDataWindow" element={<EditDataWindow />} />
                <Route path="/Help" element={<HelpWindow />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
