import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import  Typography  from '@mui/material/Typography';
import CircularProgress from '../CircularProgress/CircularProgress';


        //   header section 

const Header = () => {
    return (
        <div className='header'>
                  {/* navigation bar added  */}
            <NavBar></NavBar>

            <Typography variant='h2' component='div' sx={{pt:'200px',pl:'300px',color:'#fff'}}>
                    Cari Cari
            </Typography>
            <Typography variant='body1' component='div' sx={{color: '#fff',pt:1,pl:'300px',fontSize: '24px',opacity: '0.6'}}>
                    Live from their sofa to yours. Get closer to your favourite
                    
            </Typography>
            <Typography variant='body1' component='div' sx={{color: '#fff',pl:'300px',fontSize : '24px',opacity: '0.6'}}>
                artists and never miss out.
                    
            </Typography>
                    {/* circular progress bar  */}
            <CircularProgress></CircularProgress>
        </div>
    );
};

export default Header;