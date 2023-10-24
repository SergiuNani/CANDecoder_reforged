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
        } else if (GroupingOptionsForMessages.Mapping) {
          //Grouping by Mapping
          if (Array.isArray(group)) {
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
          } else {
            //Simple message
            return <TableROW key={index} iteration={group} />
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
  groupedFilteredArray = []
  var prevAxis = null
  var currentAxis
  var prevMappingType = null
  var currentMappingType
  var currentMode
  var prevMode = null
  allMessages.forEach((oneMessage) => {
    currentAxis = oneMessage.AxisID
    currentMappingType = whatPDOisObject(oneMessage.Object)

    if (GroupingOptionsForMessages.Axis) {
      //GROUPING BY AXIS ENABLED -----------
      if (currentAxis != prevAxis) {
        //Creating new group for new axis
        prevAxis = currentAxis
        groupedFilteredArray.push([{ Axis: currentAxis }])
      }

      if (GroupingOptionsForMessages.Mapping && currentMappingType) {
        var lastElementInArray = groupedFilteredArray[groupedFilteredArray.length - 1]
        var lastElementOfLastAxisGroup = lastElementInArray[lastElementInArray.length - 1]

        if (Array.isArray(lastElementOfLastAxisGroup) && prevMappingType == currentMappingType) {
          //Mapping array exists
          groupedFilteredArray[groupedFilteredArray.length - 1][
            groupedFilteredArray[groupedFilteredArray.length - 1].length - 1
          ].push(oneMessage)
        } else {
          //Create mapping array
          groupedFilteredArray[groupedFilteredArray.length - 1].push([{ Type: currentMappingType }])
          groupedFilteredArray[groupedFilteredArray.length - 1][
            groupedFilteredArray[groupedFilteredArray.length - 1].length - 1
          ].push(oneMessage)
        }
        prevMappingType = currentMappingType
      } else {
        groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage) //push object in the last AxisGroup
      }
    } else if (GroupingOptionsForMessages.Mapping && currentMappingType) {
      //GROUPING ONLY BY MAPPING -----------
      var lastElementInArray = groupedFilteredArray[groupedFilteredArray.length - 1]

      if (Array.isArray(lastElementInArray) && prevMappingType == currentMappingType) {
        //Mapping array exists
        groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
      } else {
        //Create mapping array
        groupedFilteredArray.push([{ Type: currentMappingType }])
        groupedFilteredArray[groupedFilteredArray.length - 1].push(oneMessage)
      }
      prevMappingType = currentMappingType
    } else if (GroupingOptionsForMessages.Modes) {
      //GROUPING ONLY BY MODES OF OPERATION -----------
      var lastElementInArray = groupedFilteredArray[groupedFilteredArray.length - 1]
      if (Array.isArray(lastElementInArray)) {
      } else {
        //NO existing array
      }

      groupedFilteredArray.push(oneMessage)
    } else {
      //NO GROUPING
      // if (oneMessage.AxisID == 3)
      groupedFilteredArray.push(oneMessage)
    }
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
