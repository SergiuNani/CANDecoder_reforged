import React, { useState, useRef } from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Objects_collection } from '../data/BigData'
import { filterHex, filterDecimal, filterDecimalWithComma } from '../functions/NumberConversion'
export function AutocompleteInput_AllObjects({ title, placeholder }) {
  var options = Objects_collection
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
  }

  const handleFocus = () => {
    setIsFocused(true)
    setFilteredOptions(filterOptions(inputValue)) // Show all options when focused
  }

  const handleBlur = () => {
    // Delay hiding the options to give time for a click to register
    setTimeout(() => {
      if (!inputRef.current.contains(document.activeElement)) {
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
    color: `${colors.blue[500]}`
    // zoom: '1.1'
  }

  return (
    <div
      ref={inputRef}
      style={{
        // overflow: 'auto',
        width: '15rem',
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

export function Input_AutoFormat({ title, placeholder, callback, resolution }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e) {
    setInputValue(callback(e.target.value, resolution))
  }

  return (
    <div
      style={{
        // overflow: 'auto',
        width: '15rem',
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
            margin: '0.2rem 0 0 1rem',
            fontSize: '1rem'
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
        width: '15rem',
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
            // outlineStyle: 'none',
            margin: '0.2rem 0 0 1rem',
            fontSize: '1rem'
          }}
        >
          {/* <option value={-1}>Select an option</option> */}
          {options.map((option, index) => (
            <option
              key={index}
              value={index}
              styple={{
                backgroundColor: `${colors.primary[300]}`,

                padding: '0.5rem 1rem',
                // border: `1px solid ${colors.red[500]}`,
                // borderRadius: '4rem',
                cursor: 'pointer'
              }}
              className="selectOption"
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
