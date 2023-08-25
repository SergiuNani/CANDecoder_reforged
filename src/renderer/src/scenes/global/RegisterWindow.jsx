import { Typography } from '@mui/material'
import RegisterComponent from '../../components/Register'
import { xx, Registers_THS, Registers_CANopen, Objects_collection } from '../../data/BigData'
import { AutocompleteInput_AllObjects, Input_AutoFormat } from '../../components/ForumsComponents'
import { filterHex, filterDecimal, filterDecimalWithComma } from '../../functions/NumberConversion'
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
        <Input_AutoFormat
          placeholder="FilterHex 16"
          title="FilterHex 16"
          callback={filterHex}
          resolution="16"
        />
        <Input_AutoFormat
          placeholder="FilterHex 16"
          title="FilterHex 32"
          callback={filterHex}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="FilterHex 0"
          title="FilterHex 0"
          callback={filterHex}
          resolution="0"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 0"
          title="filterDecimal 0"
          callback={filterDecimal}
          resolution="0"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 16"
          title="filterDecimal 16"
          callback={filterDecimal}
          resolution="16"
        />
        <Input_AutoFormat
          placeholder="filterDecimal 32"
          title="filterDecimal 32"
          callback={filterDecimal}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="filterDecimalWithComma 32"
          title="filterDecimalWithComma 32"
          callback={filterDecimalWithComma}
          resolution="32"
        />
        <Input_AutoFormat
          placeholder="filterDecimalWithComma 16"
          title="filterDecimalWithComma 16"
          callback={filterDecimalWithComma}
          resolution="16"
        />
        <Input_AutoFormat
          placeholder="filterDecimalWithComma 0"
          title="filterDecimalWithComma 0"
          callback={filterDecimalWithComma}
          resolution="0"
        />
      </div>
    </div>
  )
}
