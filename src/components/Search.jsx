import React from 'react'
import './search.css'
import { Button, TextField } from '@mui/material'

const Search = () => {
    return (
        <div style={{ width:'85%', margin: 'auto' }} className='mainContainer'> 
            <div className='search'>
                <TextField id="outlined-basic" sx={{ width: '70%',backgroundColor:'aliceblue' }} variant="outlined" placeholder='search...' />
                <Button className='btnSearch' sx={{
                    backgroundColor: '#167ade', height: '3.5rem', color: 'white', padding: '0 5rem',  '&:hover': {
                        backgroundColor: '#0f67bf',
                    },
                }}>Search</Button>
            </div>
        </div>
    )
}

export default Search
