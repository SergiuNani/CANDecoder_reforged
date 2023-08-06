import { Box } from '@mui/material'
import { Header } from '../components/header'
import RenderExpandCellGrid from './DataGrid'
const Decode_CAN_LOG = () => {
  return (
    <Box>
      <Header title="Decode a CAN LOG "></Header>
      <RenderExpandCellGrid />
    </Box>
  )
}

export default Decode_CAN_LOG
