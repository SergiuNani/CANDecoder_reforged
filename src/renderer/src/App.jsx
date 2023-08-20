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
import DrawerComponent from './components/Drawer'
import { ColorsComponent } from './scenes/debug'

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

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
              </Routes>
            </main>
          </div>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
