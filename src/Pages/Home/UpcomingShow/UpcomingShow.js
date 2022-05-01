import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  Grid from '@mui/material/Grid';
import React, {useState, useEffect } from 'react';
import ShowDisplay from '../ShowDisplay/ShowDisplay';

            //  upcoming shows section 
const UpcomingShow = () => {
    const [shows,setShows] = useState([]);
                // fetching local api data 
    useEffect(()=>{
        fetch('./shows.json')
            .then(res => res.json())
            .then(data => setShows(data));

    },[]);
    //   console.log(shows);
    return (
        <Box sx={{pt: '70px',px: '80px',backgroundColor: '#111229'}}>
            <Typography variant='h2' sx={{color: '#fff',pt: '15px',pb: '15px',fontWeight: '400',fontSize: '32px'}}>
                Upcoming Shows
            </Typography>
            <Grid container spacing={2} >
                {
                    shows &&  shows.map(show => <ShowDisplay key={show.pname} show={show}></ShowDisplay> )
                }
            </Grid>
        </Box>
    );
};

export default UpcomingShow;