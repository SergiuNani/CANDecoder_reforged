import React, { useState, useRef } from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

export function AutocompleteInput({ options, typeInput }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef()

  const filterOptions = (value) => {
    return options.filter((option) => {
      // Search in all properties of each object
      return Object.values(option).some((propertyValue) =>
        propertyValue.toString().toLowerCase().includes(value.toLowerCase())
      )
    })
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)

    // Filter options based on input value
    const filtered = filterOptions(value)
    setFilteredOptions(filtered)
  }

  const handleOptionClick = (option) => {
    const optionName = Object.values(option).find((value) => value === option.Index)
    setInputValue(optionName || '')
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
    }, 100)
  }

  const arrowIconStyles = {
    position: 'absolute',
    top: '50%',
    right: '-0.1rem',
    transform: `translateY(-50%) rotate(${isFocused ? '-180deg' : '0deg'})`,
    transition: 'transform 0.3s ease'
    // zoom: '3'
  }

  return (
    <div
      ref={inputRef}
      style={{
        // color: `${colors.red[500]}`
        overflow: 'auto',
        height: '75vh',
        width: '15rem',
        border: '1px solid yellow'
      }}
    >
      <label
        style={{
          position: 'relative',
          color: `${colors.red[500]}`
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Type to search..."
          style={{
            backgroundColor: `${colors.primary[100]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem'
          }}
        />
        <span style={arrowIconStyles}>▼</span>
      </label>
      {isFocused && filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                backgroundColor: `${colors.primary[100]}`,
                padding: '0.5rem 1rem',
                border: `1px solid ${colors.grey[100]}`,
                // width: 'auto',
                borderRadius: '4rem',
                cursor: 'pointer',
                // New styles for hover effect
                transition: 'background-color 0.3s',
                ':hover': {
                  backgroundColor: `${colors.primary[500]}`,
                  padding: '1rem'
                }
              }}
            >
              {option.Index}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
