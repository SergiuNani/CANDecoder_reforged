import { useState, useEffect, useContext, Fragment } from 'react'
import { Header } from '../components/SmallComponents'
import { Box, Dialog, Typography, useTheme, Button } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { PDO_mapped, DontBotherWithPDO_flag } from '../functions/CANopenFunctions'
import { MessagesDecoded_ArrayOfObjects } from './Decode_CAN_LOG'
import { groupedFilteredArray } from '../components/Table'
import {
  VerifyCANopenValidityArray_RAW,
  Hardcoded_VerifyCANopenValidityArray
} from '../data/VerifyAlgorithmData'
import { Extract_MSGs_from_text, CreateDecodedArrayOfObjects } from '../functions/CANopen'
import { Button2 } from '../components/SmallComponents'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Extract_objects } from '../data/TestingData'
const DebugScene = () => {
  const [verifyCANopenAlgorithm, setverifyCANopenAlgorithm] = useState(false)
  const [fileInnerText, setFileInnerText] = useState([])
  const [showCompareExistingVsFileObjects, setshowCompareExistingVsFileObjects] = useState(true)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const fileContent = e.target.result
        setFileInnerText(fileContent)
        setshowCompareExistingVsFileObjects(true)
      }

      reader.readAsText(file)
    }
  }

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

      {/* //UPLOAD A FILE SECTION */}
      <section
        style={{
          margin: '1rem 0'
        }}
      >
        <Typography variant="h4">Check for missing objects or errors </Typography>
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

      {verifyCANopenAlgorithm && (
        <DialogVerifyAlgorithmComponent
          verifyCANopenAlgorithm={verifyCANopenAlgorithm}
          setverifyCANopenAlgorithm={setverifyCANopenAlgorithm}
        />
      )}
      {showCompareExistingVsFileObjects && (
        <DialogVerifyMyObjects
          showCompareExistingVsFileObjects={showCompareExistingVsFileObjects}
          setshowCompareExistingVsFileObjects={setshowCompareExistingVsFileObjects}
          fileInnerText={fileInnerText}
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
  var errorStatus = 'neutral'
  var ReturnText2 = '---- We also have problems at line(s): '
  DontBotherWithPDO_flag[0] = 1
  function DoNothing() {}

  var MsgsExtracted_array = Extract_MSGs_from_text(VerifyCANopenValidityArray_RAW.split('\n'))

  var MessagesDecoded = CreateDecodedArrayOfObjects(
    MsgsExtracted_array,
    DoNothing,
    DoNothing,
    DoNothing
  )
  console.log('🚀 MessagesDecoded_ArrayOfObjects:', MessagesDecoded)
  console.log('🚀 Hardcoded_VerifyCANopenValidityArray:', Hardcoded_VerifyCANopenValidityArray)

  if (MessagesDecoded.length != Hardcoded_VerifyCANopenValidityArray.length) {
    ReturnText = `Decoded list has ${MessagesDecoded.length} length, while Hardcoded data has ${Hardcoded_VerifyCANopenValidityArray.length} length`
    errorStatus = 'error'
  } else {
    MessagesDecoded.forEach((oneObjectMessage, index) => {
      for (const key in oneObjectMessage) {
        if (key != 'msgNr') {
          if (oneObjectMessage[key] != Hardcoded_VerifyCANopenValidityArray[index][key]) {
            if (errorStatus != 'error') {
              ReturnText = (
                <div>
                  Message:
                  <span style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}>
                    {' '}
                    //{oneObjectMessage.OriginalMessage}//{' '}
                  </span>
                  at line
                  <span style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}>
                    {' '}
                    "{oneObjectMessage.msgNr}"{' '}
                  </span>
                  has the key :
                  <span style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}>
                    {' '}
                    {key}{' '}
                  </span>
                  <span style={{ color: `${colors.green[100]}`, fontWeight: '700' }}>
                    - {`${oneObjectMessage[key]}`} -{' '}
                  </span>
                  which is not equal to the hardcoded
                  <span style={{ color: `${colors.green[100]}`, fontWeight: '700' }}>
                    {' '}
                    - {`${Hardcoded_VerifyCANopenValidityArray[index][key]}`} -
                  </span>
                </div>
              )
              return (errorStatus = 'error')
            } else {
              return (ReturnText2 = ReturnText2.concat(` ${oneObjectMessage.msgNr} - `))
            }
          }
        }
      }
    })
  }
  return (
    <Dialog
      open={verifyCANopenAlgorithm}
      onClose={() => {
        setverifyCANopenAlgorithm(false) //BUG - turn to false
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
        {errorStatus == 'error' && ReturnText2 != '---- We also have problems at line(s): ' && (
          <div>{ReturnText2}</div>
        )}
      </section>
    </Dialog>
  )
}
const DialogVerifyMyObjects = ({
  showCompareExistingVsFileObjects,
  setshowCompareExistingVsFileObjects,
  fileInnerText
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  let errorStatus = 'neutral'
  let extractedObjects = []
  // console.log('//', fileInnerText)

  const fileInnerText_array = Extract_objects.split('\n') // change to fileInnerText
  console.log('🚀 ~  fileInnerText_array:', fileInnerText_array)

  const fileInnerText_array2 = fileInnerText_array.filter((oneLine) => {
    var oneLine_array = oneLine.split(' ')
    oneLine_array = oneLine_array.filter((element) => {
      return element != '' && element != ' '
    })
    if (oneLine_array.length > 0) {
      var firstElement = oneLine_array[0]
      var lastElement = oneLine_array[oneLine_array.length - 1]
      if (firstElement[0] == '{' && lastElement.slice(lastElement.length - 2) == '},') {
        return oneLine_array
      }
    }
  })

  extractedObjects = fileInnerText_array2.map((oneLine) => {
    var returnObject = []
    oneLine = oneLine
      .split(/,|{|}/g)
      .map((word) => word.trim())
      .filter((word) => word !== '')

    oneLine.forEach((element, index) => {
      returnObject[index] = `${oneLine[0]}_${oneLine[1]}`
    })
  })

  console.log('🚀 ~  fileInnerText_array2:', extractedObjects)

  return (
    <Dialog
      open={showCompareExistingVsFileObjects}
      onClose={() => {
        setshowCompareExistingVsFileObjects(false) //BUG - turn to false
      }}
    >
      <section
        style={{
          padding: '1rem 2rem',
          border: `2px solid`,
          borderColor: errorStatus == 'error' ? `${colors.red[500]}` : `${colors.green[400]}`,
          background: `${colors.primary[300]}`
        }}
      ></section>
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
