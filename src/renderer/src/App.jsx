import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import HOME from './scenes/HOME'
import Decode_CAN_LOG from './scenes/Decode_CAN_LOG'
import { RegisterWindow } from './scenes/global/RegisterWindow'
import React_Logic from './scenes/React_logic'
import React_Logic2 from './scenes/React_Logic2'
import DebugScene from './scenes/debug'
import { DrawerComponent } from './components/FloatingComponents'
import { ColorsComponent } from './scenes/debug'
import EditDataWindow from './scenes/EditDataWindow'
import { Objects_collection, Registers_CANopen, Registers_THS } from './data/BigData'
export var Objects_collection_LS = []
export var Registers_CANopen_LS = []
export var Registers_THS_LS = []

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  //TODO: after you have validated the objects and registers add that if below
  // if (!localStorage.getItem('Objects_collection_LS')) {

  // First Write in Local Storage if there is nothing there
  localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection))
  localStorage.setItem('Registers_CANopen_LS', JSON.stringify(Registers_CANopen))
  localStorage.setItem('Registers_THS_LS', JSON.stringify(Registers_THS))

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
                <Route path="/" element={<RegisterWindow />} />
                <Route path="/HOME" element={<HOME />} />
                <Route path="/Decode_CAN_LOG" element={<Decode_CAN_LOG />} />
                <Route path="/Registers" element={<RegisterWindow />} />
                <Route path="/React_Logic" element={<React_Logic />} />
                <Route path="/React_Logic2" element={<React_Logic2 />} />
                <Route path="/DebugScene" element={<DebugScene />} />
                <Route path="/EditDataWindow" element={<EditDataWindow />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
