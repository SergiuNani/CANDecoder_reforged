import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Box, IconButton, Button, Typography, Dialog } from '@mui/material'
import { Header, SwitchComponent, Button1 } from '../../components/SmallComponents'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

import { Input_AutoFormat } from '../../components/ForumsComponents'
import { filterDecimal, filterHex } from '../../functions/NumberConversion'

import { RegisterTooltip } from '../../components/Register'
import { PDO_mapped, GetObject, DecodePDO } from '../../functions/CANopenFunctions'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { SnackBarMessage } from '../../components/FloatingComponents'
import { DefaultPDOs, CompatibleMapping, CompatibleMapping1 } from '../../data/SmallData'
import { MessagesDecoded_ArrayOfObjects } from '../Decode_CAN_LOG'
export function DecodePDO_component({ MessagesDecoded_ArrayOfObjects, setPDOareDone }) {
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
        }, 1)
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

export function PDOdetectedModal({ open, onClose, objectIteration }) {
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
