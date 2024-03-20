import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'
import FaqModal from './FaqModal';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='navbar'>
        <Typography variant='subtitle1'>FAQ Manager - iLabs</Typography>
        <Button
          className='addBtn'
          onClick={openPopUp}
          sx={{ backgroundColor: 'aliceblue', color: 'black', '&:hover': { backgroundColor: 'aliceblue' } }}
          variant='body1'
          startIcon={<AddCircleIcon sx={{ color: '#167ade' }} />}
        >
          Add New Question
        </Button>
      </div>
      <FaqModal open={open} handleClose={closePopUp} />
    </div>
  );
};

export default Navbar
