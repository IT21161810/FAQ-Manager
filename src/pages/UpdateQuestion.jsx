import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import './updateQuestion.css'
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {

  const navigate = useNavigate()

  return (
    <div className='updateForm'>
      <h2>Update Question</h2>
      <Box sx={{ width: 500, marginTop: '2rem' }}>
        <Stack sx={{ gap: '1rem', outlineColor: 'blue' }}>
          <TextField fullWidth label="Question" id="fullWidth" />
          <TextField fullWidth label="Category" id="fullWidth" />
          <TextField fullWidth label="Status" id="fullWidth" />
          <Button variant="contained" color="success">
            Update
          </Button>
          <Button onClick={() => navigate('/')} variant="outlined" color="error">
            Close
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Update
