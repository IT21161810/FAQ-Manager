import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './table.css'
import { Button, IconButton } from '@mui/material';

const FaqTable = () => {
  return (
    <TableContainer className='tableContainer'>
      <Paper sx={{ width: "85%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'blue' }}>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Question</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">customerName</TableCell>
              <TableCell align="center">mobileNumber</TableCell>
              <TableCell align="center">city</TableCell>
              <TableCell align="center">
                <Button sx={{padding:'0.5rem',backgroundColor:'lightblue',color:'black',fontSize:'13px'}}>Published</Button>
              </TableCell>
              <TableCell align="center">
                <IconButton sx={{ cursor: 'pointer' }}><MoreHorizIcon /></IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>

  )
}

export default FaqTable
