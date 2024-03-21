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
import { Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import FaqServices from '../services/FaqServices';
import { Link } from 'react-router-dom';
import './search.css'


const FaqTable = () => {
  const [faqs, setFaqs] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setSelectedId] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState('');

  const fetchedData = async () => {
    try {
      const res = await FaqServices.getAllQuestion();
      setFaqs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchedData();
  }, []);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    try {
      await FaqServices.deleteQuestion(id);
      setFaqs(prevFaqs => prevFaqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    // Perform search functionality here
    // Filter faqs based on the search query
    // Update the filteredFaqs state
    // For simplicity, let's assume the search is based on the question text
    const filteredFaqs = faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFaqs(filteredFaqs);
  };

  return (
    <>
      <div style={{ width: '85%', margin: 'auto' }} className='mainContainer'>
        <div className='search'>
          <TextField
            id="outlined-basic"
            sx={{ width: '70%', backgroundColor: 'aliceblue' }}
            variant="outlined"
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className='btnSearch'
            sx={{
              backgroundColor: '#167ade',
              height: '3.5rem',
              color: 'white',
              padding: '0 5rem',
              '&:hover': {
                backgroundColor: '#0f67bf',
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
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
                    <Button
                      sx={{
                        padding: '0.5rem',
                        color: 'black',
                        fontSize: '13px',
                        backgroundColor: question.status === "Published" ? 'lightgreen' : '#d7dade',
                      }}
                    >
                      {question.status}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, question.id)}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Link to={`/update/${id}`}><MenuItem>Update</MenuItem></Link>
                      <Link to={`/view/${id}`}><MenuItem>View</MenuItem></Link>
                      <MenuItem onClick={() => { handleClose(); handleDelete(question.id); }}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </>
  );
};

export default FaqTable;