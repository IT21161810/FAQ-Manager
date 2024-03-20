import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './updateQuestion.css'
import {useNavigate, useParams } from 'react-router-dom'
import FaqServices from '../services/FaqServices'

const ViewQuestion = () => {

  const navigate = useNavigate();
  const [faq, setFaq] = useState({});
  const { id } = useParams();
  console.log(faq)
  const getQuestion = async (id) => {
    try {
      const question = await FaqServices.getQuestionById(id);
      setFaq(question.data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  useEffect(() => {
    getQuestion(id);
  },[]); 

  return (
    <div className='updateForm'>
      <h2>View  Question</h2>
      <Box sx={{ width: 500, marginTop: '2rem' }}>
        <Stack sx={{ gap: '1rem', outlineColor: 'blue' }}>
          <TextField fullWidth  value={faq.question} id="fullWidth" />
          <TextField fullWidth  value={faq.category} id="fullWidth" />
          <TextField fullWidth  value={faq.status} id="fullWidth" />
          <Button onClick={() => navigate('/')} variant="outlined" color="error">
            Close
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default ViewQuestion
