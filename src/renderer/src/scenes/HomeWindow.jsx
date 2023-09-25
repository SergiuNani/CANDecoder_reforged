import { useState, useRef, useEffect, useContext } from 'react'
import { Header } from '../components/SmallComponents.jsx'
import { Typography, Box, useTheme, IconButton } from '@mui/material'
import { tokens } from '../theme.js'
import { Objects_collection_LS } from '../App.jsx'
import SearchIcon from '@mui/icons-material/Search'
import { RadioGroup, FormControlLabel } from '@mui/material'
import Radio from '@mui/material/Radio'
import { Input_AutoFormat, Input_ChooseOption } from '../components/ForumsComponents.jsx'
import { Types_of_CANopenMsgs_array } from '../data/SmallData.js'
import { filterHex, filterDecimalWithComma, filterDecimal } from '../functions/NumberConversion.js'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { MotorSpecificationsContext } from '../App.jsx'
import { UnitsConvertor, UnitsConvertor1 } from '../functions/NumberConversion.js'
import { whatFG_isObject } from '../functions/CANopen.js'
import {
  FG_units_pos_rot,
  FG_units_spd_rot,
  FG_units_acc_rot,
  FG_units_spd_lin,
  FG_units_pos_lin,
  FG_units_acc_lin,
  FG_units_time
} from '../data/SmallData.js'

const HomeWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <Header title="Home Page"></Header>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0.55', marginRight: '1rem' }}>
          <AutocompleteInput_Main placeholder="Search for an Object" />
        </div>
        <div style={{ flex: '1', marginRight: '2rem' }}>
          <section>
            <NumberTransformationComponent />
          </section>
        </div>
      </div>
    </div>
  )
}
export default HomeWindow

function AutocompleteInput_Main({ placeholder, resetValueofInputFromParent, focus }) {
  var options = Objects_collection_LS
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)

  const inputRef = useRef()
  const ulRef = useRef()

  useEffect(() => {
    setInputValue('')
  }, [resetValueofInputFromParent])
  const filterOptions = (value) => {
    const flatOptions = []

    function flatten(obj) {
      if (obj.Info && Array.isArray(obj.Info.SubItem)) {
        obj.Info.SubItem.forEach((subItem) => flatten(subItem))
      }
      if (obj.Info == undefined || obj.Info.SubItem == undefined) flatOptions.push(obj)
    }

    options.forEach((option) => flatten(option))

    return flatOptions.filter((option) =>
      Object.values(option).some((propertyValue) =>
        propertyValue.toString().toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    setSelectedOptionIndex(-1) // Reset selected option index
    // Filter options based on input value
    const filtered = filterOptions(value)
    setFilteredOptions(filtered)
  }

  const handleOptionClick = (option) => {
    setInputValue(option.Index || '')
    setSelectedOption(option)
    setFilteredOptions([])
  }

  const handleFocus = () => {
    setIsFocused(true)
    setFilteredOptions(filterOptions(inputValue)) // Show all options when focused
  }

  const handleBlur = () => {
    // Delay hiding the options to give time for a click to register
    setTimeout(() => {
      if (inputRef.current && !inputRef.current.contains(document.activeElement)) {
        setIsFocused(false)
        setFilteredOptions([]) // Hide options when blurred
      }
    }, 200)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsFocused(true)
      setSelectedOptionIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      )
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setIsFocused(true)
      setSelectedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (selectedOptionIndex >= 0 && selectedOptionIndex < filteredOptions.length) {
        handleOptionClick(filteredOptions[selectedOptionIndex])
      }
    } else if (event.key === 'Escape') {
      setIsFocused(false)
    }

    // Scroll the selected option into view
    if (ulRef.current && ulRef.current.children[selectedOptionIndex]) {
      ulRef.current.children[selectedOptionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
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
      ref={inputRef}
      style={{
        // overflow: 'auto',
        minWidth: '33%',
        position: 'relative'
      }}
    >
      <label
        style={{
          position: 'relative',
          padding: '1.1rem',
          backgroundColor: `${colors.primary[300]}`,
          borderRadius: '1rem'
        }}
      >
        <SearchIcon sx={{ zoom: '1.5' }} />
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={focus}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: '0.2rem 0 0 1rem',
            width: '20rem',
            fontSize: '1.3rem'
          }}
        />
        <span style={arrowIconStyles}>▼</span>
      </label>
      {isFocused && filteredOptions.length > 0 && (
        <ul
          ref={ulRef}
          style={{
            position: 'absolute',
            top: '100%',
            width: '100%',
            maxHeight: '75vh',
            borderRadius: '0.5rem',
            overflow: 'auto',
            fontSize: '1.1rem',
            marginTop: '1rem'
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                backgroundColor:
                  selectedOptionIndex === index
                    ? `${colors.primary[400]}`
                    : `${colors.primary[300]}`,

                padding: '0.5rem 1rem',
                borderRadius: '0.8rem',
                padding: '1rem',
                cursor: 'pointer',
                // width: '80%',
                marginBottom: '0.5rem'
              }}
            >
              <span
                style={{
                  color: `${colors.yellow[500]}`
                }}
              >
                {option.Index}
              </span>{' '}
              - {option.Name} -{' '}
              <span style={{ color: `${colors.green[300]}` }}>{option.BitSize} bits</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function NumberTransformationComponent() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  var { loadType, setLoadType } = useContext(MotorSpecificationsContext)

  const [fourOptionsRadioSelection, setFourOptionsRadioSelection] = useState('POS')
  const [initialValueFieldValue, setInitialValueFieldValue] = useState('')
  const [unitsFieldValue, setUnitsFieldValue] = useState('')
  const [IU_FieldValue, setIU_FieldValue] = useState('')
  const [HEX_FieldValue, setHEX_FieldValue] = useState('')
  const [LE_FieldValue, setLE_FieldValue] = useState('')

  function handle4OptionChanged(e) {
    //1
    setFourOptionsRadioSelection(e.target.value)
  }

  function handleInitialValueFieldChange(value) {
    //2
    setInitialValueFieldValue(value)
  }

  function handleUnitsFieldValueChaged(value) {
    // console.log('🚀', value)
    //3

    setUnitsFieldValue(value)
  }

  function handleIU_FieldValueChaged(value) {
    //4
    setIU_FieldValue(value)
  }

  function handleHEX_FieldValueChaged(value) {
    //5
    setHEX_FieldValue(value)
  }
  function handleLE_FieldValueChaged(value) {
    //6
    setLE_FieldValue(value)
  }
  // console.log(UnitsConvertor('33', 'IU', 'rpm', '6081'))
  // console.log(UnitsConvertor('1', 'rot', 'deg', '607A'))
  // console.log(UnitsConvertor1('33', 'IU', 'rpm', '6081'))

  return (
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
        Quick Conversion
      </Typography>
      <div style={{ display: 'flex' }}>
        {/* RADIO GROUP: POS/SPD/ACC/TIME------------------------------------------------------- */}
        <RadioGroup
          // column={true}
          aria-labelledby="demo-row-radio-buttons-group-label"
          onChange={handle4OptionChanged}
          name="row-radio-buttons-group"
          value={fourOptionsRadioSelection}
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
        <section
          key={loadType}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.2rem',
            width: '100%'
            // border: `1px solid yellow`
          }}
        >
          {/* "Initial Value" component------------------------------------------------------- */}
          <Input_AutoFormat
            title="Initial Value"
            callback={
              fourOptionsRadioSelection == 'POS'
                ? filterDecimal
                : fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC'
                ? filterDecimalWithComma
                : filterDecimal
            }
            resolution={fourOptionsRadioSelection == 'TIME' ? 'TIME' : 32}
            inputType={fourOptionsRadioSelection}
            tellParentValueChanged={handleInitialValueFieldChange}
            forceValueFromParent={initialValueFieldValue}
          />

          {/* "Units" component for Initial Value Input field------------------------------------------------------- */}

          <Input_ChooseOption
            key={fourOptionsRadioSelection}
            title="Units"
            array={
              loadType == 'ROTARY'
                ? fourOptionsRadioSelection == 'POS'
                  ? FG_units_pos_rot
                  : fourOptionsRadioSelection == 'SPD'
                  ? FG_units_spd_rot
                  : fourOptionsRadioSelection == 'ACC'
                  ? FG_units_acc_rot
                  : FG_units_time
                : //linear
                fourOptionsRadioSelection == 'POS'
                ? FG_units_pos_lin
                : fourOptionsRadioSelection == 'SPD'
                ? FG_units_spd_lin
                : fourOptionsRadioSelection == 'ACC'
                ? FG_units_acc_lin
                : FG_units_time
            }
            tellParentOptionChanged={handleUnitsFieldValueChaged}
            forceValueReset={fourOptionsRadioSelection}
          />
          <DoubleArrowIcon sx={{ color: `${colors.primary[400]}`, zoom: '1.8' }} />

          {/* "IU" component from QuickConversion------------------------------------------------------- */}
          <Input_AutoFormat
            title="IU"
            callback={
              fourOptionsRadioSelection == 'POS'
                ? filterDecimal
                : fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC'
                ? filterDecimalWithComma
                : filterDecimal
            }
            resolution={fourOptionsRadioSelection == 'TIME' ? 'TIME' : 32}
            inputType={fourOptionsRadioSelection}
            tellParentValueChanged={handleIU_FieldValueChaged}
            forceValueFromParent={IU_FieldValue}
          />
          {/* "HEX" component from QuickConversion------------------------------------------------------- */}
          <Input_AutoFormat
            title="HEX"
            callback={filterHex}
            resolution={fourOptionsRadioSelection == 'TIME' ? 16 : 32}
            inputType={fourOptionsRadioSelection}
            tellParentValueChanged={handleHEX_FieldValueChaged}
            forceValueFromParent={HEX_FieldValue}
          />
          {/* "Little Endian" component from QuickConversion------------------------------------------------------- */}
          <Input_AutoFormat
            title="Little Endian"
            callback={filterHex}
            resolution={fourOptionsRadioSelection == 'TIME' ? 16 : 32}
            inputType={fourOptionsRadioSelection}
            tellParentValueChanged={handleLE_FieldValueChaged}
            forceValueFromParent={LE_FieldValue}
          />
        </section>
      </div>
    </Box>
  )
}
