import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './updateQuestion.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FaqServices from '../services/FaqServices'

const Update = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [faq, setFaq] = useState({
    id:id,
    question: "",
    category: "",
    status: ""
  });

  const setInputValue = async (e) => {
    const { name, value } = e.target;
    setFaq({ ...faq, [name]: value })
  }

  useEffect(() => {
    const getQuestion = async (id) => {
      try {
        const question = await FaqServices.getQuestionById(id);
        setFaq(question.data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };
    getQuestion(id);
  }, []);


  const UpdateQuestion =(e) => {
    e.preventDefault()
    FaqServices.updateQuestion(faq,id)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const close = () => {
    navigate('/')
  }

  return (
    <div className='updateForm'>
      <h2>Update Question</h2>
      <Box sx={{ width: 500, marginTop: '2rem' }}>
        <Stack sx={{ gap: '1rem', outlineColor: 'blue' }}>
          <TextField fullWidth label="Question" value={faq.question} name='question' onChange={setInputValue} id="fullWidth" />
          <TextField fullWidth label="Category" value={faq.category} name='category' onChange={setInputValue} id="fullWidth" />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name='status'
              value={faq.status}
              label="Age"
              onChange={setInputValue}
            >
              <MenuItem value={"Published"}>Published</MenuItem>
              <MenuItem value={"Draft"}>Draft</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={UpdateQuestion}  color="success">
            Update
          </Button>
          <Button variant="outlined" onClick={close} color="error">
            Close
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Update
