export const RegisterWindow = () => {
  const navigate = useNavigate()

  const [windowsNumber, setWindowsNumber] = useState(1)

  const [ctrlTabCount, setCtrlTabCount] = useState(0)
  console.log(ctrlTabCount)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Tab') {
        event.preventDefault() // Prevent the default behavior (e.g., switching browser tabs)

        setCtrlTabCount((prev) => {
          if (prev == 3) {
            return (prev = 1)
          } else {
            return prev + 1
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      <Header title="Registers Window " subtitle="Look up any register" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem'
          // border: '1px solid yellow'
        }}
      >
        {windowsNumber > 0 && (
          <RegisterSelectionComponent focus={ctrlTabCount == 1 ? true : false} />
        )}
        {windowsNumber > 1 && (
          <RegisterSelectionComponent focus={ctrlTabCount == 2 ? true : false} />
        )}
        {windowsNumber > 2 && (
          <RegisterSelectionComponent focus={ctrlTabCount == 3 ? true : false} />
        )}
      </div>
      {/* ------------------------------------------------ */}
    </div>
  )
}

const RegisterSelectionComponent = ({
  IncrementWindows,
  DecrementWindows,
  ComponentHeight,
  ComponentWidth,
  focus
}) => {
  const [registerSelected, setRegisterSelected] = useState(null)
  const [registerResolution, setRegisterResolution] = useState(0)
  const [valueRegister, setValueRegister] = useState('')
  const [listType, setListType] = useState('CANopen')
  const [inputType, setInputType] = useState('HEX')
  // This is added because of the useEffect of the Input_AutoFormat component
  const [valueRegister4Child, setvalueRegister4Child] = useState('')

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div
      style={
        {
          // display: 'flex',
        }
      }
    >
      {/* Inputs line ---------------------------------------------------- */}
      <Box
        sx={{
          display: 'flex',
          gap: '0.7rem',
          marginBottom: '1rem',
          justifyContent: 'center'
        }}
      >
        {listType == 'CANopen' ? (
          <AutocompleteInput_RegisterList
            type="1"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
            placeholder="Select"
            focus={focus}
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            listType={listType}
            tellParentRegisterChanged={tellParentRegisterChanged}
            placeholder="Select"
            focus={focus}
          />
        )}

        <IconButton onClick={IncrementWindows}>
          <AddIcon />
        </IconButton>
      </Box>
      {/* Register Painting ----------------------------------------------------*/}
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

  const inputRef = useRef()
  const ulRef = useRef()

  useEffect(() => {
    //Reset the input value based on the CANopen vs THS toggle
    setInputValue('')
  }, [listType, resetValueofInputFromParent])

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
