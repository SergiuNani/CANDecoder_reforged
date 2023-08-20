import { Typography } from '@mui/material'
import RegisterComponent from '../../components/Register'
import { Registers_THS, Registers_CANopen } from '../../data/BigData'

export const RegisterWindow = () => {
  return (
    <div className="border1">
      <Typography variant="h3">RegistersWINDOW</Typography>
      <RegisterComponent register={Registers_THS[10]} value={1234} />
    </div>
  )
}
