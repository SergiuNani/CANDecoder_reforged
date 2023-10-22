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
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation: '[201h][1] - #x6040 - Controlword',
      Object: '#x1600_01',
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation: '[201h][1] - #x6040 - Controlword',
      Object: '#x1600_01',
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quae!',
      Object: '#x1600_01',
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
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
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    },
    {
      AxisID: 1,
      CS: 1,
      CobID: '201',
      Data: '5555',
      FrameData: '5555555',
      Interpretation:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
      Object: '#x6040',
      ObjectName: 'Controlword ufheaiuf fehaiuofh',
      OriginalMessage: '201 5555555',
      errorStatus: 'error',
      msgNr: 3,
      type: 'RPDO1'
    }
  ],
  [
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation: '[201h][1] - #x6040 - Controlword',
      Object: '#x1600_01',
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    }
  ],
  [
    {
      AxisID: 2,
      CS: '23',
      CobID: '602',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation: '[201h][1] - #x6040 - Controlword lorem ipsum dolor sit amet consectetur.',
      Object: '#x1600_01 / #x1600_01 / #x1600_01',
      ObjectName: '1st mapped object Lorem ipsum dolor sit amet consectetur.',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    }
  ],
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
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '0000020012345678',
      Interpretation: 'EMCY : 0000 - Error Reset or No Error',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 0000 0200 123456789',
      errorStatus: 'error',
      msgNr: 2,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '0010020012345678',
      Interpretation:
        'EMCY : 1000 - Generic Error; sent when a communication error occurs on CAN (object 2000h bit0=1; usually followed by EMCY code 0x7500',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 0010 0200 123456789',
      errorStatus: 'error',
      msgNr: 3,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '1023023412345678',
      Interpretation: 'EMCY : 2310 - Continuous over-current',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 1023 0234 123456789',
      errorStatus: 'error',
      msgNr: 4,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '4023023412345678',
      Interpretation: 'EMCY : 2340 - Short-circuit',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 4023 0234 123456789',
      errorStatus: 'error',
      msgNr: 5,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '1032023412345678',
      Interpretation: 'EMCY : 3210 - DC-link over-voltage',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 1032 0234 123456789',
      errorStatus: 'error',
      msgNr: 6,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '2032023412345678',
      Interpretation: 'EMCY : 3220 - DC-link under-voltage',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 2032 0234 123456789',
      errorStatus: 'error',
      msgNr: 7,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '8042023412345678',
      Interpretation: 'EMCY : 4280 - Over temperature motor',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 8042 0234 123456789',
      errorStatus: 'error',
      msgNr: 8,
      type: 'EMCY'
    },
    {
      AxisID: 10,
      CS: '-',
      CobID: '0x08a',
      Data: '02',
      FrameData: '1043023412345678',
      Interpretation: 'EMCY : 4310 - Over temperature drive',
      Object: '1001',
      ObjectName: 'Error Register',
      OriginalMessage: '0x08a 1043 0234 123456789',
      errorStatus: 'error',
      msgNr: 9,
      type: 'EMCY'
    }
  ]
]
const arrayOfObjects1 = [
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
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'R_SDO'
    },
    {
      AxisID: 1,
      CS: '23',
      CobID: '601',
      Data: '60400010',
      FrameData: '2300160110004060',
      Interpretation:
        '[201h][1] - #x6040 - Controlword Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque, placeat voluptate consectetur sint quisquam veniam amet error numquam mollitia?',
      Object: '#x1600_01',
      ObjectName: '1st mapped object',
      OriginalMessage: '601 23 0016 01 10004060',
      errorStatus: 'blue',
      msgNr: 2,
      type: 'RPDO'
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
export const TableComponent = () => {
  // groupedFilteredArray = arrayOfObjects
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      style={{
        position: 'relative',
        marginBottom: '20rem'
      }}
    >
      <table
        style={{
          width: '99%',
          fontWeight: '700',
          position: 'sticky',
          top: '2.5rem',
          background: `${colors.primary[300]}`,
          zIndex: 1,
          marginLeft: '0.5rem',
          fontSize: '1rem'
        }}
      >
        <thead style={{}}>
          {/* Table ROW FOR THEAD---------------------------- */}
          <tr
            style={{
              width: '100%'
            }}
          >
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

      <table
        style={{
          color: `${colors.grey[100]}`,
          background: `${colors.blue[300]}`,
          fontFamily: 'Calibri',
          fontSize: '1rem'
        }}
      >
        <tbody></tbody>
      </table>
      {groupedFilteredArray.map((group, index) => {
        if (group[0].Axis === '-' || group[0].Axis === 'invalid') {
          return group.map((msg, msgIndex) => {
            if (msgIndex != 0) return <TableROW key={msgIndex} iteration={msg} />
          })
        } else {
          return (
            <TableRowGroup
              groupData={group}
              key={index}
              groupTitle={`AxisID: ${group[0].Axis}`}
              groupLength={group.length - 1} // first object is the obj describing the group
            />
          )
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
            borderLeft: isRecieveTypeMessage ? `0.5rem solid ${colors.primary[400]}` : 'inherit',
            width: '100%'
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
const TableRowGroup = ({ groupTitle, groupLength, groupData }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [expanded, setExpanded] = useState(false)

  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={toggleAccordion}
      sx={{
        width: '100%',

        '& .css-15v22id-MuiAccordionDetails-root': {
          padding: '0px',
          margin: '0px'
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          borderBottom: `1px solid ${colors.primary[400]}`
        }}
      >
        <Typography
          sx={{
            color: colors.yellow[500],
            fontSize: '1.2rem',
            fontWeight: '600'
          }}
        >
          {groupTitle}
        </Typography>
        <Typography
          sx={{
            color: `${colors.grey[200]}`,

            fontSize: '1rem',
            fontWeight: '600',
            marginLeft: '1rem'
          }}
        >
          - {groupLength} messages
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {groupData.map((iteration, index) => {
            if (index != 0) return <TableROW key={index} iteration={iteration} />
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export function CreateGroupedFilteredArray(allMessages, GroupingOptionsForMessages) {
  groupedFilteredArray = []
  var prevAxis = null
  var currentAxis
  allMessages.forEach((oneMessage) => {
    currentAxis = oneMessage.AxisID
    console.log('🚀 ~ file: Table.jsx:1025 ~ allMessages.forEach ~ currentAxis:', currentAxis)
    if (GroupingOptionsForMessages.Axis) {
      if (currentAxis != prevAxis) {
        prevAxis = currentAxis
        groupedFilteredArray.push([{ Axis: currentAxis }, oneMessage])
      } else {
        groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
      }
    }
  })
}
