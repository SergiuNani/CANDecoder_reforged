import { useState, useEffect, useContext, Fragment } from 'react'
import { Header } from '../components/SmallComponents'
import { Box, Dialog, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { PDO_mapped } from '../functions/CANopenFunctions'
import { MessagesDecoded_ArrayOfObjects } from './Decode_CAN_LOG'
import { groupedFilteredArray } from '../components/Table'
import {
  VerifyCANopenValidityArray_RAW,
  VerifyCANopenValidityArray_Decoded
} from '../data/VerifyAlgorithmData'
import { Extract_MSGs_from_text, CreateDecodedArrayOfObjects } from '../functions/CANopen'
import { Button2 } from '../components/SmallComponents'
const DebugScene = () => {
  const [verifyCANopenAlgorithm, setverifyCANopenAlgorithm] = useState(true)

  return (
    <>
      <Header title="Debug" subtitle="A bunch of references "></Header>
      <section>
        <Typography variant="h4">Verify Decoding Algorithm </Typography>
        <Button2
          onClick={() => {
            setverifyCANopenAlgorithm(true)
          }}
        >
          Verify Algorithm
        </Button2>
      </section>
      {verifyCANopenAlgorithm && (
        <DialogVerifyAlgorithmComponent
          verifyCANopenAlgorithm={verifyCANopenAlgorithm}
          setverifyCANopenAlgorithm={setverifyCANopenAlgorithm}
        />
      )}
    </>
  )
}

export default DebugScene

const DialogVerifyAlgorithmComponent = ({ verifyCANopenAlgorithm, setverifyCANopenAlgorithm }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var ReturnText = `All Good`
  var errorStatus = 'good'
  function DoNothing() {}

  var MsgsExtracted_array = Extract_MSGs_from_text(VerifyCANopenValidityArray_RAW.split('\n'))

  var MessagesDecoded = CreateDecodedArrayOfObjects(
    MsgsExtracted_array,
    DoNothing,
    DoNothing,
    DoNothing
  )
  console.log('🚀 MessagesDecoded_ArrayOfObjects:', MessagesDecoded)
  console.log('🚀 MessagesDecoded_ArrayOfObjects:', VerifyCANopenValidityArray_Decoded)

  if (MessagesDecoded.length != VerifyCANopenValidityArray_Decoded.length) {
    ReturnText = `Decoded list has ${MessagesDecoded.length} length, while Hardcoded data has ${VerifyCANopenValidityArray_Decoded.length} length`
    errorStatus = 'error'
  }

  return (
    <Dialog
      open={verifyCANopenAlgorithm}
      onClose={() => {
        setverifyCANopenAlgorithm(true) //BUG - turn to false
      }}
    >
      <section
        style={{
          padding: '1rem 2rem',
          border: `2px solid`,
          borderColor: errorStatus == 'error' ? `${colors.red[500]}` : `${colors.green[400]}`,
          background: `${colors.primary[300]}`
        }}
      >
        <div>{ReturnText}</div>
      </section>
    </Dialog>
  )
}

export function handleDebugButton() {
  console.log(`------ DEBUG BUTTON ----------`)

  console.log(MessagesDecoded_ArrayOfObjects)
  console.log(groupedFilteredArray)
  console.log(PDO_mapped)
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
