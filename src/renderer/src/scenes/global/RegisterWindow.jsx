import { Typography } from '@mui/material'
import RegisterComponent from '../../components/Register'
import { xx, Registers_THS, Registers_CANopen, Objects_collection } from '../../data/BigData'
import { AutocompleteInput } from '../../components/ForumsComponents'
export const RegisterWindow = () => {
  return (
    <div className="border1 flex">
      <Typography variant="h3">RegistersWINDOW</Typography>
      <AutocompleteInput options={xx} typeInput="1" />
      <AutocompleteInput options={Objects_collection} typeInput="1" />
      {/* <RegisterComponent register={Registers_THS[10]} value={1234} /> */}
    </div>
  )
}
//  const filterOptions = (value) => {
//    return options.filter((option) => {
//      // Function to recursively search in an object and its sub-objects
//      const searchInObject = (obj) => {
//        return Object.values(obj).some((propertyValue) => {
//          if (propertyValue !== null && typeof propertyValue === 'object') {
//            return searchInObject(propertyValue) // Recurse into sub-objects
//          }
//          return propertyValue.toString().toLowerCase().includes(value.toLowerCase())
//        })
//      }

//      return searchInObject(option)
//    })
//  }
