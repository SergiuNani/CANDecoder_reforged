import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { whatPDOisObject, whatObjectValueMeans } from '../functions/CANopenFunctions'
import { Input_AutoFormat } from './ForumsComponents'
import { filterDecimal } from '../functions/NumberConversion'
import { verifyValidityOfMappingGroup, verifyRepetitiveGroup } from '../functions/CANopen'
import { tokens } from '../theme'
import { TooltipClickable } from '../components/SmallComponents'
import { AllCAN_MsgsExtracted_array } from '../scenes/Decode_CAN_LOG'
import { RegisterTooltip } from './Register'

export let groupedFilteredArray = []

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
                  : iteration.errorStatus == 'random'
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
  const groupType = groupData[0].GroupType
  function handleClick(e) {
    if (
      e.target.closest('.GroupHeader').parentElement.querySelector('.GroupBody').style.display ==
      'none'
    ) {
      e.target.closest('.GroupHeader').parentElement.querySelector('.GroupBody').style.display =
        'block'
      e.target.closest('.GroupHeader').querySelector('.IconExpand').style.transform =
        'rotate(180deg)'
      e.target.closest('.GroupHeader').style.background = `${colors.personal[200]}`
    } else {
      e.target.closest('.GroupHeader').parentElement.querySelector('.GroupBody').style.display =
        'none'
      e.target.closest('.GroupHeader').querySelector('.IconExpand').style.transform = 'rotate(0deg)'
      e.target.closest('.GroupHeader').style.background = `${colors.primary[300]}`
    }
  }

  return (
    <section>
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.3s ease-in-out',
          padding: '0.5rem',
          cursor: 'pointer',
          userSelect: 'none',
          width: '50%',
          background: `${colors.primary[300]}`,
          margin: '0.5rem  0 ',
          borderRadius: '0.5rem'
        }}
        onClick={handleClick}
        className="GroupHeader"
      >
        <p
          style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            justifySelf: 'center',
            color:
              groupType == 'Repetitive'
                ? colors.blue[500]
                : groupType == 'Mapping'
                ? colors.yellow[500]
                : colors.green[500]
          }}
        >
          {groupTitle}
        </p>
        <p
          style={{
            color: `${colors.grey[200]}`,
            marginLeft: '1rem',
            fontSize: '0.9rem'
          }}
        >
          - {groupSubTitle}
        </p>
        <p className="IconExpand" style={{ marginLeft: 'auto' }}>
          <ExpandMoreIcon />
        </p>
      </div>
      {/* GROUP BODY*/}
      <div
        style={{
          padding: '0px',
          borderBottom: `3px solid ${colors.personal[100]}`,
          display: 'none'
        }}
        className="GroupBody"
      >
        <div>
          {groupData.slice(1).map((iteration, index) => {
            return <TableROW key={index} iteration={iteration} />
          })}
        </div>
      </div>
    </section>
  )
}
export function CreateGroupedFilteredArray(
  allMessages,
  GroupingOptionsForMessages,
  setProgressBar
) {
  console.log('CreateGroupedFilteredArray -- only Once')
  groupedFilteredArray = []

  allMessages.forEach((oneMessage, index) => {
    var lastElementFromSortedArray = groupedFilteredArray[groupedFilteredArray.length - 1]
    var isLastElementArray = Array.isArray(lastElementFromSortedArray)

    if (GroupingOptionsForMessages.Mapping) {
      //Either Mapping or Modes -----------------------------------------------------

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
    if (GroupingOptionsForMessages.Repetitive) {
      var spamElementsArray = ['NMT_M', 'SYNC', '-', 'invalid']
      if (spamElementsArray.includes(oneMessage.type)) {
        if (isLastElementArray) {
          //Not done
          if (lastElementFromSortedArray[0].GroupType == 'Repetitive') {
            return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
          } else {
            // All 5 elements have the type included in the array
            var Next5ElemQualify = true
            for (let i = index + 1; i < index + 5; i++) {
              if (!allMessages[i] || !spamElementsArray.includes(allMessages[i].type)) {
                Next5ElemQualify = false
              }
            }
            if (Next5ElemQualify) {
              groupedFilteredArray.push([
                {
                  GroupType: 'Repetitive'
                }
              ])
              return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
            }
          }
        } else {
          // All 5 elements have the type included in the array
          var Next5ElemQualify = true
          for (let i = index + 1; i < index + 5; i++) {
            if (!allMessages[i] || !spamElementsArray.includes(allMessages[i].type)) {
              Next5ElemQualify = false
            }
          }
          if (Next5ElemQualify) {
            groupedFilteredArray.push([
              {
                GroupType: 'Repetitive'
              }
            ])
            return groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
          }
        }
      }
    }

    //Simply add the object to the array--------------------
    groupedFilteredArray.push(oneMessage)
    // var procent = (oneMessage.msgNr / allMessages.length) * 100
  })
  setProgressBar(false)
}

//-------------------ALL TYPES OF TABLE-------------------
export const DefaultTable = () => {
  console.log('TableComponent -- only Once')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      style={{
        position: 'relative',
        marginBottom: '20rem',
        width: '99.5%'
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
            title = group[0].GroupIndicator.concat(` - ${temp[1]}`)
            subtitle = temp[0].concat(' - ' + `${group.length - 1}` + 'msg(s)')
            errorStatus = temp[2]
          } else if (group[0].GroupType == 'Modes') {
            title = whatObjectValueMeans(
              '6060',
              group[0].GroupIndicator,
              8,
              'ignoreType',
              'ignoreAxis'
            )[0]
            subtitle = `AxisID: ${group[0].AxisID},  0x6060h = 0x${group[0].GroupIndicator}, ${
              group.length - 1
            }msg(s)`
          } else {
            //Repetitiveq
            title = 'Repetitive'
            subtitle = verifyRepetitiveGroup(group)
          }
          return (
            <TableRowGroup
              key={index}
              groupTitle={title}
              groupSubTitle={subtitle}
              groupData={group}
            />
          )
        } else {
          return <TableROW key={index} iteration={group} />
        }
      })}
    </Box>
  )
}
export const SimplifiedTable = () => {
  console.log('SimplifiedTable -- only Once')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const ROW = ({ obj }) => {
    return (
      <>
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
      </>
    )
  }

  function handleClick(event) {
    console.log('clicked')
    if (event.target.parentElement.querySelector('.Group').style.display == 'none') {
      event.target.parentElement.querySelector('.Group').style.display = 'block'
    } else event.target.parentElement.querySelector('.Group').style.display = 'none'
  }
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
                <div
                  style={{
                    color: colors.primary[400],
                    fontWeight: 700,
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                  onClick={handleClick}
                >
                  {`[${group[0].GroupType} -- AxisID: ${group[0].AxisID} -- ${group[0].GroupIndicator}] - `}
                </div>

                <div className="Group" style={{ display: 'none' }}>
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
                        <ROW obj={obj} />
                      </div>
                    )
                  })}
                </div>
              </Box>
            )
          } else {
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
                  <ROW obj={group} />
                </div>
              </Box>
            )
          }
        })}
      </Box>
    </Box>
  )
}
export const DebugTable = () => {
  console.log('DebugTable -- only Once')

  const [lineToScroll, setLineToScroll] = useState('')
  const scrollRef = useRef(null)

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

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
              <p> [{iteration[0]}]. </p>
              <p style={{ color: `${colors.yellow[500]}` }}> {iteration[1]}</p>
              <div style={{ color: `${colors.red[300]}`, display: 'flex' }}>
                {' '}
                {iteration[4].map((i, ii) => {
                  return (
                    <p
                      key={ii + 'abc'}
                      style={{
                        display: 'flex'
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
