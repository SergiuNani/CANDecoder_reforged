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

import { tokens } from '../theme'

import { TooltipClickable } from '../components/SmallComponents'

import { RegisterTooltip } from './Register'

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

const arrayOfObjects = [
  [
    {
      AxisID: '-',
      CS: '-',
      CobID: 'Empty',
      Data: '-',
      FrameData: 'Line',
      Interpretation: '-',
      Object: '-',
      ObjectName: '-',
      OriginalMessage: '-',
      errorStatus: '-',
      msgNr: 1,
      type: '-'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation: '[201h][1] - #x6040 - Controlword',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation: '-',
      Object: '#x6040',
      ObjectName: 'Controlword',
      OriginalMessage: '201 5555555',
      errorStatus: 'good',
      msgNr: 3,
      type: 'RPDO1'
    }
  ]
]

export const TableComponent = ({ filtereGroupeddArray }) => {
  filtereGroupeddArray = arrayOfObjects
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
        {filtereGroupeddArray.map((group, index) => {
          return <TableRowGroup groupData={group} key={index} groupTitle="AHHHHHHHHHHHH" />
        })}
      </tbody>
    </table>
  )
}

const TableROW = ({ iteration }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  var isRecieveTypeMessage = ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT'].includes(
    iteration.type
  )
  return (
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
}

const AccordionComponent = ({ title, children }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Accordion defaultExpanded sx={{ background: `${colors.primary[300]}`, width: '100%' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          color: colors.yellow[500],
          fontSize: '1.2rem',
          // mb: '1rem',
          borderBottom: `1px solid ${colors.primary[400]}`,
          '&.Mui-expanded': {
            minHeight: '3rem !important'
          },
          '& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
            margin: '0 !important'
          }
        }}
      >
        {title}
      </AccordionSummary>
      {children}
    </Accordion>
  )
}
const TableRowGroup = ({ groupTitle, groupData }) => {
  const theme = useTheme()
  const colors = theme.palette.primary

  const [expanded, setExpanded] = useState(false)

  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion expanded={expanded} onChange={toggleAccordion} sx={{ width: '100%' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          color: colors.yellow[500],
          fontSize: '1.2rem',
          borderBottom: `1px solid ${colors.primary[400]}`
        }}
      >
        {groupTitle}
      </AccordionSummary>
      <AccordionDetails>
        <table
          style={{
            width: '100%',
            color: colors.grey[100],
            background: colors.blue[300],
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
              background: colors.primary[300],
              zIndex: 1
            }}
          >
            <tr>
              <th style={{ padding: '0.5rem' }}>NR</th>
              {/* Define table header columns */}
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            {groupData.map((iteration, index) => (
              <TableROW key={index} iteration={iteration} />
            ))}
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  )
}
