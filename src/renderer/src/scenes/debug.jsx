import { useState } from 'react'
import { Header } from '../components/SmallComponents'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { Registers_CANopen_LS, Registers_THS_LS } from '../App'
import {
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange,
  decToHex,
  hexToDec,
  filterDecimal
} from '../functions/NumberConversion'
import { SnackBarMessage } from '../components/FloatingComponents'
import { Button1 } from '../components/SmallComponents'

const DebugScene = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false)

  function handleDebugClick() {
    //ADD logic here to be tested

    setOpenSnackBar(true)
  }
  function closeSnackBarParent() {
    setOpenSnackBar(false)
  }
  return (
    <>
      <Header title="Debug" subtitle="A bunch of references "></Header>
      <Button1 onClick={handleDebugClick}>DEBUG</Button1>
      {/* <Registers_logic /> */}
      {openSnackBar && (
        <SnackBarMessage
          message="This is Snackbar 1"
          severity="success"
          isOpen={openSnackBar}
          closeSnackBarParent={closeSnackBarParent}
        />
      )}
    </>
  )
}

export default DebugScene

export const ColorsComponent = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const colorElements = useMemo(() => {
    const Elements = []
    for (const colorCategory in colors) {
      const colorShade = colors[colorCategory]

      for (const shade in colorShade) {
        const colorValue = colorShade[shade]
        Elements.push(
          <Box key={`${colorCategory}-${shade}`}>
            <Box
              style={{
                background: `${colorValue}`,
                width: '10rem',
                height: '2rem'
              }}
            ></Box>
            <p>{`${colorCategory} - ${shade}: ${colorValue}`}</p>
          </Box>
        )
      }
    }
    return Elements
  }, [colors])

  const firstHalf = colorElements.slice(0, Math.ceil(colorElements.length / 2))
  const secondHalf = colorElements.slice(Math.ceil(colorElements.length / 2))
  return (
    <Box>
      <Typography variant="h4">{`import {useTheme} from '@mui/material'`} </Typography>
      <Typography variant="h4">{`import {tokens} from '../theme' `}</Typography>
      <Typography variant="h4">{`const theme = useTheme()`}</Typography>
      <Typography variant="h4">{`const colors = tokens(theme.palette.mode)`} </Typography>
      <Box display="flex" gap={10}>
        <div>{firstHalf}</div>
        <div>{secondHalf}</div>
      </Box>
    </Box>
  )
}

const Registers_logic = () => {
  for (let i = 0; i < Registers_THS_LS.length; i++) {
    console.log(
      Registers_THS_LS[i].BitInfo[0].bit +
        ` ---- ` +
        getRangeNumberFromStringRange(Registers_THS_LS[i].BitInfo[0].bit)
    )
  }
  for (let i = 0; i < Registers_CANopen_LS.length; i++) {
    console.log(
      Registers_CANopen_LS[i].BitInfo[0].bit +
        ' --- ' +
        getRangeNumberFromStringRange(Registers_CANopen_LS[i].BitInfo[0].bit)
    )
  }
}
