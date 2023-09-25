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

export function AutocompleteInput_AllObjects({
  title,
  placeholder,
  tellParentObjectChanged,
  resetValueofInputFromParent,
  focus
}) {
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
          autoFocus={focus}
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
            // backgroundColor: `${colors.primary[500]}`,
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
  extendStyle = false,
  resetValueofInputFromParent,
  focus
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

  const divParentRef = useRef()
  const inputRef = useRef()
  const ulRef = useRef()

  useEffect(() => {
    //Reset the input value based on the CANopen vs THS toggle
    setInputValue('')
  }, [listType, resetValueofInputFromParent])

  useEffect(() => {
    if (focus) {
      inputRef.current.focus()
    }
  }, [focus])

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
      if (divParentRef.current && !divParentRef.current.contains(document.activeElement)) {
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
      ref={divParentRef}
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
          ref={inputRef}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          autoFocus={focus}
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
            width: extendStyle ? '90%' : '450%',
            maxHeight: '50vh',
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
  inputType,
  tellParentValueChanged,
  registerChanged,
  forceValueFromParent,
  iteration,
  blockValueReset
}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (!blockValueReset) {
      setInputValue('')
      tellParentValueChanged('')
    }
  }, [inputType, registerChanged])

  useEffect(() => {
    //For RegisterComponent - When user clicks on the multiBitBoxes to change the value
    if (inputType == 'DEC') {
      setInputValue(hexToDec(forceValueFromParent, resolution))
    } else {
      setInputValue(forceValueFromParent)
    }
  }, [forceValueFromParent])

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
          marginBottom: '0.2rem',
          textAlign: 'center'
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
            backgroundColor: iteration == '1' ? `${colors.grey[500]}` : `${colors.primary[300]}`,
            padding: iteration == '1' ? '0.2rem' : '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            fontSize: '1rem',
            width: iteration == '1' ? '5rem' : '7rem',
            textAlign: iteration == '1' ? 'center' : 'inherit'
          }}
        />
      </label>
    </div>
  )
}

export function Input_ChooseOption({
  title,
  placeholder,
  tellParentOptionChanged,
  focus,
  array,
  forceValueReset,
  forceValueReset1
}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [inputValue, setInputValue] = useState(array[0])
  const options = array
  const [isFocused, setIsFocused] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
  const [scrollDirection, setScrollDirection] = useState(null)
  const inputRef = useRef()
  const ulRef = useRef()

  useEffect(() => {
    setInputValue(array[0])
  }, [forceValueReset, forceValueReset1])

  useEffect(() => {
    const wheelHandler = (event) => {
      handleWheelEvent(event)
    }

    window.addEventListener('wheel', wheelHandler)

    return () => {
      window.removeEventListener('wheel', wheelHandler)
    }
  }, [])

  useEffect(() => {
    tellParentOptionChanged(inputValue)
  }, [inputValue])
  function handleWheelEvent(event) {
    if (inputRef.current.contains(event.target)) {
      setInputValue((prevInputValue) => {
        const currentIndex = options.findIndex((iterate) => iterate === prevInputValue)

        if (event.deltaY > 0 && currentIndex < options.length - 1) {
          const nextOption = options[currentIndex + 1]
          return nextOption
        } else if (event.deltaY < 0 && currentIndex > 0) {
          const prevOption = options[currentIndex - 1]
          return prevOption
        }

        return prevInputValue
      })
    }
  }

  const handleOptionClick = (option) => {
    setInputValue(option)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    // Delay hiding the options to give time for a click to register
    setTimeout(() => {
      if (inputRef.current && !inputRef.current.contains(document.activeElement)) {
        setIsFocused(false)
      }
    }, 200)
  }
  function handleInputChange() {
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
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (selectedOptionIndex >= 0 && selectedOptionIndex < options.length) {
        handleOptionClick(options[selectedOptionIndex])
        setIsFocused(false)
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
        position: 'relative'
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontSize: '1rem',
          color: `${colors.primary1[200]}`,
          marginBottom: '0.2rem',
          textAlign: 'center'
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
          autoFocus={focus}
          placeholder={placeholder}
          style={{
            backgroundColor: `${colors.primary[300]}`,
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: `${colors.red[200]}`,
            outline: 'none',
            width: '7rem',
            fontSize: '1rem'
          }}
        />
        <span style={arrowIconStyles}>▼</span>
      </label>
      {isFocused && options.length > 0 && (
        <ul
          ref={ulRef}
          style={{
            zIndex: '2',
            position: 'absolute',
            top: '100%',
            width: '100%',
            maxHeight: '50vh',
            // backgroundColor: `${colors.primary[500]}`,
            borderRadius: '0.5rem',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            // border: '1px solid yellow',
            marginTop: '0.5rem',

            overflow: 'auto'
          }}
        >
          {options.map((option, index) => (
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
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
