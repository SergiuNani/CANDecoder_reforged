import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Box, IconButton, Button, Typography } from '@mui/material'
import { Header, SwitchComponent, Button1 } from '../components/SmallComponents'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { UserVsDebugModeContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import { Extract_MSGs_from_text, CreateDecodedArrayOfObjects } from '../functions/CANopen'
import { TooltipClickable } from '../components/SmallComponents'
import { Input_AutoFormat } from '../components/ForumsComponents'
import { filterDecimal, filterHex } from '../functions/NumberConversion'
import { Loop, Search } from '@mui/icons-material'
import { Dialog } from '@mui/material'
import { PDO_mapped, GetObject, DecodePDO } from '../functions/CANopenFunctions'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { SnackBarMessage } from '../components/FloatingComponents'
import { DefaultPDOs, CompatibleMapping, CompatibleMapping1 } from '../data/SmallData'
import { RegisterTooltip } from '../components/Register'

export let MessagesDecoded_ArrayOfObjects = []

const Decode_CAN_LOG = () => {
  const [freeTextVsCanLog, setFreeTextVsCanLog] = useState('FreeText')
  const [TextAreaText, setTextAreaText] = useState('')
  const [fileInnerText, setFileInnerText] = useState(InsertTextIntoTextArea)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { userVsDebugMode } = useContext(UserVsDebugModeContext)

  function handleMenuChange(event) {
    if (event === 'FreeText') {
      setFreeTextVsCanLog('FreeText')
    } else {
      setFreeTextVsCanLog('UploadFile')
    }
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  })

  function handleFileUpload(e) {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const fileContent = e.target.result
        setFileInnerText(fileContent)
      }

      reader.readAsText(file)
    }
  }
  function handleClickDecode() {
    var lines = TextAreaText
    setFileInnerText(lines)
  }
  return (
    <Box style={{ position: 'relative' }}>
      <Header title="Decode a CAN LOG "></Header>

      {/* TOP MENU options --------------------------- */}
      <Box>
        <section
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '2rem'
          }}
        >
          <SwitchComponent
            option1="FreeText"
            option2="Upload File"
            tellParentValueChanged={handleMenuChange}
          />
        </section>
      </Box>

      {freeTextVsCanLog === 'FreeText' ? (
        <section
          //FREE TEXT AREA SECTION
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <textarea
            name=""
            id=""
            cols="100"
            value={TextAreaText}
            onChange={(e) => {
              setTextAreaText(e.target.value)
            }}
            style={{
              background: `${colors.primary[300]}`,
              color: `${colors.yellow[600]}`,
              border: `1px solid ${colors.green[400]}`,
              height: '30vh',
              width: '80%'
            }}
          ></textarea>

          <IconButton
            sx={{
              zoom: '2'
            }}
            onClick={handleClickDecode}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </section>
      ) : (
        <section
          //UPLOAD A FILE SECTION
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `1px solid yellow`,
            padding: '1rem'
          }}
        >
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
          </Button>
        </section>
      )}

      {/* TABLE ----------------------------------------- */}

      <Box
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // border: `1px solid yellow`,
          // height: '30vh',
          // overflow: 'auto',
          fontSize: '1.2rem'
        }}
      >
        {userVsDebugMode == 'USER' ? (
          <UserCANopenDecodedTable fileInnerText={fileInnerText} />
        ) : (
          <DebugCANopenDecodedTable fileInnerText={fileInnerText} />
        )}
      </Box>
    </Box>
  )
}

export default Decode_CAN_LOG

const DebugCANopenDecodedTable = ({ fileInnerText }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [lineToScroll, setLineToScroll] = useState('')

  if (fileInnerText == '') {
    return <div> Nothing to decode. Oh Dear. Maybe try writing something so I can Decode</div>
  }
  const scrollRef = useRef(null)

  useEffect(() => {
    if (lineToScroll !== '') {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [lineToScroll])

  function handleNewSearch(event) {
    setLineToScroll(event)
  }
  var originalLines = fileInnerText.split('\n')
  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(originalLines)
  return (
    <Box sx={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          position: 'sticky',
          top: '2.5rem',
          background: `${colors.primary[200]}`
        }}
      >
        <Typography variant="h4">GOTO LINE: </Typography>
        <Input_AutoFormat
          callback={filterDecimal}
          resolution={'TIME'}
          tellParentValueChanged={handleNewSearch}
          forceValueFromParent={lineToScroll}
        />
      </div>
      <Box>
        {AllCAN_MsgsExtracted_array.map((iteration, index) => {
          const isHighlighted = index === lineToScroll - 1
          return (
            <div
              key={index}
              ref={isHighlighted ? scrollRef : null}
              style={{
                display: 'flex',
                border: isHighlighted
                  ? `4px solid ${colors.yellow[500]}`
                  : `1px solid ${colors.primary[400]}`,

                gap: '1rem',
                padding: '0.2rem'
              }}
            >
              <p style={{}}> [{iteration[0]}]. </p>
              <p style={{ color: `${colors.yellow[500]}` }}> {iteration[1]}</p>
              <div style={{ color: `${colors.red[300]}`, display: 'flex' }}>
                {' '}
                {iteration[4].map((i, ii) => {
                  return (
                    <p
                      key={ii + 'abc'}
                      style={{
                        display: 'flex'
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // border: `1px solid yellow`
                      }}
                    >
                      {' '}
                      {i} -
                    </p>
                  )
                })}
              </div>
              <p style={{ color: `${colors.green[100]}` }}>-- [{iteration[2]}]</p>
              <p style={{ color: `${colors.personal[100]}` }}>-- [{iteration[3]}]</p>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}

const UserCANopenDecodedTable = ({ fileInnerText }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [PDOareDone, setPDOareDone] = useState(false)

  if (fileInnerText == '') {
    return <div> Nothing to decode. Oh Dear</div>
  }
  var originalLines = fileInnerText.split('\n')
  var AllCAN_MsgsExtracted_array = Extract_MSGs_from_text(originalLines)
  MessagesDecoded_ArrayOfObjects = useMemo(() => {
    return CreateDecodedArrayOfObjects(AllCAN_MsgsExtracted_array)
  }, [fileInnerText])

  return (
    <section>
      <Box>
        <DecodePDO_component
          MessagesDecoded_ArrayOfObjects={MessagesDecoded_ArrayOfObjects}
          setPDOareDone={setPDOareDone}
        />
        {PDOareDone && (
          <table
            style={{
              width: '100%',
              position: 'relative',
              color: `${colors.grey[100]}`,
              background: `${colors.blue[300]}`,
              fontFamily: 'Calibri',
              marginBottom: '20rem'
            }}
          >
            <thead
              style={{
                fontWeight: '700',
                position: 'sticky',
                top: '2.5rem',
                background: `${colors.primary[300]}`,
                zIndex: 1
              }}
            >
              {/* Table ROW FOR THEAD---------------------------- */}
              <tr>
                <th
                  style={{
                    padding: '0.5rem'
                  }}
                >
                  NR
                </th>
                <th>Original Message</th>
                <th>Type</th>
                <th>AxisID</th>
                <th>CS</th>
                <th>Object</th>
                <th>Object Name</th>
                <th>Data</th>
                <th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {MessagesDecoded_ArrayOfObjects.map((iteration, index) => {
                var isRecieveTypeMessage = [
                  'R_SDO',
                  'RPDO1',
                  'RPDO2',
                  'RPDO3',
                  'RPDO4',
                  'NMT'
                ].includes(iteration.type)
                return (
                  <tr
                    key={index}
                    style={{
                      borderBottom: `1px solid ${colors.grey[300]}`,
                      background: isRecieveTypeMessage ? `${colors.blue[200]}` : 'inherit',
                      borderLeft: isRecieveTypeMessage
                        ? `0.5rem solid ${colors.primary[400]}`
                        : 'inherit'
                    }}
                  >
                    <td
                      style={{
                        textAlign: 'center',
                        padding: '0.7rem 0'
                      }}
                    >
                      {iteration.msgNr}
                    </td>
                    <td style={{ textAlign: 'center', cursor: 'pointer' }}>
                      <TooltipClickable title={iteration.OriginalMessage} arrow placement="top">
                        <p>
                          {iteration.CobID} - {iteration.FrameData}
                        </p>
                      </TooltipClickable>
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: `${colors.blue[100]}`,
                        fontWeight: '600'
                      }}
                    >
                      {iteration.type}
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: `${colors.personal[100]}`,
                        fontWeight: '700'
                      }}
                    >
                      {iteration.AxisID}
                    </td>
                    <td style={{ textAlign: 'center' }}>{iteration.CS}</td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: `${colors.yellow[100]}`,
                        fontWeight: '600'
                      }}
                    >
                      {iteration.Object}
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        maxWidth: '10rem',
                        overflowY: 'auto'
                      }}
                    >
                      {iteration.ObjectName}
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: `${colors.green[100]}`,
                        fontWeight: '700'
                      }}
                    >
                      <RegisterTooltip objects={iteration.Object} objectData={iteration.Data}>
                        {iteration.Data}
                      </RegisterTooltip>
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        maxWidth: '25rem',
                        overflowY: 'auto',
                        fontWeight:
                          iteration.errorStatus == 'error'
                            ? '700'
                            : iteration.errorStatus == 'blue'
                            ? '700'
                            : 'inherit',
                        color:
                          iteration.errorStatus == 'error'
                            ? `${colors.red[500]}`
                            : iteration.errorStatus == 'warning'
                            ? `${colors.yellow[500]}`
                            : iteration.errorStatus == 'idk'
                            ? `${colors.primary[400]}`
                            : iteration.errorStatus == 'blue'
                            ? `${colors.personal[300]}`
                            : 'inherit'
                      }}
                    >
                      {iteration.Interpretation}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Box>
    </section>
  )
}

function DecodePDO_component({ MessagesDecoded_ArrayOfObjects, setPDOareDone }) {
  const [openPDOdectectedModal, setOpenPDOdectectedModal] = useState(false)
  const [object, setobject] = useState(null)
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0)
  console.log('inside DecodePDO_component++')

  useEffect(() => {
    setCurrentObjectIndex(0)
    DontBotherWithPDO_flag = 0
  }, [MessagesDecoded_ArrayOfObjects])

  useEffect(() => {
    // Check if there are more objects to process
    console.log('useEffect ---' + currentObjectIndex)
    if (currentObjectIndex < MessagesDecoded_ArrayOfObjects.length) {
      setPDOareDone(false)
      const objectIteration = MessagesDecoded_ArrayOfObjects[currentObjectIndex]

      // Check if the object is a PDO
      if (objectIteration.CS === 'PDO') {
        setobject(objectIteration)
        DecodeOnePDOmsg(objectIteration, setCurrentObjectIndex, setOpenPDOdectectedModal)
      } else {
        setTimeout(() => {
          setCurrentObjectIndex(currentObjectIndex + 1)
          //Solve the  Maximum update depth exceeded
        }, 10)
      }
    } else {
      setPDOareDone(true)
    }
  }, [currentObjectIndex, MessagesDecoded_ArrayOfObjects])

  return (
    <div>
      {object && (
        <Box>
          <PDOdetectedModal
            key={currentObjectIndex}
            open={openPDOdectectedModal}
            onClose={setOpenPDOdectectedModal}
            objectIteration={object}
          />
        </Box>
      )}
    </div>
  )
}

let DontBotherWithPDO_flag = 0
function PDOdetectedModal({ open, onClose, objectIteration }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [openSnackBarError, setOpenSnackBarError] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState()

  const [object1, setObject1] = useState('')
  const [objectSub1, setObjectSub1] = useState('00')
  const [object2, setObject2] = useState('')
  const [objectSub2, setObjectSub2] = useState('00')
  const [object3, setObject3] = useState('')
  const [objectSub3, setObjectSub3] = useState('00')
  const [object4, setObject4] = useState('')
  const [objectSub4, setObjectSub4] = useState('00')

  const [radioOption, setRadioOption] = useState('USER')

  function handleApply() {
    if (
      (object1 == '' && object2 == '' && object3 == '' && object4 == '') ||
      (object1 == '' && (object2 != '' || object3 != '' || object4 != '')) ||
      (object2 == '' && (object3 != '' || object4 != '')) ||
      (object3 == '' && object4 != '')
    ) {
      setOpenSnackBarError(true)
      return setMessageSnackbar('Please insert objects one after another and in order! ')
    }
    var error = false

    function formatObject(object, objectSub) {
      if (object.length != 4 && object != '') {
        error = true
        setOpenSnackBarError(true)
        return setMessageSnackbar('Object length must be 4 characters or above! ')
      }
      let aux = objectSub || '00'
      if (aux.length == 1) {
        aux = '0' + aux
      }
      aux = object + '_' + aux
      var object = aux
      aux = GetObject(aux)

      if (aux[1] == 'Nothing Found') {
        error = true
        setOpenSnackBarError(true)
        return setMessageSnackbar(`Object "${object}" is not contained in the database `)
      }
      return aux
    }

    var aux_object1
    var aux_object2
    var aux_object3
    var aux_object4
    var sumSize = 0

    if (object1 != '') {
      aux_object1 = formatObject(object1, objectSub1)
      if (!error) sumSize += aux_object1[2]
    }
    if (object2 != '') {
      aux_object2 = formatObject(object2, objectSub2)
      if (!error) sumSize += aux_object2[2]
    }
    if (object3 != '') {
      aux_object3 = formatObject(object3, objectSub3)
      if (!error) sumSize += aux_object3[2]
    }
    if (object4 != '') {
      aux_object4 = formatObject(object4, objectSub4)
      if (!error) sumSize += aux_object4[2]
    }

    if (error) return

    var aux_msgSize = objectIteration.FrameData.length * 4
    if (aux_msgSize != sumSize && radioOption != 'DONTMATCH') {
      setOpenSnackBarError(true)
      return setMessageSnackbar(
        `Data size of the message ("${aux_msgSize}bits") doesn't match the combined size of all the objects: "${sumSize}bits" `
      )
    }

    //DATA DISTRIBUTION ----------------

    var resultArray

    if (aux_object1 && aux_object2 && aux_object3 && aux_object4) {
      resultArray = [aux_object1[0], aux_object2[0], aux_object3[0], aux_object4[0]]
    } else if (aux_object1 && aux_object2 && aux_object3) {
      resultArray = [aux_object1[0], aux_object2[0], aux_object3[0]]
    } else if (aux_object1 && aux_object2) {
      resultArray = [aux_object1[0], aux_object2[0]]
    } else if (aux_object1) {
      resultArray = [aux_object1[0]]
    }

    if (radioOption == 'ALLDEFAUT') {
      for (let i = 1; i < 128; i++) {
        PDO_mapped[objectIteration.type][i] = resultArray
      }
    } else if (radioOption == 'ALLCOMPATIBLE') {
      PDO_mapped[objectIteration.type][objectIteration.AxisID] = resultArray
      DontBotherWithPDO_flag = 1
    } else {
      PDO_mapped[objectIteration.type][objectIteration.AxisID] = resultArray
    }

    console.log('--Close modal --')
    onClose(false)
  }

  function handleChangedRadio(value) {
    setRadioOption(value)

    if (value == 'DEFAUT' || value == 'ALLDEFAUT') {
      var temp = DefaultPDOs[objectIteration.type]

      setObject1(temp[0])
      setObjectSub1(temp[1])
      setObject2(temp[2])
      setObjectSub2(temp[3])
      setObject3(temp[4])
      setObjectSub3(temp[5])
      setObject4(temp[6])
      setObjectSub4(temp[7])
    } else if (value == 'COMPATIBLE' || value == 'ALLCOMPATIBLE') {
      var frameData = objectIteration.FrameData
      if (frameData.length % 2 != 0) {
        frameData =
          frameData.slice(0, frameData.length - 1) +
          '0' +
          frameData.slice(frameData.length - 1, frameData.length)

        objectIteration.FrameData = frameData
      }

      var temp = frameData.length * 4
      temp = CompatibleMapping[temp]

      setObject1(temp[0])
      setObjectSub1(temp[1])
      setObject2(temp[2])
      setObjectSub2(temp[3])
      setObject3(temp[4])
      setObjectSub3(temp[5])
      setObject4(temp[6])
      setObjectSub4(temp[7])
    }
  }

  let Str1 = `Set default objects for ${objectIteration.type}`
  let Str2 = `Set default objects for ${objectIteration.type} for all the axes`
  return (
    <Dialog open={open}>
      {openSnackBarError && (
        <SnackBarMessage
          message={messageSnackbar}
          severity="error"
          isOpen={openSnackBarError}
          closeSnackBarParent={() => {
            setOpenSnackBarError(false)
          }}
        />
      )}
      <Box
        sx={{
          background: `${colors.primary[100]}`,

          padding: '1rem',
          border: `3px solid ${colors.primary[400]}`,
          borderRadius: '0.2rem'
        }}
      >
        <Typography variant="h3">PDO has been detected</Typography>
        {/* Information Section about the message -------------- */}
        <section
          style={{
            background: `${colors.primary[200]}`,
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            margin: '1rem 0',
            fontSize: '1rem',
            gap: '0.5rem'
          }}
        >
          <li>
            Message:{' '}
            <span style={{ color: `${colors.green[100]}`, fontWeight: '600' }}>
              {objectIteration.CobID} - {objectIteration.FrameData}
            </span>
          </li>
          <li>
            Type:{' '}
            <span style={{ color: `${colors.blue[100]}`, fontWeight: '600' }}>
              {objectIteration.type}
            </span>
          </li>
          <li>
            AxisID: {'   '}
            <span style={{ color: `${colors.yellow[100]}`, fontWeight: '600' }}>
              {objectIteration.AxisID}
            </span>
          </li>
        </section>

        {/* INPUT SECTION , multiple choise Menu------------ */}
        <section
          style={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            background: `${colors.primary[200]}`,
            padding: '1rem',
            position: 'relative',
            paddingBottom: '3rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <InputRow
              label="Object 1"
              resolution={16}
              object={object1}
              setObject={setObject1}
              objectSub={objectSub1}
              setObjectSub={setObjectSub1}
            />
            <InputRow
              label="Object 2"
              resolution={16}
              object={object2}
              setObject={setObject2}
              objectSub={objectSub2}
              setObjectSub={setObjectSub2}
            />
            <InputRow
              label="Object 3"
              resolution={16}
              object={object3}
              setObject={setObject3}
              objectSub={objectSub3}
              setObjectSub={setObjectSub3}
            />
            <InputRow
              label="Object 4"
              resolution={16}
              object={object4}
              setObject={setObject4}
              objectSub={objectSub4}
              setObjectSub={setObjectSub4}
            />
          </div>
          <div>
            <RadioGroup
              row
              onChange={(e) => {
                handleChangedRadio(e.target.value)
              }}
              value={radioOption}
              sx={{
                // justifyContent: 'center',
                marginLeft: '2rem',
                '& .MuiSvgIcon-root': {
                  color: `${colors.green[400]}`
                }
              }}
            >
              <FormControlLabel value="USER" control={<Radio />} label="User input" />
              <FormControlLabel value="DEFAUT" control={<Radio />} label={Str1} />
              <FormControlLabel value="ALLDEFAUT" control={<Radio />} label={Str2} />
              <FormControlLabel
                value="COMPATIBLE"
                control={<Radio />}
                label="Set compatible objects"
              />
              <FormControlLabel
                value="ALLCOMPATIBLE"
                control={<Radio />}
                label="Set compatible objects for all the remaining PDOs"
              />
              <FormControlLabel
                value="DONTMATCH"
                control={<Radio />}
                label="I know data doesn`t match , proceed..."
              />
            </RadioGroup>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '-0.5rem',
              right: '-1.1rem'
            }}
          >
            <Button1 onClick={handleApply}>Apply</Button1>
          </div>
        </section>
      </Box>
    </Dialog>
  )
}

function InputRow({ label, resolution, object, setObject, objectSub, setObjectSub }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
      <Input_AutoFormat
        callback={filterHex}
        placeholder={label}
        resolution={resolution}
        width="6rem"
        forceValueFromParent={object}
        center
        tellParentValueChanged={(value) => {
          setObject(value)
        }}
      />
      <Input_AutoFormat
        callback={filterHex}
        resolution={8}
        forceValueFromParent={objectSub}
        width="4rem"
        center
        tellParentValueChanged={(value) => {
          setObjectSub(value)
        }}
      />
    </div>
  )
}

//--------------------------------------------------------
function DecodeOnePDOmsg(objectIteration, setCurrentObjectIndex, setOpenPDOdectectedModal) {
  console.log('Inside DecodeOnePDOmsg++')
  if (DontBotherWithPDO_flag && !PDO_mapped[objectIteration.type][objectIteration.AxisID]) {
    // We write some dummy data just to get rid of PDO filling requirements
    var frameData = objectIteration.FrameData
    if (frameData.length % 2 != 0) {
      frameData =
        frameData.slice(0, frameData.length - 1) +
        '0' +
        frameData.slice(frameData.length - 1, frameData.length)
    }

    frameData = frameData.length * 4

    PDO_mapped[objectIteration.type][objectIteration.AxisID] = CompatibleMapping1[frameData]
  }
  if (!PDO_mapped[objectIteration.type][objectIteration.AxisID]) {
    setOpenPDOdectectedModal(true)
    return DelayTimeForPDO(objectIteration, setCurrentObjectIndex, setOpenPDOdectectedModal)
  }
  // Putting in the correct information for PDO

  MessagesDecoded_ArrayOfObjects[objectIteration.msgNr - 1] = DecodePDO(objectIteration)

  setCurrentObjectIndex((prev) => prev + 1)
}

function DelayTimeForPDO(objectIteration, setCurrentObjectIndex, setOpenPDOdectectedModal) {
  setTimeout(() => {
    DecodeOnePDOmsg(objectIteration, setCurrentObjectIndex, setOpenPDOdectectedModal)
  }, 400)
}
