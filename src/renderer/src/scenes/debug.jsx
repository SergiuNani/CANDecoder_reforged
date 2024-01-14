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
import { GetObject } from '../functions/CANopenFunctions'
import {
  Hardcoded_VerifyRS232,
  Verify_RS232_rawList,
  Verify_TechnoCAN_rawList,
  Hardcoded_VerifyTechnoCAN
} from '../data/verifyRS232'
import { ProtocolGlobalContext } from '../App'
const DebugScene = () => {
  const [verifyCANopenAlgorithm, setverifyCANopenAlgorithm] = useState(false)
  const [verifyRS232, setVerifyRS232] = useState(false)
  const [verifyTechnoCAN, setVerifyTechnoCAN] = useState(false)
  const [fileInnerText, setFileInnerText] = useState('')
  const [showCompareExistingVsFileObjects, setshowCompareExistingVsFileObjects] = useState(false)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  useEffect(() => {
    const handleKeyPress = (event) => {
      event.preventDefault()
      if (event.key === '1') {
        setverifyCANopenAlgorithm(true)
      } else if (event.key === '2') {
        setVerifyRS232(true)
      } else if (event.key === '3') {
        setVerifyTechnoCAN(true)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

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
      <Header title="Debug" subtitle="Validity tests "></Header>
      <section
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          margin: '2rem 0'
        }}
      >
        <Typography variant="h4">Verify Decoding Algorithms: </Typography>
        {/* //Verify Decoding Algorithm ===================================== */}
        <section>
          <Button2
            onClick={() => {
              setverifyCANopenAlgorithm(true)
            }}
          >
            Verify CANopen
          </Button2>
        </section>
        {/* //Verify RS232 ===================================== */}
        <section>
          <Button2
            onClick={() => {
              setVerifyRS232(true)
            }}
          >
            Verify RS232
          </Button2>
        </section>
        {/* //Verify TechnoCAN ===================================== */}
        <section>
          <Button2
            onClick={() => {
              setVerifyTechnoCAN(true)
            }}
          >
            Verify TechnoCAN
          </Button2>
        </section>
      </section>

      {/* //Check for missing objects or errors ========================*/}
      <section
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          margin: '2rem 0'
        }}
      >
        <Typography variant="h4">Check for missing objects or errors: </Typography>
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
          openState={verifyCANopenAlgorithm}
          setOpenState={setverifyCANopenAlgorithm}
          protocol={'CANOPEN'}
        />
      )}
      {verifyRS232 && (
        <DialogVerifyAlgorithmComponent
          openState={verifyRS232}
          setOpenState={setVerifyRS232}
          protocol={'RS232'}
        />
      )}
      {verifyTechnoCAN && (
        <DialogVerifyAlgorithmComponent
          openState={verifyTechnoCAN}
          setOpenState={setVerifyTechnoCAN}
          protocol={'CAN'}
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

const DialogVerifyAlgorithmComponent = ({ openState, setOpenState, protocol }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var InputTEXT
  var hardcodedArray = []
  const { ValidationMethod } = useContext(ProtocolGlobalContext)

  var ReturnText = []
  var errorStatus = 'neutral'
  DontBotherWithPDO_flag[0] = 1
  function DoNothing() {}

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        RewriteLocalStorage()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [openState, protocol])

  const tt = (
    <section>
      <Typography variant="h4">
        No array present in LocalStorage for Protocol: {protocol}{' '}
      </Typography>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <Button2 onClick={RewriteLocalStorage}>ADD</Button2>
        <Button2
          onClick={() => {
            setOpenState(false)
          }}
        >
          Close
        </Button2>
      </div>
    </section>
  )

  if (protocol == 'CANOPEN') {
    InputTEXT = VerifyCANopenValidityArray_RAW
    if (ValidationMethod == 'LocalStorage') {
      if (localStorage.getItem('VerifyCANopen')) {
        hardcodedArray = JSON.parse(localStorage.getItem('VerifyCANopen'))
      } else {
        //Dont exist
        ReturnText.push(tt)
        errorStatus = 'NoArrayInLocalStorage'
      }
    } else {
      hardcodedArray = Hardcoded_VerifyCANopenValidityArray
    }
  } else if (protocol == 'RS232') {
    InputTEXT = Verify_RS232_rawList

    if (ValidationMethod == 'LocalStorage') {
      if (localStorage.getItem('VerifyRS232')) {
        hardcodedArray = JSON.parse(localStorage.getItem('VerifyRS232'))
      } else {
        //Dont exist
        ReturnText.push(tt)
        errorStatus = 'NoArrayInLocalStorage'
      }
    } else {
      hardcodedArray = Hardcoded_VerifyRS232
    }
  } else if (protocol == 'CAN') {
    InputTEXT = Verify_TechnoCAN_rawList

    if (ValidationMethod == 'LocalStorage') {
      if (localStorage.getItem('VerifyTechnoCAN')) {
        hardcodedArray = JSON.parse(localStorage.getItem('VerifyTechnoCAN'))
      } else {
        //Dont exist
        ReturnText.push(tt)
        errorStatus = 'NoArrayInLocalStorage'
      }
    } else {
      hardcodedArray = Hardcoded_VerifyTechnoCAN
    }
  }

  var MsgsExtracted_array = Extract_MSGs_from_text(InputTEXT.split('\n'), protocol)

  var MessagesDecoded = CreateDecodedArrayOfObjects(
    MsgsExtracted_array,
    DoNothing,
    DoNothing,
    DoNothing,
    protocol
  )

  console.log('🚀 ResultFromFunction:', MessagesDecoded)
  console.log('🚀 hardcodedArray:', hardcodedArray)
  if (errorStatus != 'NoArrayInLocalStorage') {
    if (MessagesDecoded.length != hardcodedArray.length) {
      ReturnText = `Decoded list has ${MessagesDecoded.length} length, while Hardcoded data has $
          {hardcodedArray.length} length`

      errorStatus = 'errorLength'
    } else {
      MessagesDecoded.forEach((oneObjectMessage, index) => {
        for (const key in oneObjectMessage) {
          if (key != 'msgNr') {
            if (oneObjectMessage[key] != hardcodedArray[index][key]) {
              ReturnText.push(
                <div
                  style={{
                    border: `1px solid ${colors.grey[100]}`,
                    marginBottom: '0.5rem',
                    padding: '0.5rem'
                  }}
                >
                  -- Message:
                  <span style={{ color: `${colors.blue[500]}`, fontWeight: '700' }}>
                    {' '}
                    //{oneObjectMessage.OriginalMessage}//
                  </span>
                  <div style={{ marginBottom: '0.5rem' }}>
                    LINE:
                    <span style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}>
                      {' '}
                      "{oneObjectMessage.msgNr}"
                    </span>
                    , KEY :
                    <span style={{ color: `${colors.green[400]}`, fontWeight: '700' }}>
                      {' '}
                      {key}{' '}
                    </span>
                    , <span style={{ color: `${colors.red[500]}`, fontWeight: '700' }}>Fct</span>/
                    <span style={{ color: `${colors.red[200]}`, fontWeight: '700' }}>
                      Hardcoded:
                    </span>
                  </div>
                  <div>
                    <span style={{ color: `${colors.red[500]}`, fontWeight: '700' }}>
                      {`${oneObjectMessage[key]}`}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: `${colors.red[200]}`, fontWeight: '700' }}>
                      {' '}
                      {`${hardcodedArray[index][key]}`}
                    </span>
                  </div>
                </div>
              )
              return (errorStatus = 'error')
            }
          }
        }
      })
    }
  }

  function RewriteLocalStorage() {
    if (protocol == 'CANOPEN') {
      localStorage.setItem('VerifyCANopen', JSON.stringify(MessagesDecoded))
    } else if (protocol == 'RS232') {
      localStorage.setItem('VerifyRS232', JSON.stringify(MessagesDecoded))
    } else if (protocol == 'CAN') {
      localStorage.setItem('VerifyTechnoCAN', JSON.stringify(MessagesDecoded))
    }
    setOpenState(false)
  }
  return (
    <Dialog
      open={openState}
      onClose={() => {
        setOpenState(false)
      }}
      sx={{
        border: `1px solid ${colors.primary[400]}`,
        padding: '10rem',
        color: `${colors.primary[200]}`,
        top: 0,
        fontSize: '1rem',
        '& .MuiDialog-paper': {
          maxWidth: 'none',
          maxHeight: '90vh'
        }
      }}
    >
      <Box
        sx={{
          padding: '1rem 2rem',
          border: `2px solid`,
          borderColor: ['error', 'errorLength'].includes(errorStatus)
            ? `${colors.red[500]}`
            : `${colors.green[400]}`,
          background: `${colors.primary[300]}`
        }}
      >
        {errorStatus != 'neutral' && errorStatus != 'NoArrayInLocalStorage' ? (
          <section>
            <Button2 onClick={RewriteLocalStorage}>Rewrite LocalStorage</Button2>
          </section>
        ) : null}
        <section style={{}}>
          <div>
            {errorStatus == 'errorLength' ? (
              ReturnText
            ) : ReturnText.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    errorStatus != 'NoArrayInLocalStorage' ? 'repeat(3, 1fr)' : null,
                  gap: '0.5rem'
                }}
              >
                {ReturnText.map((item, index) => {
                  return (
                    <div key={index} style={{ width: '100%' }}>
                      {item}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div>All good, Protocol: {protocol}</div>
            )}
          </div>
        </section>
      </Box>
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
        setshowCompareExistingVsFileObjects(false)
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

  console.log('MessagesDecoded_ArrayOfObjects: ', MessagesDecoded_ArrayOfObjects)
  console.log('groupedFilteredArray: ', groupedFilteredArray)
  console.log('PDO_mapped: ', PDO_mapped)
  console.log('PDO_mapped_aux:', PDO_mapped_aux)
  console.log('CanLogStatistics: ', CanLogStatistics)
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
