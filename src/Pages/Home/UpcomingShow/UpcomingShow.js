import  Grid from '@mui/material/Grid';
import React, {useState, useEffect } from 'react';
import ShowDisplay from '../ShowDisplay/ShowDisplay';


const UpcomingShow = () => {
    const [shows,setShows] = useState([]);

    useEffect(()=>{
        fetch('./shows.json')
            .then(res => res.json())
            .then(data => setShows(data));

    },[]);
    //   console.log(shows);
    return (
        <Grid container spacing={2} sx={{px: '80px',backgroundColor: '#111229'}}>
            {
              shows &&  shows.map(show => <ShowDisplay key={show.pname} show={show}></ShowDisplay> )
            }
        </Grid>
    );
};

export default UpcomingShow;