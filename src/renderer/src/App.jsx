import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/topbar'
import Sidebar from './scenes/global/Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import HOME from './scenes/HOME'
import RenderExpandCellGrid from './scenes/DataGrid'
import Decode_CAN_LOG from './scenes/Decode_CAN_LOG'
import React_Logic from './scenes/React_logic'
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
              {/* <div className="sticky"> */}
              <Topbar />
              {/* </div> */}
              <Routes>
                <Route path="/" element={<React_Logic />} />
                <Route path="/HOME" element={<HOME />} />
                <Route path="/Decode_CAN_LOG" element={<Decode_CAN_LOG />} />
                <Route path="/React_Logic" element={<React_Logic />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
