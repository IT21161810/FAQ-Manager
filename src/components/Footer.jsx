import React from 'react'
import './footer.css'
import { Typography } from '@mui/material'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <Typography variant="subtitle2" gutterBottom>
                    copyright @iLabs, All right reserved
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                    @Privacy Policy | Terms and Service | Help Center
            </Typography>
            </div>
        </footer>
    )
}

export default Footer
