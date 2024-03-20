import { Button, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <Typography variant='subtitle1'>FAQ Manager - iLabs</Typography>
        <Button className='addBtn' sx={{
          backgroundColor: 'aliceblue',color: 'black', '&:hover': {
            backgroundColor: 'aliceblue',
          },
        }} variant='body1' startIcon={<AddCircleIcon sx={{color:'#167ade'}}/>}>Add New Question</Button>
      </div>
    </div>
  )
}

export default Navbar
