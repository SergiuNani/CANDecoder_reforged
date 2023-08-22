import { Typography } from '@mui/material'
import RegisterComponent from '../../components/Register'
import { Registers_THS, Registers_CANopen, Objects_collection } from '../../data/BigData'
import { AutocompleteInput } from '../../components/ForumsComponents'
export const RegisterWindow = () => {
  return (
    <div className="border1 flex">
      <Typography variant="h3">RegistersWINDOW</Typography>
      <AutocompleteInput options={Objects_collection} typeInput="1" />
      <AutocompleteInput options={Objects_collection} typeInput="1" />
      {/* <RegisterComponent register={Registers_THS[10]} value={1234} /> */}
    </div>
  )
}
