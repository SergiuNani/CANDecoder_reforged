import { Typography } from '@mui/material'
import { Registers_CANopen } from '../../data/BigData'

export const RegisterWindow = () => {
  return (
    <div className="border danger">
      <Typography variant="h3">Registers</Typography>
      <ul>
        {Registers_CANopen.map((register) => (
          <li key={register.Index} className="border1">
            <Typography variant="h4">Register : {register.Index}</Typography>
            <Typography variant="h5">Title : {register.Title}</Typography>
            {register.BitInfo.map((bitValue) => (
              <div className="border mb-3" key={bitValue.bit}>
                <span>{bitValue.bit}</span>
                {bitValue.zero && (
                  <span className="text-gray-300">
                    {' '}
                    - <span className="text-blue-400">Zero</span>: {bitValue.zero}
                  </span>
                )}
                {bitValue.zero && <br></br>}

                {bitValue.one && (
                  <span className="text-gray-300">
                    {' '}
                    - - <span className="text-blue-400">One</span>: {bitValue.one}
                  </span>
                )}
                {bitValue.info && <span className="text-indigo-300"> - INFO: {bitValue.info}</span>}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
