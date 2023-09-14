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
        if (result[0].Info && indexBeingEdited.length > 6) {
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
    function updateLocalStorage(userInput, localStorageKey, dataCollection) {
      const indexFound = dataCollection.findIndex((iteration) => {
        return iteration.Index === userInput.Index
      })

      if (indexFound === -1) {
        dataCollection.push(userInput)
      } else {
        dataCollection[indexFound] = userInput
      }

      localStorage.setItem(localStorageKey, JSON.stringify(dataCollection))
    }

    function handleObjectList(userInput) {
      if (userInput.Index.length > 6) {
        const temp = userInput.Index.slice(0, 6)
        const indexFound = Objects_collection_LS.findIndex((iteration) => {
          return iteration.Index === temp
        })

        if (indexFound !== -1) {
          //Adding a new subindex to the existing Index

          if (!Objects_collection_LS[indexFound].Info) {
            Objects_collection_LS[indexFound].Info = {}
          }
          if (!Objects_collection_LS[indexFound].Info.SubItem) {
            Objects_collection_LS[indexFound].Info.SubItem = []
          }
          const subIndexFound = Objects_collection_LS[indexFound].Info.SubItem.findIndex(
            (iteration) => {
              return iteration.Index === userInput.Index
            }
          )

          if (subIndexFound === -1) {
            //Adding a new subIndex
            Objects_collection_LS[indexFound].Info.SubItem.push(userInput)
          } else {
            //Modifying the existing one
            Objects_collection_LS[indexFound].Info.SubItem[subIndexFound] = userInput
          }
        } else {
          //Creating a new index and subindex

          const ObjectAdd = {
            Index: `${temp}`,
            Name: '',
            Type: '',
            BitSize: 0,
            Info: {
              SubItem: []
            }
          }
          ObjectAdd.Info.SubItem.push(userInput)
          Objects_collection_LS.push(ObjectAdd)
        }

        localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection_LS))
      } else {
        updateLocalStorage(userInput, 'Objects_collection_LS', Objects_collection_LS)
      }
    }

    function handleDataCategory(dataCategory, userInput) {
      switch (dataCategory) {
        case 'thsRegisters':
          updateLocalStorage(userInput, 'Registers_THS_LS', Registers_THS_LS)
          break
        case 'CANopenRegisters':
          updateLocalStorage(userInput, 'Registers_CANopen_LS', Registers_CANopen_LS)
          break
        case 'objectList':
          handleObjectList(userInput)
          break
        default:
          // Handle other data categories if needed
          break
      }
    }

    var userInput = JSON.parse(TextAreaRef.current.value)
    //TODO: Add preventions so that when the user edits the text the app dont break
    handleDataCategory(dataCategory, userInput)
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
          message="Are you sure you want to modify this Object/Register ? "
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
