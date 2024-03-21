import React, { useState } from 'react'
import './search.css'
import { Button, TextField } from '@mui/material'
import FaqTable from './FaqTable'

const Search = () => {

    const [searchItem, setSearchItem] = useState('')

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    }

    return (
        <>
            <div style={{ width: '85%', margin: 'auto' }} className='mainContainer'>
                <div className='search'>
                    <TextField id="outlined-basic" sx={{ width: '70%', backgroundColor: 'aliceblue' }}
                        value={searchItem}
                        onChange={handleInputChange}
                        variant="outlined" placeholder='search...' />
                    <Button className='btnSearch' sx={{
                        backgroundColor: '#167ade', height: '3.5rem', color: 'white', padding: '0 5rem', '&:hover': {
                            backgroundColor: '#0f67bf',
                        },
                    }}>Search</Button>
                </div>
            </div>
            <FaqTable searchQuery={searchItem}/>
        </>
    )
}

export default Search
