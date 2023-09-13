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
import { Objects_collection_LS, Registers_CANopen_LS, Registers_THS_LS } from '../App'
import { Objects_collection, Registers_THS, Registers_CANopen } from '../data/BigData'

import { ConfirmationModal } from '../components/FloatingComponents'
const EditDataWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  //Origin: objects , ths, canopen
  const [dataCategory, setDataCategory] = useState('objectList')
  const [indexBeingEdited, setIndexBeingEdited] = useState(null)
  const [selectedItem4Edit, setSelectedItem4Edit] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const TextAreaRef = useRef()

  function tellParentCheckBoxChanged(e) {
    setDataCategory(e.target.value)
    setSelectedItem4Edit('')
  }
  function tellParentAutoCompleteValueChanged(e) {
    setIndexBeingEdited(e.Index)
    setSelectedItem4Edit(JSON.stringify(e, null, 2))
  }

  function handleRestoreDefault() {
    // Here we will look at the original data saved inside the BigData.js file to restore the default info
    if (indexBeingEdited) {
      if (dataCategory == 'thsRegisters') {
        const result = Registers_THS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      } else if (dataCategory == 'CANopenRegisters') {
        const result = Registers_CANopen.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      } else if (dataCategory == 'objectList') {
        var temp = ''
        var result
        if (indexBeingEdited.length > 6) {
          //in case of  "Index": "#x1011_01" we gon search for 1011
          temp = indexBeingEdited.slice(0, 6)
        } else temp = indexBeingEdited

        result = Objects_collection.filter((option) => {
          return option.Index.toLocaleLowerCase() == temp.toLocaleLowerCase()
        })
        if (indexBeingEdited.length > 6) {
          result = result[0].Info.SubItem.filter((option) => {
            return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
          })
        }
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      }
    }
  }

  function handleRestoreLastSave() {
    // Here we will look at the original data saved inside the LocalServer file to restore the last saved info
    if (indexBeingEdited) {
      if (dataCategory == 'thsRegisters') {
        const result = Registers_THS_LS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      } else if (dataCategory == 'CANopenRegisters') {
        const result = Registers_CANopen_LS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      } else if (dataCategory == 'objectList') {
        var temp = ''
        var result
        if (indexBeingEdited.length > 6) {
          //in case of  "Index": "#x1011_01" we gon search for 1011
          temp = indexBeingEdited.slice(0, 6)
        } else temp = indexBeingEdited

        result = Objects_collection_LS.filter((option) => {
          return option.Index.toLocaleLowerCase() == temp.toLocaleLowerCase()
        })
        if (indexBeingEdited.length > 6) {
          result = result[0].Info.SubItem.filter((option) => {
            return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
          })
        }
        setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      }
    }
  }

  function handleSAVE() {
    if (!TextAreaRef.current.value == '') {
      setIsModalOpen(true)
    }
  }

  function tellParentModalClosed() {
    setIsModalOpen(false)
  }
  function tellParentModalConfirmed() {
    // User has selected confirm on the Modal pop window
    var userInput = JSON.parse(TextAreaRef.current.value)

    if (dataCategory == 'thsRegisters') {
      const indexFound = Registers_THS_LS.findIndex((iteration) => {
        return iteration.Index == userInput.Index
      })
      //TODO: the user might write some BS , make sure the dude doesnt write shit to break the code
      if (indexFound == -1) {
        Registers_THS_LS.push(userInput)
      } else {
        Registers_THS_LS[indexFound] = userInput
      }
      localStorage.setItem('Registers_THS_LS', JSON.stringify(Registers_THS_LS))
    } else if (dataCategory == 'CANopenRegisters') {
      const indexFound = Registers_CANopen_LS.findIndex((iteration) => {
        return iteration.Index == userInput.Index
      })
      //TODO: the user might write some BS , make sure the dude doesnt write shit to break the code
      if (indexFound == -1) {
        Registers_CANopen_LS.push(userInput)
      } else {
        Registers_CANopen_LS[indexFound] = userInput
      }
      localStorage.setItem('Registers_CANopen_LS', JSON.stringify(Registers_CANopen_LS))
    } else if (dataCategory == 'objectList') {
      if (userInput.Index.length > 6) {
        const temp = userInput.Index.slice(0, 6)
        const indexFound = Objects_collection_LS.findIndex((iteration) => {
          return iteration.Index == temp
        })
        console.log(Objects_collection_LS[indexFound].Info.SubItem)
        const subIndexFound = Objects_collection_LS[indexFound].Info.SubItem.findIndex(
          (iteration) => {
            return iteration.Index == userInput.Index
          }
        )
        //TODO: the user might write some BS , make sure the dude doesnt write shit to break the code
        if (indexFound == -1) {
          console.log(`BS`)
          Objects_collection_LS[indexFound].Info.SubItem.push(userInput)
        } else {
          console.log(`BS2`)
          Objects_collection_LS[indexFound].Info.SubItem[subIndexFound] = userInput
        }
        localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection_LS))

        console.log(`---------`)
      } else {
        const indexFound = Objects_collection_LS.findIndex((iteration) => {
          return iteration.Index == userInput.Index
        })
        //TODO: the user might write some BS , make sure the dude doesnt write shit to break the code
        if (indexFound == -1) {
          Objects_collection_LS.push(userInput)
        } else {
          Objects_collection_LS[indexFound] = userInput
        }
        localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection_LS))
      }
    }
  }
  return (
    <div>
      <Header title="Edit Menu" subtitle="Edit any Objects or Registers"></Header>
      {/* DATA category and Search option menu----------- */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // flexDirection: 'column',
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
        <ConfirmationModal
          isModalOpen={isModalOpen}
          tellParentModalClosed={tellParentModalClosed}
          tellParentModalConfirmed={tellParentModalConfirmed}
        />

        <div>
          <Button1 onClick={handleRestoreDefault}>Restore Default </Button1>
          <Button1 onClick={handleRestoreLastSave}>Restore Last Save</Button1>
          <Button1 onClick={handleSAVE}>SAVE</Button1>
        </div>
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
