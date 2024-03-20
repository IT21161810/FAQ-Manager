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
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import FaqServices from '../services/FaqServices';
import { Link } from 'react-router-dom';

const FaqTable = () => {

  const [faqs, setFaqs] = React.useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);

  const fetchedData = async () => {
    const res = await FaqServices.getAllQuestion()
      .then((res) => setFaqs(res.data))
      .catch((err) => console.log(err))
  }

  React.useEffect(() => {
    fetchedData();
  }, [])
  
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = async(id) => {
    console.log(id)
  }

  const handleDelete = async(id) => {
    FaqServices.deleteQuestion(id)
    .then((res) => {
      if(faqs){
        setFaqs((prev) => {
          return prev.filter((faq) => faq.id !== id)
        })
      }
    })
  }

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
            {faqs.map((question, index) => (
              <TableRow key={index}>
                <TableCell align="center">{question.id}</TableCell>
                <TableCell align="center">{question.question}</TableCell>
                <TableCell align="center">{question.category}</TableCell>
                <TableCell align="center">
                  <Button sx={{
                    padding: '0.5rem', color: 'black', fontSize: '13px',
                    backgroundColor: question.status === "Published" ? 'lightgreen' : '#d7dade',
                  }}>
                    {question.status}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to={`/update/${question.id}`}><MenuItem>Update</MenuItem></Link>
                    <Link to={`/view/${question.id}`}><MenuItem>View</MenuItem></Link>
                    <MenuItem onClick={() => { handleClose(); handleDelete(question.id); }}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>

  )
}

export default FaqTable
