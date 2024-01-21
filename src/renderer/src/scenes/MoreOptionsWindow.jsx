import { useState, useEffect, useContext, useMemo, memo, createContext, useRef } from 'react'
import { Box, Typography, useTheme, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Header } from '../components/SmallComponents'
import { tokens } from '../theme'
import { ESM_info_LS } from '../App'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import SearchIcon from '@mui/icons-material/Search'

import { Input_AutoFormat } from '../components/ForumsComponents'
import {
  bin2hex,
  LittleEndian,
  hex_to_ascii,
  asciiToDec,
  decToHex,
  hexToDec
} from '../functions/NumberConversion'

const MoreOptionsWindow = () => {
  return (
    <Box>
      <Header title="Extra Options" />
      <section style={{ display: 'flex', gap: '4rem', marginLeft: '1rem' }}>
        <ESM_info_SearchComponent placeholder="Drive /partNumber /fw /hwid" />
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '0.7' }}>
          <DataExchangeObjectsMENU />
          <XMLfinder />
        </section>
      </section>
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

  const [x2064, setx2064] = useState('0')
  const [xWrite, setxWrite] = useState('0')
  const handleChange = (field, value) => {
    if (field == 'DataSize') {
      setFormData((prevData) => ({ ...prevData, [field]: value, valueHex: '0' }))
      if (value == '32') {
        setFormData((prevData) => ({ ...prevData, writeObject: '2065h' }))
      }
    } else if (field == 'writeObject') {
      setFormData((prevData) => ({ ...prevData, [field]: value, valueHex: '0' }))
      if (value == '2067h') {
        setFormData((prevData) => ({ ...prevData, DataSize: '16' }))
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [field]: value }))
    }
  }
  useEffect(() => {
    composeMessage()
  }, [formData])

  function composeMessage() {
    var val_2064 = 0
    var valWriteObj = ''
    if (formData.MemoryType == 'EEPROM') {
      val_2064 |= 0x8
    } else if (formData.MemoryType == 'DATA') {
      val_2064 |= 0x4
    }
    if (formData.writeObject === '2065h') {
      if (formData.DataSize == '32') val_2064 |= 0x1
      if ('true' != formData.IncrementStatus) {
        val_2064 |= 0x80
      }
      val_2064 = decToHex(val_2064, 16).padStart(4, '0')
      val_2064 = formData.address.padStart(4, '0') + val_2064
      val_2064 = LittleEndian(val_2064)
      setx2064(val_2064)

      valWriteObj = decToHex(hexToDec(formData.valueHex, 16), 16).padStart(4, '0') // remove '0012'-> '12' then pad it
      valWriteObj = '0000' + valWriteObj
      valWriteObj = LittleEndian(valWriteObj)
      setxWrite(valWriteObj)
    } else {
      val_2064 = decToHex(val_2064, 16).padStart(4, '0')
      val_2064 = '0000' + val_2064
      val_2064 = LittleEndian(val_2064)
      setx2064(val_2064)

      valWriteObj = decToHex(hexToDec(formData.valueHex, 16), 16).padStart(4, '0') // remove '0012'-> '12' then pad it
      valWriteObj = formData.address.padStart(4, '0') + valWriteObj
      valWriteObj = LittleEndian(valWriteObj)
      setxWrite(valWriteObj)
    }
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
          },
          minWidth: '5rem'
        }}
      >
        <p style={{ marginBottom: '0.4rem' }}>{label}: </p>
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
          p: '1rem 2rem'
        }}
      >
        <Typography variant="h3" sx={{ mb: '1rem', color: colors.yellow[500] }}>
          Data Exchange Objects
        </Typography>
        <section style={{ display: 'flex', gap: '1.5rem' }}>
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

        <section style={{ marginTop: '1rem', fontSize: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.3rem', fontWeight: '700' }}>
            {/* //2064 */}
            <span>R_SDO: CobID + </span>
            <span style={{ color: `${colors.yellow[100]}` }}>23 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>6420 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>00 </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{x2064.slice(0, 4)} </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{x2064.slice(4, 8)} </span>
          </div>
          <div style={{ display: 'flex', gap: '0.3rem', fontWeight: '700' }}>
            {/* //2065 2066 */}
            <span>R_SDO: CobID + </span>
            <span style={{ color: `${colors.yellow[100]}` }}>23 </span>
            <span style={{ color: `${colors.yellow[400]}` }}>
              {LittleEndian(formData.writeObject)}{' '}
            </span>
            <span style={{ color: `${colors.yellow[400]}` }}>00 </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{xWrite.slice(0, 4)} </span>
            <span style={{ color: `${colors.yellow[500]}` }}>{xWrite.slice(4, 8)} </span>
          </div>
        </section>
      </Box>
    </>
  )
}
const XMLfinder = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [fwVersion, setFwVersion] = useState('F515I')
  const [xmlVersion, setXmlVersion] = useState('892417353')

  return (
    <Box
      sx={{
        border: `2px solid ${colors.primary[400]}`,
        backgroundColor: colors.primary[200],
        borderRadius: '1rem',
        p: '1rem 2rem',
        display: 'inline-block'
      }}
    >
      <Typography variant="h3" sx={{ color: colors.yellow[500] }}>
        XML Finder
      </Typography>
      <section
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
      >
        {/* Input components */}
        <div>
          <Input_AutoFormat
            title="Firmware version"
            callback="none"
            resolution={16}
            tellParentValueChanged={(e) => {
              //ASCII
              e = e.toUpperCase()
              setFwVersion(e)
              if (e.slice(0, 1) == 'F') e = e.slice(1)
              setXmlVersion(asciiToDec(e))
            }}
            forceValueFromParent={fwVersion}
            center
          />
        </div>
        <span style={{ zoom: '2' }}>
          <SwapHorizIcon />
        </span>
        <div>
          <Input_AutoFormat
            title="XML version(dec)"
            callback="filterDecimal"
            resolution={0}
            tellParentValueChanged={(e) => {
              setXmlVersion(e)
              setFwVersion(`F${hex_to_ascii(decToHex(e, 32))}`)
            }}
            forceValueFromParent={xmlVersion}
            center
          />
        </div>
      </section>
    </Box>
  )
}

function ESM_info_SearchComponent({ placeholder, resetValueofInputFromParent, focus }) {
  var options = ESM_info_LS
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setInputValue('')
  }, [resetValueofInputFromParent])

  const filterOptions = (value) => {
    return options.filter((option) =>
      Object.values(option).some((propertyValue) =>
        propertyValue.toString().toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    const filtered = filterOptions(value)
    setFilteredOptions(filtered)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setFilteredOptions(filterOptions(inputValue))
  }

  const handleBlur = () => {
    setIsFocused(false)
    setFilteredOptions([])
  }

  const arrowIconStyles = {
    position: 'absolute',
    top: '50%',
    right: '0.3rem',
    transform: `translateY(-50%) rotate(${isFocused ? '180deg' : '0deg'})`,
    transition: 'transform 0.2s ease',
    color: `${colors.green[200]}`,
    fontSize: '1.1rem'
  }
  return (
    <div
      style={{
        // overflow: 'auto',
        minWidth: '33%',
        position: 'relative',
        top: '-1rem'
      }}
    >
      <label
        style={{
          position: 'relative',
          padding: '0.5rem',
          backgroundColor: `${colors.primary[300]}`,
          borderRadius: '1rem',
          display: 'flex'
        }}
      >
        <SearchIcon sx={{ zoom: '1.5' }} />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={focus}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: '0.2rem 0 0 1rem',
            minWidth: '20rem',
            fontSize: '1.3rem'
          }}
        />
        <span style={arrowIconStyles}>▼</span>
      </label>
      {isFocused && filteredOptions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '15%',
            width: '100%',
            maxHeight: '75vh',
            borderRadius: '0.5rem',
            overflow: 'auto',
            fontSize: '1rem',
            marginTop: '1rem'
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              style={{
                backgroundColor: `${colors.primary[300]}`,
                borderRadius: '0.8rem',
                padding: '0.5rem',
                cursor: 'pointer',
                marginBottom: '0.5rem'
              }}
            >
              <span
                style={{
                  color: `${colors.yellow[500]}`
                }}
              >
                {option.driveName}
              </span>{' '}
              - {option.partNumber} -
              <span style={{ color: `${colors.primary[400]}` }}> {option.firmware} </span>
              {option.HWID != '-' ? (
                <span style={{ color: `${colors.yellow[400]}` }}> - {option.HWID}</span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
