import {
    Button, Dialog, DialogContent, DialogTitle,
    FormControl, InputLabel, MenuItem, Select, Stack, TextField
} from '@mui/material'
import React, { useState } from 'react'
import FaqServices from '../services/FaqServices';

const FaqModal = ({ open, handleClose }) => {

    const [faqs, setFaqs] = useState({
        question: "",
        category: "",
        status: ""
    })

    const handleChange = (e) => {
        setFaqs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const saveQuestion = (e) => {
        e.preventDefault()
        FaqServices.saveQuestion(faqs).then((response) => {
            setFaqs({
                question: "",
                category: "",
                status: ""
            })
        }).then(() => {
            handleClose()
           
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <Dialog open={open} onClose={handleClose} fullWidth >
                <DialogTitle>Add a question</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant='outlined' value={faqs.question} name='question' onChange={handleChange} label="Question" required></TextField>
                        <TextField variant='outlined' value={faqs.category} name='category' onChange={handleChange} label="Category" required></TextField>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='status'
                                value={faqs.status}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={"Published"}>Published</MenuItem>
                                <MenuItem value={"Draft"}>Draft</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={saveQuestion} color='success' variant='contained'>Submit</Button>
                        <Button color='error' variant='contained' onClick={handleClose}>Close</Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </div>
    );
};


export default FaqModal
