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
import { hex2bin, bin2hex, LittleEndian } from '../functions/NumberConversion'
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
    <Box>
      <Header title="More Options " subtitle="Extra features" />

      <DataExchangeObjectsMENU />
    </Box>
  )
}

export default MoreOptionsWindow

const DataExchangeObjectsMENU = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [formData, setFormData] = useState({
    DataSize: '16',
    MemoryType: 'EEPROM',
    IncrementStatus: 'true',
    writeObject: '2065h',
    address: '4000',
    valueHex: '1',
    message2067: '00000000'
  })
  const [s2064_data, setS2064_data] = useState('0000')
  const [s2067_data, setS2067_data] = useState('00000000')
  const handleChange = (field, value) => {
    if (field == 'DataSize') {
      setFormData((prevData) => ({ ...prevData, [field]: value, valueHex: '0' }))
    } else {
      setFormData((prevData) => ({ ...prevData, [field]: value }))
    }
  }
  useEffect(() => {
    composeMessage()
  }, [formData])
  function composeMessage() {
    let message2064 = '0'
    if (formData.DataSize === '16') {
      message2064 = message2064.concat('0')
    } else {
      message2064 = message2064.concat('1')
    }
    if (formData.MemoryType === 'EEPROM') {
      message2064 = '00010'.concat(message2064)
    } else if (formData.MemoryType === 'DATA') {
      message2064 = '00001'.concat(message2064)
    } else {
      message2064 = '00000'.concat(message2064)
    }
    if (formData.IncrementStatus == 'true') {
      message2064 = '000000000'.concat(message2064)
    } else {
      message2064 = '000000001'.concat(message2064)
    }

    message2064 = LittleEndian(bin2hex(message2064).padStart(4, '0'))
    message2064 = message2064.concat(`${LittleEndian(formData.address.padStart(4, '0'))}`)

    message2064 = message2064.padStart(8, '0')
    setS2064_data(message2064)
    //2067

    setS2067_data(LittleEndian(formData.valueHex.padStart(8, '0')))
  }

  const renderRadioGroup = (label, field, options) => (
    <div style={{ display: 'flex' }}>
      <RadioGroup
        onChange={(e) => handleChange(field, e.target.value)}
        value={formData[field]}
        sx={{
          '& .MuiSvgIcon-root': {
            color: colors.green[400]
          },
          '& .css-6dphjh-MuiButtonBase-root-MuiRadio-root': {
            padding: '0.1rem'
          }
        }}
      >
        <p>{label}: </p>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </div>
  )

  return (
    <>
      <Box
        sx={{
          border: `2px solid ${colors.primary[400]}`,
          backgroundColor: colors.primary[200],
          borderRadius: '1rem',
          p: '1rem'
        }}
      >
        <Typography variant="h3" sx={{ mb: '1rem', color: colors.yellow[500] }}>
          Data Exchange Objects
        </Typography>
        <section style={{ display: 'flex', gap: '1rem' }}>
          {renderRadioGroup('Data size', 'DataSize', [
            { value: '16', label: '16 bits' },
            { value: '32', label: '32 bits' }
          ])}

          {renderRadioGroup('Memory type', 'MemoryType', [
            { value: 'EEPROM', label: 'EEPROM' },
            { value: 'DATA', label: 'DATA' },
            { value: 'PROGRAM', label: 'PROGRAM' }
          ])}
          {renderRadioGroup('AutoIncrement', 'IncrementStatus', [
            { value: 'true', label: 'TRUE' },
            { value: 'false', label: 'FALSE' }
          ])}

          {renderRadioGroup('Write Object', 'writeObject', [
            { value: '2065h', label: '2065h' },
            { value: '2067h', label: '2067h' }
          ])}

          {/* Input components */}
          <div>
            <Input_AutoFormat
              title="Address"
              callback="filterHex"
              resolution={16}
              tellParentValueChanged={(e) => handleChange('address', e)}
              forceValueFromParent={formData.address}
              center
            />
          </div>
          <div>
            <Input_AutoFormat
              title="Value in HEX"
              callback="filterHex"
              resolution={Number(formData.DataSize)}
              tellParentValueChanged={(e) => handleChange('valueHex', e)}
              forceValueFromParent={formData.valueHex}
              center
            />
          </div>
        </section>
        <section style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.3rem', fontWeight: '700' }}>
            {/* //2064 */}
            <span>R_SDO: CobID + </span>
            <span style={{ color: `${colors.yellow[100]}` }}>23 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>6420 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>00 </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{s2064_data.slice(0, 4)} </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{s2064_data.slice(4, 8)} </span>
          </div>
          <div style={{ display: 'flex', gap: '0.3rem', fontWeight: '700' }}>
            {/* //2065 2066 */}
            <span>R_SDO: CobID + </span>
            <span style={{ color: `${colors.yellow[100]}` }}>23 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>
              {LittleEndian(formData.writeObject)}{' '}
            </span>
            <span style={{ color: `${colors.yellow[400]}` }}>00 </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{s2067_data.slice(0, 4)} </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{s2067_data.slice(4, 8)} </span>
          </div>
        </section>
      </Box>
    </>
  )
}
