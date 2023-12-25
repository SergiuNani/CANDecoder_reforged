import { useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import {
  hex2bin,
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange,
  bin2hex
} from '../functions/NumberConversion'
import { Registers_CANopen_LS } from '../App'
import { ClickAwayListener } from '@mui/material'

const RegisterComponent = ({
  register,
  value,
  allowClickBox = false,
  tellParentValueChanged,
  ComponentHeight,
  tabIndex
}) => {
  if (register == null) {
    return <p></p>
  }
  if (value == '') value = 0
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const RegisterBodyRef = useRef()

  const resolution = getMaxNumberFromStringRange(register.BitInfo[0].bit)

  var valueInBinary = hex2bin(value, resolution + 1)
  valueInBinary = valueInBinary.split('')

  function MultipleBitsChoise2JSX(rowValue, rowBit, register, index) {
    var copyArray = [...valueInBinary]
    var range = getRangeNumberFromStringRange(rowBit)
    copyArray = copyArray.splice(0, range).join('')
    const findResult = register.BitInfo[index].value.findIndex((iterate) => {
      return iterate.bitValue === copyArray
    })

    return rowValue.map((member, index) => (
      <Box
        key={member.bitValue}
        display="flex"
        color={findResult === index ? `${colors.red[500]}` : 'inherit'}
      >
        {member.bitValue && <p style={{ color: `${colors.blue[400]}` }}>{member.bitValue}</p>}
        <p>&nbsp;-&nbsp;</p>
        {member.info && <p>{member.info}</p>}
      </Box>
    ))
  }

  function SliceBitsGiveJSX(range) {
    range = getRangeNumberFromStringRange(range)
    var sliced = valueInBinary.splice(0, range)

    var export1 = sliced.map((el, index) => (
      <p
        key={range + el + index}
        onClick={handleBitBoxClick}
        //Used to quicly search for each bit value in case of their change when clicking on one
        className="ClickableBit"
        style={{
          border: `1px solid ${colors.green[400]}`,
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: el == 1 ? '500' : 'inherit',
          color: el == 1 ? `${colors.red[500]}` : `${colors.primary[600]}`,
          cursor: allowClickBox ? 'pointer' : 'default'
        }}
      >
        {el}
      </p>
    ))
    return export1
  }
  // When you click one of those boxes and the value turns into 1 or 0
  function handleBitBoxClick(e) {
    if (allowClickBox) {
      if (e.target.innerText == '1') {
        e.target.innerText = '0'
      } else {
        e.target.innerText = '1'
      }

      var newValue = ''
      RegisterBodyRef.current.querySelectorAll('.ClickableBit').forEach((el) => {
        newValue = newValue.concat(el.innerText)
      })
      tellParentValueChanged(bin2hex(newValue), e.target.localName)
    }
  }

  return (
    <Box
      ref={RegisterBodyRef}
      tabIndex={tabIndex}
      style={{
        border: `1px solid ${colors.grey[400]}`,
        width: '100%',
        overflow: 'auto',
        height: ComponentHeight ? ComponentHeight : '70vh',
        background: `${colors.primary[300]}`
      }}
    >
      {/* {'Index + Title  ----------------------------------------*/}
      <Box
        style={{
          display: 'flex',
          fontSize: '1.12rem',
          color: `${colors.yellow[400]}`,

          justifyContent: 'center',
          textAlign: 'center'
        }}
        className="HookForFocus"
      >
        <h5>
          -- {register.Index} - {register.Title}
        </h5>
      </Box>

      {/* {'One full Line  ------------------------------*/}
      {register.BitInfo.map((row, index) => (
        <Box
          key={row.bit}
          style={{
            border: `1px solid ${colors.grey[400]}`,
            display: 'grid',
            gridTemplateColumns: '3.2rem auto 2rem',
            borderBottom: 'none',
            justifyContent: 'baseline',
            alignItems: 'center',
            padding: '0.3rem',
            marginRight: '0.3rem',
            fontSize: '0.9rem',
            color: `${colors.primary[600]}`
          }}
        >
          {/* {'Element 1 -  Logical bit order'} */}
          <Box
            style={{
              fontSize: ' 1.3rem',
              color: `${colors.yellow[500]}`,
              // color: `${colors.red[200]}`,
              textAlign: 'center',
              fontWeight: '1500'
            }}
          >
            {row.bit}
          </Box>
          {/* {'Element 2-  Bit description'} */}
          {row.value ? (
            <Box>
              {row.info && (
                <p
                  style={{
                    color: `${colors.personal[300]}`
                  }}
                >
                  {row.info}
                </p>
              )}
              <Box style={{ marginLeft: '0.5rem' }}>
                {MultipleBitsChoise2JSX(row.value, row.bit, register, index)}
              </Box>
            </Box>
          ) : (
            <Box>
              {row.info && (
                <p
                  style={{
                    color: `${colors.personal[300]}`
                    // textAlign: 'center'
                    // fontSize: '1rem'
                  }}
                >
                  {row.info}
                </p>
              )}
              {row.zero && (
                <p>
                  <span
                    style={{
                      //0 and 1 bits detailing
                      color: `${colors.primary[400]}`,
                      // color: `${colors.yellow[500]}`,
                      fontSize: '1rem',
                      marginLeft: '0.5rem',
                      fontWeight: '750'
                    }}
                  >
                    0{'  '}
                  </span>
                  {row.zero}
                </p>
              )}
              {row.one && (
                <p>
                  <span
                    style={{
                      color: `${colors.primary[400]}`,
                      // color: `${colors.personal[100]}`,

                      fontSize: '1rem',
                      marginLeft: '0.5rem',
                      fontWeight: '750'
                    }}
                  >
                    1{'  '}
                  </span>
                  {row.one}
                </p>
              )}
            </Box>
          )}
          {/* {'Element 3-  Bit value from prop'} */}
          <Box>{SliceBitsGiveJSX(row.bit)}</Box>
        </Box>
      ))}
    </Box>
  )
}

export default RegisterComponent

export const RegisterTooltip = ({ objects, objectData, children }) => {
  objects = objects.split(' / ')
  objectData = objectData.split(' / ')
  var foundRegisters = []
  var registerData = []
  objects.forEach((object, index) => {
    object = object.toUpperCase()
    if (object.slice(0, 2) == '0X' || object.slice(0, 2) == '#X') object = object.slice(2)

    var filterResults = Registers_CANopen_LS.filter((register) => register.Index == object)

    if (filterResults[0]) {
      foundRegisters[foundRegisters.length] = filterResults[0]
      registerData[registerData.length] = objectData[index]
    }
  })

  if (foundRegisters.length == 0) {
    return <>{children}</>
  }

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [showRegister, setShowRegister] = useState(false)

  const [stayOpen, setStayOpen] = useState(false)

  const handleMouseOver = () => {
    if (!stayOpen) {
      setShowRegister(true)
    }
  }

  const handleMouseLeave = () => {
    if (!stayOpen) {
      setShowRegister(false)
    }
  }
  const handleClick = (event) => {
    event.stopPropagation()
    setShowRegister(true)
    setStayOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stayOpen) {
        // Check if the click is outside of the component
        setShowRegister(false)
        setStayOpen(false)
      }
    }
    if (stayOpen) {
      // Attach the event listener to the document when the component is mounted
      document.addEventListener('click', handleClickOutside)

      // Remove the event listener when the component is unmounted
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [stayOpen])

  return (
    <Box
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer'
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div>
        {children}

        {showRegister && (
          <div
            style={{
              position: 'absolute',
              padding: '0.5rem',
              top: '50%',
              right: '100%',
              transform: 'translate(0, -50%)',
              borderRadius: '2rem',
              backgroundColor: 'transparent',
              textAlign: 'left',
              justifyContent: 'center',
              zIndex: '2'
            }}
          >
            <>
              <span
                style={{
                  position: 'absolute',
                  width: '0',
                  height: '0',
                  borderLeft: '0.7rem solid transparent',
                  borderRight: '0.7rem solid transparent',
                  borderBottom: `1.5rem solid ${colors.red[500]}`,
                  top: '50%',
                  right: '0.1rem',
                  transform: 'translateY(-50%) rotate(-90deg)'
                }}
              ></span>
              <div
                style={{
                  display: 'flex',
                  gap: '0.3rem',
                  marginRight: '1.2rem',
                  border: `3px solid ${colors.primary[400]}`,
                  background: `${colors.primary[300]}`,
                  borderRadius: '1rem',
                  padding: '0.8rem',
                  minWidth:
                    foundRegisters.length == 1
                      ? '25rem'
                      : foundRegisters.length == 2
                      ? '50rem'
                      : '60rem'
                }}
              >
                {foundRegisters.map((register, index) => {
                  return (
                    <RegisterComponent
                      key={index}
                      register={register}
                      value={registerData[index]}
                      ComponentHeight="30rem"
                    />
                  )
                })}
              </div>
            </>
          </div>
        )}
      </div>

      {/* Children elements */}
    </Box>
  )
}
