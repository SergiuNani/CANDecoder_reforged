import React, { useState, useRef, useEffect, useContext, memo, useMemo } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { whatPDOisObject, whatObjectValueMeans } from '../functions/CANopenFunctions'
import { Input_AutoFormat } from './ForumsComponents'
import { filterDecimal, addSpacesOfTwo } from '../functions/NumberConversion'
import { verifyValidityOfMappingGroup, verifyRepetitiveGroup } from '../functions/CANopen'
import { tokens } from '../theme'
import { TooltipClickable, Button4 } from '../components/SmallComponents'
import {
  AllCAN_MsgsExtracted_array,
  filteredMessages_auxGlobal,
  DecodedTableOptionsContext,
  Decode_CAN_LOG_WindowContext
} from '../scenes/Decode_CAN_LOG'
import { RegisterTooltip } from './Register'

export let groupedFilteredArray = []

export const TableROW = ({ iteration }) => {
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
        fontSize: '0.9rem'
      }}
    >
      <thead>
        <tr
          style={{
            borderBottom: `1px solid ${colors.grey[300]}`,
            background: isRecieveTypeMessage ? `${colors.blue[200]}` : 'inherit',
            borderLeft: isRecieveTypeMessage ? `0.3rem solid ${colors.primary[400]}` : 'inherit'
          }}
        >
          <td
            style={{
              textAlign: 'center',
              padding: '0.3rem 0',
              width: '2.5rem'
            }}
            className="msgNrClass"
          >
            {iteration.msgNr}
          </td>
          <td style={{ textAlign: 'center', cursor: 'pointer', width: '12rem' }}>
            <TooltipClickable title={iteration.OriginalMessage} arrow placement="top">
              <p>
                {iteration.CobID} - {addSpacesOfTwo(iteration.FrameData)}
              </p>
            </TooltipClickable>
          </td>
          <td
            style={{
              textAlign: 'center',
              color: `${colors.blue[500]}`,
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

export const TableROW_simple = ({ obj }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  for (const prop in obj) {
    if (obj[prop] === '-') {
      obj[prop] = ''
    }
  }

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${colors.grey[400]}`
      }}
    >
      <p style={{ color: colors.primary[600], minWidth: '2rem', textAlign: 'center' }}>
        {obj.msgNr}{' '}
      </p>
      <p style={{ color: colors.primary[400], minWidth: '3rem' }}> {` - [${obj.AxisID}] - `} </p>
      <p style={{ color: colors.blue[600], minWidth: '15rem' }}>
        `{obj.CobID} - {obj.FrameData}`
      </p>
      <p
        style={{ color: colors.yellow[300], fontWeight: 700, minWidth: '12rem' }}
      >{` -  ${obj.Object} -`}</p>
      <p
        style={{ color: colors.personal[100], fontWeight: 700, minWidth: '12rem' }}
      >{` ${obj.Data} `}</p>
      <p
        style={{
          color: obj.errorStatus === 'error' ? colors.red[600] : colors.yellow[500],
          fontWeight: 700,
          minWidth: '15rem'
        }}
      >
        {obj.Interpretation}
      </p>
    </section>
  )
}
const TableRowGroup = ({ groupTitle, groupSubTitle, groupData, errorStatus }) => {
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
                ? colors.personal[100]
                : groupType == 'Mapping'
                ? colors.yellow[500]
                : colors.blue[500]
          }}
        >
          {groupTitle}
        </p>
        <p
          style={{
            marginLeft: '1rem',
            fontSize: '0.9rem',
            color:
              errorStatus == 'error'
                ? colors.red[500]
                : errorStatus == 'warning'
                ? colors.grey[200]
                : colors.green[500]
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
    //GROUPING-------------------------------------------------
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
  var {
    LogDisplayRange,
    LogDisplayRange_Inf,
    LogDisplayRange_Sup,
    FilteredLogLenght,
    FullLogLength,
    CutTable_Inf,
    CutTable_Sup,
    auxTable
  } = useContext(DecodedTableOptionsContext)
  var { setShortcutToDecodeMessages, shortcutToDecodeMessages_whoCalled } = useContext(
    Decode_CAN_LOG_WindowContext
  )

  function LoadPrevMessagesButton() {
    function handleLoadPrev() {
      console.log('LoadPrevMessagesButton')
      LogDisplayRange_Inf.current = aux_inf
      LogDisplayRange_Sup.current = aux_sup
      shortcutToDecodeMessages_whoCalled.current = 'NextPrevMsgsButtons'
      setShortcutToDecodeMessages((prev) => !prev)
    }
    var aux_sup = null
    var aux_inf = null
    var text = ''
    if (LogDisplayRange_Inf.current > 0) {
      //There are still messages to load backwards

      if (LogDisplayRange_Sup.current - LogDisplayRange_Inf.current < LogDisplayRange.current) {
        aux_inf = LogDisplayRange_Inf.current - LogDisplayRange.current
        aux_sup = LogDisplayRange_Inf.current
      } else {
        aux_inf = LogDisplayRange_Inf.current - LogDisplayRange.current
        aux_sup = LogDisplayRange_Sup.current - LogDisplayRange.current
      }
    }
    if (
      aux_sup &&
      aux_inf != null &&
      filteredMessages_auxGlobal[aux_inf] &&
      filteredMessages_auxGlobal[aux_sup]
    ) {
      text = `Load previous ${LogDisplayRange.current} frames:  [Range: ${
        filteredMessages_auxGlobal[aux_inf].msgNr
      } to ${filteredMessages_auxGlobal[aux_sup - 1].msgNr}] [Total: ${FilteredLogLenght.current}]`
    }

    return aux_sup ? (
      <div style={{ textAlign: 'center' }}>
        <Button4 onClick={handleLoadPrev}>{text}</Button4>
      </div>
    ) : null
  }
  const LoadNextMessagesButton = () => {
    function handleLoadNext() {
      console.log('LoadPrevMessagesButton')
      LogDisplayRange_Inf.current = aux_inf - 1
      LogDisplayRange_Sup.current = aux_sup
      shortcutToDecodeMessages_whoCalled.current = 'NextPrevMsgsButtons'
      setShortcutToDecodeMessages((prev) => !prev)
    }
    var aux_sup = null
    var aux_inf = null
    var text
    if (FilteredLogLenght.current - LogDisplayRange_Sup.current > 0) {
      //There are still messages to display next
      if (FilteredLogLenght.current - LogDisplayRange_Sup.current - LogDisplayRange.current > 0) {
        //we can display an enitre range of messages
        aux_inf = LogDisplayRange_Sup.current + 1
        aux_sup = LogDisplayRange_Sup.current + LogDisplayRange.current
      } else if (
        FilteredLogLenght.current - LogDisplayRange_Sup.current - LogDisplayRange.current <=
        0
      ) {
        //we can display only a part of the range
        aux_inf = LogDisplayRange_Sup.current + 1
        aux_sup = FilteredLogLenght.current
      }
    }
    if (
      aux_sup &&
      aux_inf &&
      filteredMessages_auxGlobal[aux_inf - 1] &&
      filteredMessages_auxGlobal[aux_sup - 1]
    ) {
      text = `Load next ${LogDisplayRange.current} frames: [Range: ${
        filteredMessages_auxGlobal[aux_inf - 1].msgNr
      } to ${filteredMessages_auxGlobal[aux_sup - 1].msgNr}] [Total: ${FilteredLogLenght.current}]`
    }

    return aux_inf ? (
      <div style={{ textAlign: 'center' }}>
        <Button4 onClick={handleLoadNext}>{text}</Button4>
      </div>
    ) : null
  }

  const Table_Memo = useMemo(() => {
    console.log('Table_Memo')
    return (
      <Box
        style={{
          position: 'relative',
          marginBottom: '20rem',
          width: '99.5%'
        }}
      >
        <LoadPrevMessagesButton />

        <table
          style={{
            width: '99.5%',
            fontWeight: '700',
            position: 'sticky',
            top: '3rem',
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
              //Repetitive
              title = 'Repetitive'
              subtitle = verifyRepetitiveGroup(group)
            }
            return (
              <TableRowGroup
                key={index}
                groupTitle={title}
                groupSubTitle={subtitle}
                groupData={group}
                errorStatus={errorStatus}
              />
            )
          } else {
            return <TableROW key={index} iteration={group} />
          }
        })}

        <LoadNextMessagesButton />
      </Box>
    )
  }, [])

  return <section>{Table_Memo}</section>
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
