import { Header } from '../components/header'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { Registers_THS, Registers_CANopen } from '../data/BigData'
import {
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange
} from '../functions/NumberConversion'
const DebugScene = () => {
  return (
    <>
      <Header title="Debug" subtitle="A bunch of references "></Header>
      {/* <Registers_logic /> */}
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

export const Registers_logic = () => {
  for (let i = 0; i < Registers_THS.length; i++) {
    console.log(
      Registers_THS[i].BitInfo[0].bit +
        ` ---- ` +
        getRangeNumberFromStringRange(Registers_THS[i].BitInfo[0].bit)
    )
  }
  for (let i = 0; i < Registers_CANopen.length; i++) {
    console.log(
      Registers_CANopen[i].BitInfo[0].bit +
        ' --- ' +
        getRangeNumberFromStringRange(Registers_CANopen[i].BitInfo[0].bit)
    )
  }
}
