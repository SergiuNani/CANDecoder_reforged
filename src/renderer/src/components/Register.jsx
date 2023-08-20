import { Typography } from '@mui/material'
import { Box } from '@mui/material'
const RegisterComponent = ({ register, value }) => {
  return (
    <Box width="30%">
      //Parent
      <Box className="border " width="100%">
        <Typography variant="h4">{register.Title}</Typography>
        {register.BitInfo.map((row) => (
          <Box key={row.bit} border="1px solid green">
            <p>{row.bit}</p>
            {row.value ? (
              row.value.map((member) => (
                <div key={member.bitValue}>
                  {member.bitValue && <p>{member.bitValue}</p>}
                  {member.info && <p>{member.info}</p>}
                </div>
              ))
            ) : (
              <div>
                {row.info && <p>{row.info}</p>}
                {row.zero && <p>{row.zero}</p>}
                {row.one && <p>{row.one}</p>}
              </div>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default RegisterComponent
