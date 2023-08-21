import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { hex2bin } from '../functions/NumberConversion'
import {
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange
} from '../functions/NumberConversion'
const RegisterComponent = ({ register, value }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const resolution = getMaxNumberFromStringRange(register.BitInfo[0].bit)
  var valueInBinary = hex2bin(value, resolution + 1)
  valueInBinary = valueInBinary.split('')

  function SliceBitsGiveJSX(range) {
    range = getRangeNumberFromStringRange(range)
    var sliced = valueInBinary.splice(0, range)
    var export1 = sliced.map((el, index) => (
      <p
        key={range + el + index}
        style={{
          border: `1px solid ${colors.green[300]}`,
          textAlign: 'center',
          fontSize: '1.2rem',
          color: el == 1 ? `${colors.red[500]}` : 'inherit'
        }}
      >
        {el}
      </p>
    ))
    return export1
  }

  console.log('Start-+----------------------------------')
  return (
    <Box width="30%" m="2rem">
      <Box
        style={{
          border: `1px solid ${colors.grey[500]}`,
          width: '100%',
          overflow: 'auto',
          height: '75vh',
          background: `${colors.primary[300]}`
        }}
      >
        {/* {'Index + Title  */}
        <Box
          style={{
            display: 'flex',
            fontSize: '1.2rem',
            color: `${colors.green[300]}`,
            justifyContent: 'center'
          }}
        >
          <h3>
            -- {register.Index} - {register.Title}
          </h3>
        </Box>

        {/* {'One full Line  */}
        {register.BitInfo.map((row) => (
          <Box
            key={row.bit}
            style={{
              border: `1px solid ${colors.grey[500]}`,
              display: 'grid',
              gridTemplateColumns: '3.2rem auto 2rem',
              borderBottom: 'none',
              justifyContent: 'baseline',
              alignItems: 'center',
              padding: '0.3rem',
              marginRight: '0.3rem'
            }}
          >
            {/* {'Element 1 -  Logical bit order'} */}
            <Box
              style={{
                fontSize: ' 1.3rem',
                color: `${colors.green[300]}`,
                textAlign: 'center',
                fontWeight: '1500'
              }}
            >
              {row.bit}
            </Box>
            {/* {'Element 2-  Bit description'} */}
            {row.value ? (
              <Box>
                {row.value.map((member) => (
                  <Box key={member.bitValue} display="flex">
                    {member.bitValue && (
                      <p style={{ color: `${colors.blue[400]}` }}>{member.bitValue}</p>
                    )}
                    <p>&nbsp;-&nbsp;</p>
                    {member.info && <p>{member.info}</p>}
                  </Box>
                ))}
              </Box>
            ) : (
              <Box>
                {row.info && <p>{row.info}</p>}
                {row.zero && <p>{row.zero}</p>}
                {row.one && <p>{row.one}</p>}
              </Box>
            )}
            {/* {'Element 3-  Bit value from prop'} */}
            <Box>{SliceBitsGiveJSX(row.bit)}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default RegisterComponent
