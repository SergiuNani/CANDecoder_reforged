import { Typography } from '@mui/material'
import RegisterComponent from '../../components/Register'
import { xx, Registers_THS, Registers_CANopen, Objects_collection } from '../../data/BigData'
import { AutocompleteInput_AllObjects, Input_Autocomplete } from '../../components/ForumsComponents'
export const RegisterWindow = () => {
  return (
    <div className="border1 flex">
      <Typography variant="h3">RegistersWINDOW</Typography>
      {/* <RegisterComponent register={Registers_THS[10]} value={1234} /> */}
      {/* ------------------------------------------------ */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <AutocompleteInput_AllObjects
          placeholder="search object"
          title="SDO object one foffffffffffffffffffffffffffffffffffr the..."
        />
        <AutocompleteInput_AllObjects title="MANAAAAAAAA" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Input_Autocomplete placeholder="search object" title="TYPE BITCH..." />
        <Input_Autocomplete title="MANAAAAAAAA" />
      </div>
    </div>
  )
}
