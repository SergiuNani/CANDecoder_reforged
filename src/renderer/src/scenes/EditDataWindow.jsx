import { Button1, Header } from '../components/SmallComponents'
import { useRef, useState } from 'react'
import {
  AutocompleteInput_RegisterList,
  AutocompleteInput_AllObjects
} from '../components/ForumsComponents'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Typography } from '@mui/material'

import { useTheme } from '@mui/material'
import { tokens } from '../theme'

const EditDataWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  //Origin: objects , ths, canopen
  const [dataCategory, setDataCategory] = useState('objectList')
  const [selectedItem4Edit, setSelectedItem4Edit] = useState('')

  const TextAreaRef = useRef()

  function tellParentCheckBoxChanged(e) {
    setDataCategory(e.target.value)
    setSelectedItem4Edit('')
  }
  function tellParentAutoCompleteValueChanged(e) {
    setSelectedItem4Edit(JSON.stringify(e, null, 2))
  }
  return (
    <div>
      <Header title="Edit Menu" subtitle="Edit any Objects or Registers"></Header>
      {/* DATA category and Search option menu----------- */}
      <div
        style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          // alignContent: 'center',
          padding: ' 0 2rem',
          marginBottom: '1rem'
        }}
      >
        <RowRadioButtonsGroup tellParent={tellParentCheckBoxChanged} defaultValue={dataCategory} />
        {dataCategory == 'objectList' ? (
          <AutocompleteInput_AllObjects
            placeholder="Search"
            title="Search for an Object"
            tellParentObjectChanged={tellParentAutoCompleteValueChanged}
          />
        ) : dataCategory == 'CANopenRegisters' ? (
          <AutocompleteInput_RegisterList
            type="1"
            placeholder="Search"
            title="Search for a CANopen Register"
            tellParentRegisterChanged={tellParentAutoCompleteValueChanged}
            extendStyle="true"
            listType={dataCategory}
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            placeholder="Search"
            title="Search for a Technosoft Register"
            tellParentRegisterChanged={tellParentAutoCompleteValueChanged}
            extendStyle="true"
            listType={dataCategory}
          />
        )}
        <Button1>Restore </Button1>
        <Button1>Restore</Button1>
        <Button1>SAVE</Button1>
      </div>
      {/* EDITOR AREA----------- */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '1.2rem'
        }}
      >
        <textarea
          ref={TextAreaRef}
          name=""
          id=""
          cols="120"
          value={selectedItem4Edit}
          onChange={(e) => {
            setSelectedItem4Edit(e.target.value)
          }}
          style={{
            background: `${colors.primary[300]}`,
            color: `${colors.yellow[600]}`,
            border: `1px solid ${colors.green[400]}`,
            height: '70vh',
            width: '80%'
          }}
        ></textarea>
      </div>
    </div>
  )
}

export default EditDataWindow

function RowRadioButtonsGroup({ tellParent, defaultValue }) {
  const [startValue, setStartValue] = useState(defaultValue)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleOnChange(e) {
    tellParent(e)
    setStartValue(e.target.value)
  }

  return (
    <FormControl
      sx={{
        zoom: '1.1',
        userSelect: 'none'
        // border: '1px solid yellow'
      }}
    >
      <Typography variant="h5">Choose the data category you wish to modify. </Typography>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={handleOnChange}
        name="row-radio-buttons-group"
        value={startValue}
        sx={{
          '& .MuiSvgIcon-root': {
            // fontSize: '1rem'
            color: `${colors.green[400]}`
          }
        }}
      >
        <FormControlLabel value="objectList" control={<Radio />} label="Objects" selected />
        <FormControlLabel value="thsRegisters" control={<Radio />} label="Technosoft Registers" />
        <FormControlLabel value="CANopenRegisters" control={<Radio />} label="CANopen Registers" />
      </RadioGroup>
    </FormControl>
  )
}
