import { useState, useRef, useEffect, useContext, SyntheticEvent } from 'react'
import { Header } from '../components/SmallComponents.jsx'
import { Typography, Box, useTheme, Button, Tabs, Tab } from '@mui/material'
import { tokens } from '../theme.js'
import { Objects_collection_LS } from '../App.jsx'
import SearchIcon from '@mui/icons-material/Search'
import { RadioGroup, FormControlLabel } from '@mui/material'
import Radio from '@mui/material/Radio'
import { Input_AutoFormat, Input_ChooseOption } from '../components/ForumsComponents.jsx'
import { Types_of_CANopenMsgs_array } from '../data/SmallData.js'
import {
  filterHex,
  filterDecimalWithComma,
  filterDecimal,
  UnitsConvertor,
  decToHex,
  LittleEndian,
  fixed2Hex,
  hexToDec,
  hex2Fixed
} from '../functions/NumberConversion.js'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { MotorSpecificationsContext } from '../App.jsx'
import { CobID_who_dis } from '../functions/CANopen.js'
import {
  FG_units_pos_rot,
  FG_units_spd_rot,
  FG_units_acc_rot,
  FG_units_spd_lin,
  FG_units_pos_lin,
  FG_units_acc_lin,
  FG_units_time
} from '../data/SmallData.js'
import { SDO_abortCodes } from '../functions/CANopenFunctions.js'

const HomeWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [tabsOption, setTabsOption] = useState(0)

  const handleChange = (event) => {
    setTabsOption(event)
  }
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Header title="Home Page"></Header>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0.55', marginRight: '1rem' }}>
          <TabsComponent tellParentValueChanged={handleChange} valueFromParent={tabsOption} />
          <BigObjectSearchInputComponent
            placeholder={
              tabsOption == 0
                ? 'Search for an Object'
                : tabsOption == 1
                ? 'Search for an SDO Abort Code'
                : 'Search for an EMCY Code'
            }
            variant={tabsOption}
          />
        </div>
        <div style={{ flex: '1', marginRight: '2rem' }}>
          <section>
            <NumberTransformationComponent />
            <BigFindCobIDComponent />
          </section>
        </div>
      </div>
    </div>
  )
}
export default HomeWindow

function BigObjectSearchInputComponent({
  placeholder,
  resetValueofInputFromParent,
  focus,
  variant
}) {
  var options
  if (variant == 0) {
    options = Objects_collection_LS
  } else if (variant == 1) {
    options = SDO_abortCodes
  } else {
    options = Objects_collection_LS
  }
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
              - {option.Name}
              {variant == 0 ? (
                <span style={{ color: `${colors.green[300]}` }}> - {option.BitSize} bits</span>
              ) : null}
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
  var { loadType } = useContext(MotorSpecificationsContext)

  const [fourOptionsRadioSelection, setFourOptionsRadioSelection] = useState('POS')
  const [initialValueFieldValue, setInitialValueFieldValue] = useState('')
  const [unitsFieldValue, setUnitsFieldValue] = useState('IU')
  const [IU_FieldValue, setIU_FieldValue] = useState('')
  const [HEX_FieldValue, setHEX_FieldValue] = useState('')
  const [LE_FieldValue, setLE_FieldValue] = useState('')

  //Can`t update field input bug fix
  let [forceRender, setForceRender] = useState(0)

  function handle4OptionChanged(e) {
    //1
    setInitialValueFieldValue('')
    setFourOptionsRadioSelection(e.target.value)
  }

  function handleInitialValueFieldChange(value) {
    //2
    //Input field conditional filtering
    setForceRender(value) // used to update the UI when value is "12."
    let value_Hex
    let value_LE

    let value_IU = UnitsConvertor(value, unitsFieldValue, 'IU', fourOptionsRadioSelection)
    if (fourOptionsRadioSelection == 'POS') {
      value_IU = parseInt(value_IU).toString()
      value_IU = filterDecimal(value_IU, 32)
    } else if (fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC') {
      value_IU = parseFloat(value_IU).toString()
      value_IU = filterDecimalWithComma(value_IU, 32)
    } else if (fourOptionsRadioSelection == 'TIME') {
      value_IU = parseInt(value_IU).toString()
      value_IU = filterDecimal(value_IU, 'TIME')
    }

    let value_Initial = UnitsConvertor(value_IU, 'IU', unitsFieldValue, fourOptionsRadioSelection)
    if (fourOptionsRadioSelection == 'POS') {
      value_Hex = decToHex(value_IU, 32)
      value_Hex = value_Hex.toString().padStart(8, 0)
    } else if (fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC') {
      value_Hex = fixed2Hex(value_IU)
      value_Hex = value_Hex.toString().padStart(8, 0)
    } else if (fourOptionsRadioSelection == 'TIME') {
      value_Hex = decToHex(value_IU, 16)
      value_Hex = value_Hex.toString().padStart(4, 0)
    }
    value_LE = LittleEndian(value_Hex)

    var aux = value.split('.')

    if (
      [
        '-32768',
        '2147483647',
        '-32768.99899',
        '-2147483648',
        '32767.99899',
        '32767',
        '65536'
      ].includes(value_IU) ||
      (aux[1] &&
        unitsFieldValue == 'IU' &&
        (fourOptionsRadioSelection == 'POS' || fourOptionsRadioSelection == 'TIME'))
    ) {
      setInitialValueFieldValue(value_Initial)
    } else {
      setInitialValueFieldValue(value)
    }
    setIU_FieldValue(value_IU)
    setHEX_FieldValue(value_Hex)
    setLE_FieldValue(value_LE)
  }

  function handleUnitsFieldValueChaged(value) {
    //3
    setUnitsFieldValue(value)

    let value_initial = UnitsConvertor(
      initialValueFieldValue,
      unitsFieldValue,
      value,
      fourOptionsRadioSelection
    )
    setInitialValueFieldValue(value_initial)
  }

  function handleIU_FieldValueChaged(value) {
    //4

    let value_initial = UnitsConvertor(value, 'IU', unitsFieldValue, fourOptionsRadioSelection)

    let value_Hex

    if (fourOptionsRadioSelection == 'POS') {
      value_Hex = decToHex(value, 32)
      value_Hex = value_Hex.toString().padStart(8, 0)
    } else if (fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC') {
      value_Hex = fixed2Hex(value)
      value_Hex = value_Hex.toString().padStart(8, 0)
    } else if (fourOptionsRadioSelection == 'TIME') {
      value_Hex = decToHex(value, 16)
      value_Hex = value_Hex.toString().padStart(4, 0)
    }
    let value_LE = LittleEndian(value_Hex)

    setInitialValueFieldValue(value_initial)
    setIU_FieldValue(value)
    setHEX_FieldValue(value_Hex)
    setLE_FieldValue(value_LE)
  }

  function handleHEX_FieldValueChaged(value) {
    //5

    var value_IU
    if (fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC') {
      value_IU = hex2Fixed(value)
    } else {
      value_IU = hexToDec(value, 32)
    }
    let value_LE = LittleEndian(value)

    let value_initial = UnitsConvertor(value_IU, 'IU', unitsFieldValue, fourOptionsRadioSelection)

    setInitialValueFieldValue(value_initial)
    setIU_FieldValue(value_IU)

    setHEX_FieldValue(value)
    setLE_FieldValue(value_LE)
  }
  function handleLE_FieldValueChaged(value) {
    //6
    let value_Hex = LittleEndian(value)

    var value_IU
    if (fourOptionsRadioSelection == 'SPD' || fourOptionsRadioSelection == 'ACC') {
      value_IU = hex2Fixed(value_Hex)
    } else {
      value_IU = hexToDec(value_Hex, 32)
    }

    let value_initial = UnitsConvertor(value_IU, 'IU', unitsFieldValue, fourOptionsRadioSelection)

    setInitialValueFieldValue(value_initial)
    setIU_FieldValue(value_IU)

    setHEX_FieldValue(value_Hex)
    setLE_FieldValue(value)
  }

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
            callback={filterDecimalWithComma}
            resolution={0}
            inputType={fourOptionsRadioSelection}
            tellParentValueChanged={handleInitialValueFieldChange}
            forceValueFromParent={initialValueFieldValue}
            forceRender={forceRender}
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

function BigFindCobIDComponent() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [cobIdInput, setCobIdInput] = useState('')
  const [cobIdType, setCobIdType] = useState('')
  const [cobIdAxisID, setCobIdAxisID] = useState('')

  function handleValueChanged(value) {
    setCobIdInput(value)

    var result = CobID_who_dis(value)
    setCobIdType(result[1])
    setCobIdAxisID(result[2])
  }

  return (
    <Box
      sx={{
        border: `1px solid yellow`,
        backgroundColor: `${colors.primary[200]}`,
        border: `1px solid ${colors.primary[400]}`,
        borderRadius: '1rem',
        p: '1rem',
        mt: '2rem'
      }}
    >
      <Typography variant="h3" sx={{ mb: '1rem', color: `${colors.yellow[500]}` }}>
        COB-ID Search
      </Typography>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          width: '100%'
          // border: `1px solid yellow`
        }}
      >
        <Input_AutoFormat
          title="Search"
          callback={filterHex}
          resolution={16}
          tellParentValueChanged={handleValueChanged}
          forceValueFromParent={cobIdInput}
          // forceRender={forceRender}
          center
        />
        <DoubleArrowIcon sx={{ color: `${colors.primary[400]}`, zoom: '1.8' }} />
        <Input_AutoFormat
          title="Type"
          callback={filterHex}
          resolution={0}
          tellParentValueChanged={setCobIdInput}
          forceValueFromParent={cobIdAxisID}
          disabled
          center
          longer
        />
        <Input_AutoFormat
          title="Axis ID"
          callback={filterHex}
          resolution={0}
          tellParentValueChanged={setCobIdInput}
          forceValueFromParent={cobIdType}
          disabled
          center
        />
      </section>
    </Box>
  )
}

export function TabsComponent({ tellParentValueChanged, valueFromParent }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [value, setValue] = useState(valueFromParent)
  const handleChange = (event, newValue) => {
    tellParentValueChanged(newValue)
    setValue(newValue)
  }

  const tabOptions = [
    { label: 'CANopen Objects' },
    { label: 'Abort Codes' },
    { label: 'EMCY Codes' }
  ]

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        marginBottom: '1rem',
        position: 'absolute',
        top: '-1rem'
      }}
    >
      {tabOptions.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          sx={{
            color: `${colors.grey[100]}`,
            ['&.Mui-selected']: {
              color: `${colors.green[400]}`
            }
          }}
        />
      ))}
    </Tabs>
  )
}
