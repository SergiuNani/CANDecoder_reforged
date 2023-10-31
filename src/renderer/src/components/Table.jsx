import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import {
  Box,
  IconButton,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  checkSDOforMapping,
  whatPDOisObject,
  whatObjectValueMeans
} from '../functions/CANopenFunctions'
import { tokens } from '../theme'
import { Mapping_objects_array, GroupingOptionsForMessages } from '../data/SmallData'
import { TooltipClickable, ProgressComponent } from '../components/SmallComponents'

import { RegisterTooltip } from './Register'

export let groupedFilteredArray = []
export const TableComponent1 = ({ filtereGroupeddArray }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <table
      style={{
        width: '100%',
        position: 'relative',
        color: `${colors.grey[100]}`,
        background: `${colors.blue[300]}`,
        fontFamily: 'Calibri',
        marginBottom: '20rem',
        fontSize: '1rem'
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
        {filtereGroupeddArray.map((iteration, index) => {
          var isRecieveTypeMessage = ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT'].includes(
            iteration.type
          )
          return (
            <tr
              key={index}
              style={{
                borderBottom: `1px solid ${colors.grey[300]}`,
                background: isRecieveTypeMessage ? `${colors.blue[200]}` : 'inherit',
                borderLeft: isRecieveTypeMessage ? `0.5rem solid ${colors.primary[400]}` : 'inherit'
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
  )
}

export function TempDisplayArray() {
  console.log('TempDisplayArray -- only Once')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box style={{ border: '3px solid grey' }}>
      <div>SIMPLIFIED: </div>
      <Box>
        {groupedFilteredArray.map((group, index) => {
          const groupisArray = Array.isArray(group)

          if (groupisArray) {
            return (
              <Box
                key={index}
                sx={{
                  border: `2px solid ${colors.green[300]}`,
                  margin: '1rem 0 2rem 1rem',
                  borderRadius: '1rem',
                  padding: '0.5rem'
                }}
              >
                <Box>
                  <div style={{ color: colors.primary[400], fontWeight: 700 }}>
                    {`[${group[0].GroupType} -- AxisID: ${group[0].AxisID} -- ${group[0].GroupIndicator}] - `}
                  </div>
                </Box>
                {group.slice(1).map((obj, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        marginBottom: '0.5rem',
                        borderBottom: '1px solid grey',
                        padding: '0.4rem',
                        fontSize: '1rem',
                        display: 'flex',
                        fontWeight: '540'
                      }}
                    >
                      <div style={{ color: colors.primary[600] }}>[{obj.msgNr}] - </div>
                      <div style={{ color: colors.green[100] }}>[{obj.AxisID}] - </div>
                      <div style={{ color: colors.blue[500] }}>[{obj.CobID}] - </div>
                      <div style={{ color: colors.primary[600] }}>[{obj.type}] - </div>
                      <div style={{ color: colors.blue[500] }}>[{obj.FrameData}] - </div>
                      <div style={{ color: colors.green[100] }}>[{obj.Object}] - </div>
                      <div style={{ color: colors.blue[500] }}>[{obj.ObjectName}] - </div>
                      <div style={{ color: colors.primary[600] }}>[{obj.Data}] - </div>
                      <div
                        style={{
                          color: obj.errorStatus === 'error' ? colors.red[600] : colors.yellow[500],
                          fontWeight: 700
                        }}
                      >
                        [{obj.Interpretation}]
                      </div>
                    </div>
                  )
                })}
              </Box>
            )
          } else {
            const obj = group
            return (
              <Box
                key={index}
                style={{
                  marginBottom: '0.5rem',
                  borderBottom: '1px solid grey',
                  padding: '0.4rem',
                  fontSize: '1rem',
                  fontWeight: '540'
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ color: colors.primary[600] }}>[{obj.msgNr}] - </div>
                  <div style={{ color: colors.green[100] }}>[{obj.AxisID}] - </div>
                  <div style={{ color: colors.blue[500] }}>[{obj.CobID}] - </div>
                  <div style={{ color: colors.primary[600] }}>[{obj.type}] - </div>
                  <div style={{ color: colors.blue[500] }}>[{obj.FrameData}] - </div>
                  <div style={{ color: colors.green[100] }}>[{obj.Object}] - </div>
                  <div style={{ color: colors.blue[500] }}>[{obj.ObjectName}] - </div>
                  <div style={{ color: colors.primary[600] }}>[{obj.Data}] - </div>
                  <div
                    style={{
                      color: obj.errorStatus === 'error' ? colors.red[600] : colors.yellow[500],
                      fontWeight: 700
                    }}
                  >
                    [{obj.Interpretation}]
                  </div>
                </div>
              </Box>
            )
          }
        })}
      </Box>
    </Box>
  )
}

export const TableComponent = () => {
  console.log('TableComponent -- only Once')
  // groupedFilteredArray = arrayOfObjects
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // mountStartTime = performance.now() - mountStartTime
  // console.log(`SS Component mounted in ${mountDuration}ms`)
  return (
    <Box
      style={{
        position: 'relative',
        marginBottom: '20rem',
        width: '99.5%'

        // overflowX: 'hidden'
      }}
    >
      <table
        style={{
          width: '99.5%',
          fontWeight: '700',
          position: 'sticky',
          top: '2.5rem',
          background: `${colors.primary[300]}`,
          zIndex: 1,
          marginLeft: '0.5rem',
          fontSize: '1rem'
        }}
      >
        <thead>
          {/* Table ROW FOR THEAD---------------------------- */}
          <tr>
            <th
              style={{
                padding: '0.5rem',
                width: '2.5rem'
              }}
            >
              NR
            </th>
            <th style={{ width: '13rem' }}>Original Message</th>
            <th style={{ width: '4.5rem' }}>Type</th>
            <th style={{ width: '2rem' }}>AxisID</th>
            <th style={{ width: '2rem' }}>CS</th>
            <th style={{ width: '8rem' }}>Object</th>
            <th style={{ width: '13rem' }}>Object Name</th>
            <th style={{ width: '7rem' }}>Data</th>
            <th style={{ width: '28rem' }}>Interpretation</th>
          </tr>
        </thead>
      </table>

      {groupedFilteredArray.map((group, index) => {
        //-------------------Main Grouping Process-------------------
        var groupisArray = Array.isArray(group)
        if (groupisArray) {
          let title = ''
          let subtitle = ''
          let errorStatus = ''
          if (group[0].GroupType == 'Mapping') {
            var temp = verifyValidityOfMappingGroup(group)
            title = group[0].GroupIndicator.concat(' - ' + temp[1])
            subtitle = temp[0].concat(' - ' + `${group.length - 1}` + ' messages')
            errorStatus = temp[2]
          } else if (group[0].GroupType == 'Modes') {
            title = whatObjectValueMeans('6060', group[0].GroupIndicator, 8)[0]
            subtitle = `AxisID: ${group[0].AxisID},  0x6060h = 0x${group[0].GroupIndicator}, ${
              group.length - 1
            }messages `
          }
          return (
            <TableRowGroup
              key={index}
              groupTitle={title}
              groupSubTitle={subtitle}
              groupData={group}
              border={
                errorStatus == 'error'
                  ? `2px solid ${colors.red[500]}`
                  : `2px solid ${colors.green[300]}`
              }
              widthHeader={'50%'}
            />
          )
        } else {
          return <TableROW key={index} iteration={group} />
        }
      })}
    </Box>
  )
}

const TableROW = ({ iteration }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var isRecieveTypeMessage = ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT'].includes(
    iteration.type
  )
  return (
    <table
      style={{
        width: '100%',
        position: 'relative',
        color: `${colors.grey[100]}`,
        background: `${colors.blue[300]}`,
        fontFamily: 'Calibri',
        fontSize: '1rem'
      }}
    >
      <thead>
        <tr
          style={{
            borderBottom: `1px solid ${colors.grey[300]}`,
            background: isRecieveTypeMessage ? `${colors.blue[200]}` : 'inherit',
            borderLeft: isRecieveTypeMessage ? `0.5rem solid ${colors.primary[400]}` : 'inherit'
          }}
        >
          <td
            style={{
              textAlign: 'center',
              padding: '0.7rem 0',
              width: '2.5rem'
            }}
          >
            {iteration.msgNr}
          </td>
          <td style={{ textAlign: 'center', cursor: 'pointer', width: '12rem' }}>
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
              fontWeight: '600',
              width: '4rem'
            }}
          >
            {iteration.type}
          </td>
          <td
            style={{
              textAlign: 'center',
              color: `${colors.personal[100]}`,
              fontWeight: '700',
              width: '2rem'
            }}
          >
            {iteration.AxisID}
          </td>
          <td
            style={{
              textAlign: 'center',
              width: '2rem'
            }}
          >
            {iteration.CS}
          </td>
          <td
            style={{
              textAlign: 'center',
              color: `${colors.yellow[100]}`,
              fontWeight: '600',
              width: '8rem'
            }}
          >
            {iteration.Object}
          </td>
          <td
            style={{
              textAlign: 'center',
              // maxWidth: '10rem',
              overflowY: 'auto',
              width: '11rem'
            }}
          >
            {iteration.ObjectName}
          </td>
          <td
            style={{
              textAlign: 'center',
              color: `${colors.green[100]}`,
              fontWeight: '700',
              width: '7rem'
            }}
          >
            <RegisterTooltip objects={iteration.Object} objectData={iteration.Data}>
              {iteration.Data}
            </RegisterTooltip>
          </td>
          <td
            style={{
              textAlign: 'center',
              width: '25rem',
              minWidth: '15rem',

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
      </thead>
    </table>
  )
}

const TableRowGroup = ({ groupTitle, groupSubTitle, groupData, border, widthHeader }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [expanded, setExpanded] = useState(false)

  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion expanded={expanded} onChange={toggleAccordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          border: border ? border : null,
          border: null,
          background: `${colors.primary[300]}`,
          paddingLeft: '0.5rem',
          borderRadius: '0.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          fontSize: '1rem',
          margin: '0.5rem 0',
          padding: '0px',
          width: widthHeader ? widthHeader : '50%',

          '& .css-o4b71y-MuiAccordionSummary-content': {
            margin: '0 !important'
          }
        }}
      >
        <div
          style={{
            color: colors.yellow[500],
            fontSize: '1.2rem',
            textAlign: 'center',
            justifySelf: 'center',
            padding: 0
          }}
        >
          {groupTitle}
        </div>
        <p
          style={{
            color: `${colors.grey[200]}`,
            marginLeft: '1rem'
          }}
        >
          - {groupSubTitle}
        </p>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          padding: '0px',
          borderBottom: `3px solid ${colors.blue[100]}`
        }}
      >
        <div>
          {groupData.slice(1).map((iteration, index) => {
            return <TableROW key={index} iteration={iteration} />
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export function CreateGroupedFilteredArray(
  allMessages,
  GroupingOptionsForMessages,
  setProgressBar
) {
  console.log('CreateGroupedFilteredArray -- only Once')
  groupedFilteredArray = []

  allMessages.forEach((oneMessage) => {
    if (GroupingOptionsForMessages.Mapping) {
      //Either Mapping or Modes -----------------------------------------------------
      var lastElementFromSortedArray = groupedFilteredArray[groupedFilteredArray.length - 1]
      var isLastElementArray = Array.isArray(lastElementFromSortedArray)
      var isObjectRelatedToMapping = whatPDOisObject(oneMessage.Object)

      if (isObjectRelatedToMapping && oneMessage.type.slice(2) == 'SDO') {
        if (
          isLastElementArray &&
          lastElementFromSortedArray[0].GroupType == 'Mapping' &&
          lastElementFromSortedArray[0].AxisID == oneMessage.AxisID &&
          lastElementFromSortedArray[0].GroupIndicator == isObjectRelatedToMapping
        ) {
          // Same Group Type, AxisID, and Group Indicator
          return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
        } else {
          // Different Group Type, AxisID, or Group Indicator
          groupedFilteredArray.push([
            {
              GroupType: 'Mapping',
              AxisID: oneMessage.AxisID,
              GroupIndicator: isObjectRelatedToMapping
            }
          ])
          return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
        }
      }
    }
    if (GroupingOptionsForMessages.Modes) {
      var lastElementFromSortedArray = groupedFilteredArray[groupedFilteredArray.length - 1]
      var isLastElementArray = Array.isArray(lastElementFromSortedArray)
      var objects = oneMessage.Object.split(' / ').indexOf('#x6060')
      var ObjectValue = oneMessage.Data.split(' / ')[objects]
      if (
        objects != -1 &&
        oneMessage.errorStatus != 'error' &&
        ((oneMessage.type == 'R_SDO' && oneMessage.CS.slice(0, 1) == '2') ||
          oneMessage.type.slice(0, 4) == 'RPDO')
      ) {
        if (
          isLastElementArray &&
          lastElementFromSortedArray[0].GroupType == 'Modes' &&
          lastElementFromSortedArray[0].AxisID == oneMessage.AxisID &&
          lastElementFromSortedArray[0].GroupIndicator == ObjectValue
        ) {
          //Last Element is an array
          return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
        } else {
          groupedFilteredArray.push([
            {
              GroupType: 'Modes',
              AxisID: oneMessage.AxisID,
              GroupIndicator: ObjectValue
            }
          ])
          return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
        }
      } else {
        //The remaining messages will try to fit into a group
        if (
          isLastElementArray &&
          lastElementFromSortedArray[0].GroupType == 'Modes' &&
          lastElementFromSortedArray[0].AxisID == oneMessage.AxisID
        ) {
          return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
        }
      }
    }

    //Simply add the object to the array--------------------
    groupedFilteredArray.push(oneMessage)
    // var procent = (oneMessage.msgNr / allMessages.length) * 100
  })
  setProgressBar(false)
}

function verifyValidityOfMappingGroup(group) {
  var returnText = ''
  var errorStatus = 'good'
  var enableCobID = []
  var enableMapping = []
  var orderMapping = []
  var currectCOBID
  var currentMapping = []

  group.slice(1).forEach((oneMessage) => {
    if (oneMessage.errorStatus == 'error') {
      errorStatus = 'error'
    }
    var InterpretationInfo = oneMessage.Interpretation.split(' ')
    if (['Disable', 'Enable'].includes(InterpretationInfo[0])) {
      enableCobID[enableCobID.length] = InterpretationInfo[0]
    } else if (InterpretationInfo.slice(1, -1).join(' ') == '-Nr of mapped objects :') {
      enableMapping[enableMapping.length] = InterpretationInfo[InterpretationInfo.length - 1]
    } else if (
      InterpretationInfo[0][0] == '[' &&
      InterpretationInfo[0][InterpretationInfo[0].length - 1] == ']'
    ) {
      orderMapping[orderMapping.length] = InterpretationInfo[0][7]
      currentMapping[currentMapping.length] = InterpretationInfo[2]
    }
    if (
      InterpretationInfo[0][0] == '[' &&
      InterpretationInfo[0][InterpretationInfo[0].length - 1] == ']'
    ) {
      currectCOBID = InterpretationInfo[0].slice(1, 5)
    }
  })

  if (errorStatus == 'error') {
    returnText = returnText.concat('Error: One of the messages in the group has an error')
  } else {
    if (enableCobID.slice(-2).toString() == ['Disable', 'Enable'].toString()) {
      //Check if the Disabling and Enabling was done in the correct order
      var mappingObjsOrder = Math.max(...orderMapping.map(Number))
      if (
        mappingObjsOrder != parseInt(enableMapping[enableMapping.length - 1]) ||
        orderMapping.length != parseInt(enableMapping[enableMapping.length - 1])
      ) {
        returnText = returnText.concat('Warning: Either missing or wrong number of mapped objects')
        errorStatus = 'error'
      } else {
        returnText = returnText.concat(currentMapping.join(' / '))
      }
    } else {
      returnText = returnText.concat('Warning: missing Disable/Enable frames of the COBID ')
      errorStatus = 'error'
    }
  }

  return [returnText, currectCOBID, errorStatus]
}
