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
import { checkSDOforMapping, whatPDOisObject } from '../functions/CANopenFunctions'
import { tokens } from '../theme'
import { Mapping_objects_array, GroupingOptionsForMessages } from '../data/SmallData'
import { TooltipClickable } from '../components/SmallComponents'

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
    <Box
      style={{
        border: `3px solid grey`
      }}
    >
      <div>SIMPLIFIED: </div>
      <Box>
        {groupedFilteredArray.map((group, index) => {
          var groupisArray = Array.isArray(group)
          if (groupisArray) {
            //ARRAY DETECTED
            return (
              <Box key={index} sx={{ marginLeft: '2rem', border: `1px solid yellow` }}>
                <Box>
                  <div style={{ color: `${colors.primary[400]}`, fontWeight: '700' }}>
                    {' '}
                    [`{group[0].GroupType} -- AxisID: {group[0].AxisID} -- {group[0].GroupIndicator}
                    `] -{' '}
                  </div>
                </Box>
                {group.slice(1).map((obj, idx) => {
                  let jsxElements = []
                  let errorStatus = obj.errorStatus

                  let msgNr = (
                    <div key={1} style={{ color: `${colors.blue[400]}` }}>
                      {' '}
                      [{obj.msgNr}] -{' '}
                    </div>
                  )
                  jsxElements.push(msgNr)
                  let AxisID = (
                    <div key={2} style={{ color: `${colors.green[100]}` }}>
                      {' '}
                      [{obj.AxisID}] -{' '}
                    </div>
                  )
                  jsxElements.push(AxisID)

                  let CobID = (
                    <div key={3} style={{ color: `${colors.yellow[500]}` }}>
                      {' '}
                      [{obj.CobID}] -{' '}
                    </div>
                  )
                  jsxElements.push(CobID)

                  let type = (
                    <div key={4} style={{ color: `${colors.grey[100]}` }}>
                      {' '}
                      [{obj.type}] -{' '}
                    </div>
                  )
                  jsxElements.push(type)

                  let FrameData = (
                    <div key={5} style={{ color: `${colors.yellow[100]}` }}>
                      {' '}
                      [{obj.FrameData}] -{' '}
                    </div>
                  )
                  jsxElements.push(FrameData)

                  let Object = (
                    <div key={6} style={{ color: `${colors.green[100]}`, fontWeight: 700 }}>
                      {' '}
                      [{obj.Object}] -{' '}
                    </div>
                  )
                  jsxElements.push(Object)

                  let ObjectName = (
                    <div key={7} style={{ color: `${colors.blue[500]}` }}>
                      {' '}
                      [{obj.ObjectName}] -{' '}
                    </div>
                  )
                  jsxElements.push(ObjectName)

                  let Data = (
                    <div key={8} style={{ color: `${colors.primary[600]}` }}>
                      {' '}
                      [{obj.Data}] -{' '}
                    </div>
                  )
                  jsxElements.push(Data)

                  let Interpretation = (
                    <div
                      key={9}
                      style={{
                        color:
                          errorStatus == 'error' ? `${colors.red[600]}` : `${colors.yellow[500]}`,
                        fontWeight: 700
                      }}
                    >
                      [{obj.Interpretation}]
                    </div>
                  )
                  jsxElements.push(Interpretation)
                  return (
                    <div
                      key={idx}
                      style={{
                        marginBottom: '0.5rem',
                        borderBottom: '1px solid grey',
                        padding: '0.4rem',
                        fontSize: '1rem',
                        display: 'flex'
                      }}
                    >
                      {jsxElements}
                    </div>
                  )
                })}
              </Box>
            )
          } else {
            let jsxElements = []
            let obj = group
            let idx = index
            let errorStatus = obj.errorStatus

            let msgNr = (
              <div key={1} style={{ color: `${colors.blue[400]}` }}>
                {' '}
                [{obj.msgNr}] -{' '}
              </div>
            )
            jsxElements.push(msgNr)
            let AxisID = (
              <div key={2} style={{ color: `${colors.green[100]}` }}>
                {' '}
                [{obj.AxisID}] -{' '}
              </div>
            )
            jsxElements.push(AxisID)

            let CobID = (
              <div key={3} style={{ color: `${colors.yellow[500]}` }}>
                {' '}
                [{obj.CobID}] -{' '}
              </div>
            )
            jsxElements.push(CobID)

            let type = (
              <div key={4} style={{ color: `${colors.grey[100]}` }}>
                {' '}
                [{obj.type}] -{' '}
              </div>
            )
            jsxElements.push(type)

            let FrameData = (
              <div key={5} style={{ color: `${colors.blue[400]}` }}>
                {' '}
                [{obj.FrameData}] -{' '}
              </div>
            )
            jsxElements.push(FrameData)

            let Object = (
              <div key={6} style={{ color: `${colors.green[100]}`, fontWeight: 700 }}>
                {' '}
                [{obj.Object}] -{' '}
              </div>
            )
            jsxElements.push(Object)

            let ObjectName = (
              <div key={7} style={{ color: `${colors.blue[500]}` }}>
                {' '}
                [{obj.ObjectName}] -{' '}
              </div>
            )
            jsxElements.push(ObjectName)

            let Data = (
              <div key={8} style={{ color: `${colors.primary[600]}` }}>
                {' '}
                [{obj.Data}] -{' '}
              </div>
            )
            jsxElements.push(Data)

            let Interpretation = (
              <div
                key={9}
                style={{
                  color: errorStatus === 'error' ? `${colors.red[600]}` : `${colors.yellow[500]}`,
                  fontWeight: 700
                }}
              >
                [{obj.Interpretation}]
              </div>
            )
            jsxElements.push(Interpretation)

            return (
              <Box
                key={index}
                style={{
                  marginBottom: '0.5rem',
                  borderBottom: '1px solid grey',
                  padding: '0.4rem',
                  fontSize: '1rem'
                }}
              >
                <div
                  style={{
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid grey',
                    padding: '0.4rem',
                    fontSize: '1rem',
                    display: 'flex'
                  }}
                >
                  {jsxElements}
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
        if (GroupingOptionsForMessages.Axis) {
          //Grouping by AxisID
          var stats = GroupingStatistics(group)
          if (
            (group.length == 2 || group.length == 3) &&
            (group[0].Axis == '-' || group[0].Axis == 'invalid')
          ) {
            //Disbale grouping for invalid and empty messages
            return group.slice(1).map((it, idx) => <TableROW key={idx} iteration={it} />)
          } else {
            return (
              <TableRowGroup
                groupData={group}
                key={index}
                groupTitle={`AxisID: ${group[0].Axis}`}
                groupSubTitle={`${stats[0]} messages`} // first object is the obj describing the group
                widthHeader={'60%'}
              />
            )
          }
        } else if (
          Array.isArray(group) &&
          (GroupingOptionsForMessages.Mapping || GroupingOptionsForMessages.Modes)
        ) {
          //Grouping by Mapping
          if (group[0].Type.slice(1, 4) == 'PDO') {
            var InterpretMapping = verifyValidityOfMappingGroup(group)
            var cobID = InterpretMapping[0].slice(0, 6)
            return (
              <TableRowGroup
                key={index}
                groupTitle={`${cobID} - ${group[0].Type}`}
                groupSubTitle={`${InterpretMapping[0].slice(6)} - ${group.length - 1} messages`}
                groupData={group}
                border={
                  InterpretMapping[1] == 'error'
                    ? `2px solid ${colors.red[500]}`
                    : `2px solid ${colors.green[500]}`
                }
              />
            )
          } else if (group[0].Type == 'Modes') {
            //Grouping by Modes

            return (
              <TableRowGroup
                key={index}
                groupTitle={`Modes of Operation: ${group[0].Mode}`}
                groupSubTitle={`${group.length - 1} messages`}
                groupData={group}
                border={`2px solid ${colors.green[500]}`}
              />
            )
          }
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
          padding: '0px'
        }}
      >
        <div>
          {groupData.map((iteration, index) => {
            if (index != 0) {
              if (Array.isArray(iteration)) {
                //Encountered mapping array
                var InterpretMapping = verifyValidityOfMappingGroup(iteration)
                var cobID = InterpretMapping[0].slice(0, 6)
                return (
                  <TableRowGroup
                    key={index}
                    groupTitle={`${cobID} - ${iteration[0].Type}`}
                    groupSubTitle={`${InterpretMapping[0].slice(6)} - ${
                      iteration.length - 1
                    } messages`}
                    groupData={iteration}
                    border={
                      InterpretMapping[1] == 'error'
                        ? `2px solid ${colors.red[500]}`
                        : `2px solid ${colors.green[500]}`
                    }
                  />
                )
              } else {
                return <TableROW key={index} iteration={iteration} />
              }
            }
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export function CreateGroupedFilteredArray(allMessages, GroupingOptionsForMessages) {
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
      console.log('🚀 ~ file: Table.jsx:787 ~ allMessages.forEach ~ ObjectValue:', ObjectValue)
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
  })
}

function GroupingStatistics(group) {
  var MsgsLength = 0

  group.forEach((oneEl) => {
    if (Array.isArray(oneEl)) {
      MsgsLength += oneEl.length - 1
    } else {
      MsgsLength++
    }
  })
  MsgsLength-- //Because the first object is the object describing the group
  return [MsgsLength]
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
      currectCOBID = InterpretationInfo[0].slice(1, 5)
      currentMapping[currentMapping.length] = InterpretationInfo[2]
    }
  })

  if (errorStatus == 'error') {
    returnText = returnText.concat('Error : One of the messages in the group has an error')
  } else {
    if (enableCobID.slice(-2).toString() == ['Disable', 'Enable'].toString()) {
      //Check if the Disabling and Enabling was done in the correct order
      var mappingObjsOrder = Math.max(...orderMapping.map(Number))
      if (
        mappingObjsOrder != parseInt(enableMapping[enableMapping.length - 1]) ||
        orderMapping.length != parseInt(enableMapping[enableMapping.length - 1])
      ) {
        returnText = returnText.concat('Error: Length of the mapped objects is not correct ')
        errorStatus = 'error'
      } else {
        returnText = returnText.concat(`[${currectCOBID}] - ` + currentMapping.join(' / '))
      }
    } else {
      returnText = returnText.concat('Error: we are missing Disable/Enable the COBID ')
      errorStatus = 'error'
    }
  }

  return [returnText, errorStatus]
}
