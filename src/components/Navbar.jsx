import { Button, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <Typography variant='subtitle1'>FAQ Manager - iLabs</Typography>
      <Button sx={{backgroundColor:'#e6f7ff',color:'black'}} variant='subtitle2' startIcon={<AddCircleIcon/>}>Add New Question</Button>
      </div>
    </div>
  )
}

export default Navbar
