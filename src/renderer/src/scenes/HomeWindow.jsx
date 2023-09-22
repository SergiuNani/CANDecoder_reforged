import { useState, useRef, useEffect } from 'react'
import { Header } from '../components/SmallComponents.jsx'
import { Typography, Box, useTheme, IconButton } from '@mui/material'
import { tokens } from '../theme.js'
import { Objects_collection_LS } from '../App.jsx'
import SearchIcon from '@mui/icons-material/Search'

const HomeWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <Header title="Home Page"></Header>
      <AutocompleteInput_Main placeholder="Search for an Object" />
    </div>
  )
}

export function AutocompleteInput_Main({ placeholder, resetValueofInputFromParent, focus }) {
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
          padding: '1.4rem',
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
            zIndex: '2',
            position: 'absolute',
            top: '100%',
            width: '100%',
            maxHeight: '75vh',
            // color: `${colors.primary[500]}`,
            borderRadius: '0.5rem',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            // border: '1px solid yellow',
            overflow: 'auto',
            fontSize: '1.1rem'
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
                border: `1px solid ${colors.yellow[200]}`,
                borderRadius: '0.8rem',
                padding: '1rem',
                cursor: 'pointer',
                width: '33%',
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
export default HomeWindow
