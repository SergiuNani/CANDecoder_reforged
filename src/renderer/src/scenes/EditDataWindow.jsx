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
import { SnackBarMessage } from '../components/FloatingComponents'
import {
  getMaxNumberFromStringRange,
  getRangeNumberFromStringRange
} from '../functions/NumberConversion'
const EditDataWindow = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  //Origin: objects , ths, canopen
  const [dataCategory, setDataCategory] = useState('objectList')
  const [indexBeingEdited, setIndexBeingEdited] = useState(null)
  const [selectedItem4Edit, setSelectedItem4Edit] = useState('')
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [openSnackBarSuccess, setOpenSnackBarSuccess] = useState(false)
  const [openSnackBarError, setOpenSnackBarError] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState('')

  const [resetValueofInput, setResetValueofInput] = useState(0)
  const TextAreaRef = useRef()

  var SnackbarMessageGlobal

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
      var result
      if (dataCategory == 'thsRegisters') {
        result = Registers_THS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
      } else if (dataCategory == 'CANopenRegisters') {
        result = Registers_CANopen.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
      } else if (dataCategory == 'objectList') {
        var temp = ''

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
      }
      setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      setMessageSnackbar('Object/Register successfully restored from the Default DataBase ')
      setOpenSnackBarSuccess(true)
    } else {
      setMessageSnackbar('Please select an Object/Register before restoring anything ! ')
      setOpenSnackBarError(true)
    }
  }

  function handleRestoreLastSave() {
    // Here we will look at the original data saved inside the LocalServer file to restore the last saved info
    if (indexBeingEdited) {
      var result
      if (dataCategory == 'thsRegisters') {
        result = Registers_THS_LS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
      } else if (dataCategory == 'CANopenRegisters') {
        result = Registers_CANopen_LS.filter((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
      } else if (dataCategory == 'objectList') {
        var temp = ''

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
      }
      setSelectedItem4Edit(JSON.stringify(result[0], null, 2))
      setMessageSnackbar('Object/Register successfully restored from your local Data ')
      setOpenSnackBarSuccess(true)
    } else {
      setMessageSnackbar('Please select an Object/Register before restoring anything ! ')
      setOpenSnackBarError(true)
    }
  }

  //-------------------HANDLE SAVE------------------------ //
  function handleSAVE() {
    if (!TextAreaRef.current.value == '') {
      setIsSaveModalOpen(true)
    } else {
      setMessageSnackbar('There is nothing to save ! ')
      setOpenSnackBarError(true)
    }
  }

  function tellParentModalClosed() {
    setIsSaveModalOpen(false)
  }
  function handleConfirmationSAVE() {
    function updateLocalStorage(userInput, localStorageKey, dataCollection) {
      const indexFound = dataCollection.findIndex((iteration) => {
        return iteration.Index === userInput.Index
      })

      if (indexFound === -1) {
        dataCollection.push(userInput)
      } else {
        dataCollection[indexFound] = userInput
      }
      setMessageSnackbar('The Object/Register was successfully saved ')
      setOpenSnackBarSuccess(true)
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
        setMessageSnackbar('The subIndex of the Object was successfully saved !')
        setOpenSnackBarSuccess(true)
        localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection_LS))
      } else {
        updateLocalStorage(userInput, 'Objects_collection_LS', Objects_collection_LS)
      }
    }

    function handleDataCategory(dataCategory, userInput) {
      switch (dataCategory) {
        case 'thsRegisters':
          if (check4BadRegisters(userInput)) return 0
          updateLocalStorage(userInput, 'Registers_THS_LS', Registers_THS_LS)
          break
        case 'CANopenRegisters':
          if (check4BadRegisters(userInput)) return 0
          updateLocalStorage(userInput, 'Registers_CANopen_LS', Registers_CANopen_LS)
          break
        case 'objectList':
          //AIP ----
          if (![6, 9].includes(userInput.Index.length)) {
            setMessageSnackbar(
              'The format for the INDEX property is wrong. It should be something like this: "#x1001" or "x1001_01"'
            )
            return setOpenSnackBarError(true)
          } else if (!userInput.Index || !userInput.Name || !userInput.BitSize) {
            setMessageSnackbar(
              'Please make sure that "Index", "Name" and "BitSize" fields are present'
            )
            return setOpenSnackBarError(true)
          } else if (![8, 16, 32].includes(userInput.BitSize)) {
            setMessageSnackbar(
              'The "BitSize" property must be a number which is contained in this array ["8","16","32"]'
            )
            return setOpenSnackBarError(true)
          }
          handleObjectList(userInput)
          break
        default:
          // Handle other data categories if needed
          break
      }
    }
    try {
      var userInput = JSON.parse(TextAreaRef.current.value)

      handleDataCategory(dataCategory, userInput)
    } catch (error) {
      console.log(error)
      setMessageSnackbar('The final text does not result in an JSON object !')
      setOpenSnackBarError(true)
    }
  }
  function check4BadRegisters(userInput) {
    //return true if error ---- AIP ----
    if (!userInput.Index || !userInput.Title || !userInput.BitInfo) {
      setMessageSnackbar('Please make sure that "Index", "Title" and "BitInfo" fields are present')
      setOpenSnackBarError(true)
      return true
    }
    var RegisterLength = getMaxNumberFromStringRange(userInput.BitInfo[0].bit)
    if (![31, 15, 7].includes(RegisterLength)) {
      setMessageSnackbar(
        'The "bit" prop from the first "object" within the "BitInfo" property  must be a number which is contained in this array ["7","15","31"]. Example: "bit":"31...18" or simply "31"'
      )
      setOpenSnackBarError(true)
      return true
    }
    var nextBit = RegisterLength
    for (let i = 0; i < userInput.BitInfo.length; i++) {
      if (userInput.BitInfo[i + 1]) {
        var range = getRangeNumberFromStringRange(userInput.BitInfo[i].bit)
        nextBit = nextBit - range
        var actualNextBit = getMaxNumberFromStringRange(userInput.BitInfo[i + 1].bit)
        if (nextBit != actualNextBit) {
          setMessageSnackbar(
            `All bits number and description from "${RegisterLength}" till "0" must be included. Bit "${nextBit}" is missing ! OR there is a bit which is has been declared twice `
          )
          setOpenSnackBarError(true)
          i = userInput.BitInfo.length
          return true
        }
      }
    }
  }
  //-------------------HANDLE DELETE------------------------ //

  function handleDelete() {
    if (indexBeingEdited) {
      setIsDeleteModalOpen(true)
    } else {
      setMessageSnackbar('There is nothing to delete !')
      setOpenSnackBarError(true)
    }
  }

  function tellParentDeleteModalClosed() {
    setIsDeleteModalOpen(false)
  }

  function handleConfirmationDelete() {
    var result
    if (dataCategory == 'thsRegisters') {
      result = Registers_THS_LS.findIndex((option) => {
        return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
      })
      if (result != -1) {
        Registers_THS_LS.splice(result, 1)
        setIndexBeingEdited(null)
        setSelectedItem4Edit('')
        setResetValueofInput((p) => p + 1)
        localStorage.setItem('Registers_THS_LS', JSON.stringify(Registers_THS_LS))
      }
    } else if (dataCategory == 'CANopenRegisters') {
      result = Registers_CANopen_LS.findIndex((option) => {
        return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
      })

      if (result != -1) {
        Registers_CANopen_LS.splice(result, 1)
        setIndexBeingEdited(null)
        setSelectedItem4Edit('')
        setResetValueofInput((p) => p + 1)
        localStorage.setItem('Registers_CANopen_LS', JSON.stringify(Registers_CANopen_LS))
      }
    } else if (dataCategory == 'objectList') {
      var temp = ''

      if (indexBeingEdited.length > 6) {
        //in case of  "Index": "#x1011_01" we gon search for 1011
        temp = indexBeingEdited.slice(0, 6)

        var result1 = Objects_collection_LS.findIndex((option) => {
          return option.Index.toLocaleLowerCase() == temp.toLocaleLowerCase()
        })
        result = Objects_collection_LS[result1].Info.SubItem.findIndex((option) => {
          return option.Index.toLocaleLowerCase() == indexBeingEdited.toLocaleLowerCase()
        })
        if (result != -1) {
          Objects_collection_LS[result1].Info.SubItem.splice(result, 1)
          setIndexBeingEdited(null)
          setSelectedItem4Edit('')
          setResetValueofInput((p) => p + 1)
          return localStorage.setItem(
            'Objects_collection_LS',
            JSON.stringify(Objects_collection_LS)
          )
        }
      } else {
        temp = indexBeingEdited
        result = Objects_collection_LS.findIndex((option) => {
          return option.Index.toLocaleLowerCase() == temp.toLocaleLowerCase()
        })

        if (result != -1) {
          Objects_collection_LS.splice(result, 1)
          setIndexBeingEdited(null)
          setSelectedItem4Edit('')
          setResetValueofInput((p) => p + 1)
          localStorage.setItem('Objects_collection_LS', JSON.stringify(Objects_collection_LS))
        }
      }
    }
    setMessageSnackbar('The Object/Register was successfully deleted !')
    setOpenSnackBarSuccess(true)
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
            resetValueofInputFromParent={resetValueofInput}
          />
        ) : dataCategory == 'CANopenRegisters' ? (
          <AutocompleteInput_RegisterList
            type="1"
            placeholder="Search"
            title="Search for a CANopen Register"
            tellParentRegisterChanged={tellParentAutoCompleteValueChanged}
            extendStyle="true"
            listType={dataCategory}
            resetValueofInputFromParent={resetValueofInput}
          />
        ) : (
          <AutocompleteInput_RegisterList
            type="2"
            placeholder="Search"
            title="Search for a Technosoft Register"
            tellParentRegisterChanged={tellParentAutoCompleteValueChanged}
            extendStyle="true"
            listType={dataCategory}
            resetValueofInputFromParent={resetValueofInput}
          />
        )}
        <ConfirmationModal
          isModalOpen={isSaveModalOpen}
          tellParentModalClosed={tellParentModalClosed}
          tellParentModalConfirmed={handleConfirmationSAVE}
          message="Are you sure you want to modify this Object/Register ? "
        />
        <ConfirmationModal
          isModalOpen={isDeleteModalOpen}
          tellParentModalClosed={tellParentDeleteModalClosed}
          tellParentModalConfirmed={handleConfirmationDelete}
          message="Are you sure you want to permanently remove this Object/Register ? "
        />
        {openSnackBarSuccess && (
          <SnackBarMessage
            message={messageSnackbar}
            severity="success"
            isOpen={openSnackBarSuccess}
            closeSnackBarParent={() => {
              setOpenSnackBarSuccess(false)
            }}
          />
        )}
        {openSnackBarError && (
          <SnackBarMessage
            message={messageSnackbar}
            severity="error"
            isOpen={openSnackBarError}
            closeSnackBarParent={() => {
              setOpenSnackBarError(false)
            }}
          />
        )}
        <div>
          <Button1 onClick={handleDelete}>Delete Obj/Reg </Button1>
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
