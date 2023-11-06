import { useState, useEffect, useContext, Fragment } from 'react'
import { Header } from '../components/SmallComponents'
import { Box, Dialog, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { Registers_CANopen_LS, Registers_THS_LS, FG_Context } from '../App'
import { useLocation } from 'react-router-dom'
import { Tooltip, Button } from '@mui/material'
import {
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange,
  decToHex,
  hexToDec,
  filterDecimal,
  fixed2Hex,
  filterDecimalWithComma,
  LittleEndian
} from '../functions/NumberConversion'
import { SnackBarMessage } from '../components/FloatingComponents'
import { Button1 } from '../components/SmallComponents'
import { AutocompleteInput_RegisterList } from '../components/ForumsComponents'
import { TooltipClickable } from '../components/SmallComponents'
import { GetObject } from '../functions/CANopenFunctions'
import { PDO_mapped } from '../functions/CANopenFunctions'
import { MessagesDecoded_ArrayOfObjects } from './Decode_CAN_LOG'
import { RegisterTooltip } from '../components/Register'
import { CanLogStatistics } from '../functions/CANopen'
import { GroupingOptionsForMessages } from '../data/SmallData'
import { whatPDOisObject } from '../functions/CANopenFunctions'
import { groupedFilteredArray } from '../components/Table'
export function handleDebugButton() {
  console.log(`------ DEBUG BUTTON ----------`)

  console.log(MessagesDecoded_ArrayOfObjects)
  console.log(groupedFilteredArray)
  console.log(PDO_mapped)
}

const DebugScene = () => {
  const location = useLocation()
  const { FG_OptionsObject } = useContext(FG_Context)
  function handleDebugClick() {}

  return (
    <>
      <Header title="Debug" subtitle="A bunch of references "></Header>
      <div
        style={{
          marginLeft: '23rem'
        }}
      ></div>
      {/* <Registers_logic /> */}
    </>
  )
}

export default DebugScene

const Temp = () => {
  return (
    <div
      style={{
        border: `1px solid yellow`
      }}
    >
      <RegisterComponent register={Registers_CANopen_LS[1]} value="1234" />
    </div>
  )
}
const array = ['Number: 1', 'Number: 2', 'Number: 3', 'Number: 4', 'Number: 100-----']

function PDOcomponent() {
  const [openModal, setOpenModal] = useState(true)
  const [iteration, setIteration] = useState(0)

  const handleApply = () => {
    if (iteration < array.length) {
      console.log(array[iteration])
      setIteration(iteration + 1)
    } else {
      setOpenModal(false)
    }
  }

  return (
    <div>
      <p>HELLO from PDOcomponent</p>
      <ModalComponent openModal={openModal} setOpenModal={setOpenModal} handleApply={handleApply} />
    </div>
  )
}

function ModalComponent({ openModal, setOpenModal, handleApply }) {
  return (
    <div>
      {openModal && (
        <div>
          <Dialog open={openModal}>
            <Button1 onClick={handleApply}>APPLY</Button1>
          </Dialog>
        </div>
      )}
    </div>
  )
}

//------DONT NEED-------------------------------------------
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
