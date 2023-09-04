import { Header } from '../components/header'
import { useState } from 'react'
import {
  AutocompleteInput_RegisterList,
  AutocompleteInput_AllObjects
} from '../components/ForumsComponents'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
const EditDataWindow = () => {
  //Origin: objects , ths, canopen
  const [origin, setOrigin] = useState('ths')
  const [selectedItem4Edit, setSelectedItem4Edit] = useState(null)

  function tellParentSelectedItemChanged(e) {
    setSelectedItem4Edit(e)
  }

  return (
    <div>
      <Header title="Edit Menu" subtitle="Edit any Objects or Registers"></Header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: ' 0 2rem'
        }}
      >
        <RowRadioButtonsGroup />
        {origin == 'objects' ? (
          <AutocompleteInput_AllObjects placeholder="Search" title="Search for an Object" />
        ) : origin == 'canopen' ? (
          <AutocompleteInput_RegisterList
            type="1"
            placeholder="Search"
            title="Search for a CANopen Register"
            tellParentRegisterChanged={tellParentSelectedItemChanged}
            extendStyle="true"
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            placeholder="Search"
            title="Search for a Technosoft Register"
            tellParentRegisterChanged={tellParentSelectedItemChanged}
            extendStyle="true"
          />
        )}
      </div>
    </div>
  )
}

export default EditDataWindow

function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Choose the data category you wish to modify.{' '}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Objects" control={<Radio />} label="Objects" selected />
        <FormControlLabel
          value="Technosoft Registers"
          control={<Radio />}
          label="Technosoft Registers"
        />
        <FormControlLabel value="CANopen Registers" control={<Radio />} label="CANopen Registers" />
      </RadioGroup>
    </FormControl>
  )
}
