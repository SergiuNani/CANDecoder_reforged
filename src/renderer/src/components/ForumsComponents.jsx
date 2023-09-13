import React, { useState, useRef, useEffect } from 'react'
import { useTheme, Typography } from '@mui/material'
import { tokens } from '../theme'
import { Objects_collection_LS } from '../App'
import {
  filterHex,
  filterDecimal,
  filterDecimalWithComma,
  hexToDec
} from '../functions/NumberConversion'
import { Registers_CANopen_LS, Registers_THS_LS } from '../App'

export function AutocompleteInput_AllObjects({ title, placeholder, tellParentObjectChanged }) {
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
    tellParentObjectChanged(option)
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
    color: `${colors.green[200]}`
  }
  return (
    <div
      ref={inputRef}
      style={{
        // overflow: 'auto',
        width: '20rem',
        position: 'relative'
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontSize: '1.1rem'
          // color: `${colors.primary1[200]}`
        }}
      >
        {title}
      </Typography>
      <label
        style={{
          position: 'relative'
        }}
      >
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: '0.2rem 0 0 1rem',
            width: '7rem',
            fontSize: '1rem'
          }}
        />
        <span style={arrowIconStyles}>▼</span>
      </label>
      {isFocused && filteredOptions.length > 0 && (
        <ul
          ref={ulRef}
          style={{
            zIndex: '2',
            position: 'absolute',
            top: '100%',
            width: '100%',
            maxHeight: '75vh',
            // backgroundColor: `${colors.primary[100]}`,
            borderRadius: '0.5rem',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            // border: '1px solid yellow',
            overflow: 'auto'
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
                // border: `1px solid ${colors.red[500]}`,
                // borderRadius: '4rem',
                cursor: 'pointer'
              }}
              className="hover"
            >
              {option.Index} - {option.Name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export function AutocompleteInput_RegisterList({
  listType,
  title,
  placeholder,
  type,
  tellParentRegisterChanged,
  extendStyle = false
}) {
  var options = []
  if (type == '1') {
    options = Registers_CANopen_LS
  } else if (type == '2') {
    options = Registers_THS_LS
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
    //Reset the input value based on the CANopen vs THS toggle
    setInputValue('')
  }, [listType])

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
    setSelectedOptionIndex(-1) // Reset selected option index
    // Filter options based on input value
    const filtered = filterOptions(value)
    setFilteredOptions(filtered)
  }

  const handleOptionClick = (option) => {
    setInputValue(option.Index || '')
    setSelectedOption(option)
    tellParentRegisterChanged(option)
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
    color: `${colors.green[200]}`
  }

  return (
    <div
      ref={inputRef}
      style={{
        // overflow: 'auto',
        width: extendStyle ? '20rem' : '5rem',
        position: 'relative'
        // marginLeft: '1rem'
        // border: '1px solid yellow'
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontSize: '1.1rem'
          // color: `${colors.primary1[200]}`
        }}
      >
        {title}
      </Typography>
      <label
        style={{
          position: 'relative'
        }}
      >
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: extendStyle ? '0.2rem 0 0 1rem' : '0',
            width: extendStyle ? '6.6rem' : '5.6rem',
            fontSize: '1rem'
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
            width: extendStyle ? '80%' : '450%',
            maxHeight: '75vh',
            // backgroundColor: `${colors.primary[100]}`,
            borderRadius: '0.5rem',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            // border: '1px solid yellow',
            overflow: 'auto'
            // width: '450%'
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
                // border: `1px solid ${colors.red[500]}`,
                // borderRadius: '4rem',
                cursor: 'pointer'
              }}
              className="hover"
            >
              {option.Index} - {option.Title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export function Input_AutoFormat({
  title,
  placeholder,
  callback,
  resolution,
  offset = false,
  inputType,
  tellParentValueChanged,
  registerChanged,
  valueRegisterFromParent
}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue('')
  }, [inputType, registerChanged])

  useEffect(() => {
    //When user clicks on the multiBitBoxes to change the value
    if (inputType == 'DEC') {
      setInputValue(hexToDec(valueRegisterFromParent, resolution))
    } else {
      setInputValue(valueRegisterFromParent)
    }
  }, [valueRegisterFromParent])

  function handleInputChange(e) {
    var sorted = callback(e.target.value, resolution)
    setInputValue(sorted)
    tellParentValueChanged(sorted, e.target.localName)
  }

  return (
    <div
      style={{
        // overflow: 'auto',
        position: 'relative'
      }}
    >
      <p
        style={{
          fontSize: '1rem',
          color: `${colors.primary1[200]}`,
          margin: '0'
        }}
      >
        {title}
      </p>
      <label
        style={{
          position: 'relative'
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            margin: offset ? '0.2rem 0 0 1rem' : '0',
            fontSize: '1rem',
            width: '7rem'
          }}
        />
      </label>
    </div>
  )
}
export function Input_ChooseOption({ title, options }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isFocused, setIsFocused] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsFocused(true)
      setSelectedOptionIndex((prevIndex) =>
        prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
      )
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setIsFocused(true)
      setSelectedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    }
  }

  const handleSelectChange = (event) => {
    setSelectedOptionIndex(event.target.selectedIndex)
  }

  return (
    <div
      style={{
        width: '20rem',
        position: 'relative'
      }}
    >
      <p
        style={{
          fontSize: '1rem',
          color: `${colors.primary1[200]}`
        }}
      >
        {title}
      </p>
      <label
        style={{
          position: 'relative'
        }}
      >
        <select
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSelectChange}
          value={selectedOptionIndex}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            fontSize: '1rem',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            margin: '0.2rem 0 0 1rem'
          }}
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={index}
              style={{
                backgroundColor: `${colors.primary[300]}`,
                padding: '0.5rem 1rem',
                borderRadius: '4rem',
                color: `${colors.primary[800]}`
              }}
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
