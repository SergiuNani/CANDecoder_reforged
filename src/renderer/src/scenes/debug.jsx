import { useState, useEffect, useContext, Fragment } from 'react'
import { Header } from '../components/SmallComponents'
import { Box, Dialog, Typography, useTheme, Button } from '@mui/material'
import { tokens } from '../theme'
import { useMemo } from 'react'
import { PDO_mapped, DontBotherWithPDO_flag, PDO_mapped_aux } from '../functions/CANopenFunctions'
import { MessagesDecoded_ArrayOfObjects } from './Decode_CAN_LOG'
import { groupedFilteredArray } from '../components/Table'
import {
  VerifyCANopenValidityArray_RAW,
  Hardcoded_VerifyCANopenValidityArray
} from '../data/VerifyAlgorithmData'
import {
  Extract_MSGs_from_text,
  CreateDecodedArrayOfObjects,
  CanLogStatistics
} from '../functions/CANopen'
import { Button2 } from '../components/SmallComponents'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Extract_objects } from '../data/TestingData'
import { GetObject } from '../functions/CANopenFunctions'
const DebugScene = () => {
  const [verifyCANopenAlgorithm, setverifyCANopenAlgorithm] = useState(false)
  const [fileInnerText, setFileInnerText] = useState('')
  const [showCompareExistingVsFileObjects, setshowCompareExistingVsFileObjects] = useState(false)

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
  var ReturnText = []
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
    errorStatus = 'errorLength'
  } else {
    MessagesDecoded.forEach((oneObjectMessage, index) => {
      for (const key in oneObjectMessage) {
        if (key != 'msgNr') {
          if (oneObjectMessage[key] != Hardcoded_VerifyCANopenValidityArray[index][key]) {
            ReturnText.push(
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
                <span style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}> {key} </span>
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
          borderColor: ['error', 'errorLength'].includes(errorStatus)
            ? `${colors.red[500]}`
            : `${colors.green[400]}`,
          background: `${colors.primary[300]}`
        }}
      >
        <div>
          {errorStatus == 'errorLength' ? (
            ReturnText
          ) : ReturnText.length > 0 ? (
            ReturnText.map((item, index) => {
              return <div key={index}>{item}</div>
            })
          ) : (
            <div>All good</div>
          )}
        </div>
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

  const fileInnerText_array = fileInnerText.split('\r\n') // change to fileInnerText

  const fileInnerText_array2 = fileInnerText_array.filter((oneLine) => {
    var oneLine_array = oneLine.split(' ')
    oneLine_array = oneLine_array
      .map((word) => word.trim())
      .filter((element) => {
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

  extractedObjects = fileInnerText_array2.map((oneLine, inx) => {
    var returnObject = []
    oneLine = oneLine
      .split(/,|{|}/g)
      .map((word) => word.trim())
      .filter((word) => word !== '')

    if (!oneLine[1] || !oneLine[3]) {
      return [fileInnerText_array[inx], null]
    } else if (oneLine[1].length == 1) {
      oneLine[1] = `0${oneLine[1]}`
    }
    returnObject[0] = `${oneLine[0]}_${oneLine[1]}`
    returnObject[1] = oneLine[3].replace(/\D/g, '')
    if (returnObject[1].toString().length > 2) {
      //in case the reported length is some bs
      return [fileInnerText_array[inx], null]
    }
    return returnObject
  })
  console.log('!!!extractedObjects:', extractedObjects)

  var ConclusionArray = []

  extractedObjects.forEach((oneIndex, idx) => {
    if (oneIndex[1] != null) {
      var temp = GetObject(oneIndex[0])

      if (temp[2] == 0) {
        ConclusionArray[idx] = `Object ${oneIndex[0]} with size ${oneIndex[1]} can't be found`
        errorStatus = 'error'
      } else if (temp[2] != oneIndex[1]) {
        ConclusionArray[
          idx
        ] = `Object ${oneIndex[0]} with size ${oneIndex[1]} dont correspond with hardcoded size ${temp[2]}`
        errorStatus = 'error'
      } else {
        ConclusionArray[idx] = `OK`
      }
    }
  })
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
      >
        <div style={{ color: `${colors.primary[400]}` }}>
          Checked {ConclusionArray.length} objects:{' '}
        </div>
        {errorStatus == 'error' ? (
          ConclusionArray.map((oneConclusion, idx) => {
            if (oneConclusion != 'OK') {
              return <div key={idx}>{oneConclusion}</div>
            }
          })
        ) : (
          <div>Everything is OK</div>
        )}
      </section>
    </Dialog>
  )
}
export function handleDebugButton() {
  console.log(`------ DEBUG BUTTON ----------`)

  console.log(MessagesDecoded_ArrayOfObjects)
  console.log(groupedFilteredArray)
  console.log(PDO_mapped)
  console.log(CanLogStatistics)
  console.log('PDO_mapped_aux:', PDO_mapped_aux)
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
