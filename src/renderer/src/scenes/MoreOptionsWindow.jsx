import { useState, useRef, useEffect, useContext, useMemo, memo, createContext } from 'react'
import {
  Box,
  IconButton,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Dialog
} from '@mui/material'
import {
  Header,
  Button3,
  Button1,
  Checkbox_Component,
  ButtonTransparent
} from '../components/SmallComponents'
import { tokens } from '../theme'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { DecodeCANlog_topbarOptionsContext } from '../App'
import { InsertTextIntoTextArea } from '../data/TestingData'
import {
  Extract_MSGs_from_text,
  CreateDecodedArrayOfObjects,
  CanLogStatistics,
  filterMessagesByAxesAndCobID
} from '../functions/CANopen'
import { Input_AutoFormat } from '../components/ForumsComponents'
import { filterDecimal } from '../functions/NumberConversion'
import CloseIcon from '@mui/icons-material/Close'
import { PDOdetectedModal } from './global/PDO'
import {
  PDO_mapped,
  SortMappingByAxis,
  DontBotherWithPDO_flag,
  SetAllPDOsEMPTY,
  ObjectValuesSaved_global,
  PDO_mapped_aux
} from '../functions/CANopenFunctions'
import {
  DefaultTable,
  CreateGroupedFilteredArray,
  DebugTable,
  TableROW_simple
} from '../components/Table'
import { GroupingOptionsForMessages } from '../data/SmallData'

const MoreOptionsWindow = () => {
  console.log('MoreOptionsWindow')
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <section>
      <Header title="More Options " subtitle="Extra features" />

      <Box
        sx={{
          border: `1px solid yellow`,
          backgroundColor: `${colors.primary[200]}`,
          border: `1px solid ${colors.primary[400]}`,
          borderRadius: '1rem',
          p: '1rem'
        }}
      >
        <Typography variant="h3" sx={{ mb: '1rem', color: `${colors.yellow[500]}` }}>
          Data Exchange Objects
        </Typography>
        <div style={{ display: 'flex' }}>
          {/* RADIO GROUP: POS/SPD/ACC/TIME------------------------------------------------------- */}
          <RadioGroup
            // column={true}
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={() => {}}
            name="row-radio-buttons-group"
            value={''}
            sx={{
              '& .MuiSvgIcon-root': {
                // fontSize: '1rem'
                color: `${colors.green[400]}`
              },
              '& .MuiFormControlLabel-root': {
                margin: '0', // Remove margin
                padding: '0' // Remove padding
              }
            }}
          >
            <FormControlLabel value="POS" control={<Radio />} label="POS" selected />
            <FormControlLabel value="SPD" control={<Radio />} label="SPD" selected />
            <FormControlLabel value="ACC" control={<Radio />} label="ACC" selected />
            <FormControlLabel value="TIME" control={<Radio />} label="TIME" selected />
          </RadioGroup>
        </div>
      </Box>
      {/* //--------------------- */}

      <div>
        <h1>Address</h1>
        <Input_AutoFormat
          callback="filterHex"
          resolution={16}
          tellParentValueChanged={() => {}}
          forceValueFromParent={''}
        />
      </div>
    </section>
  )
}

export default MoreOptionsWindow
