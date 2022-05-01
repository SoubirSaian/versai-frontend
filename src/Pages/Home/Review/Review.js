import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import reimg1 from '../../../images/review3.png'

    // review section 
    // here I have not used local api 
    // just simply implented it 
    
const Review = () => {
    return (
        <Box sx={{backgroundColor: '#0a0b1a', pt: '30px',px: '70px',pb: '100px'}}>

            <Typography variant='h2' sx={{color: '#fff', fontWeight: '400',fontSize: '32px',pb: '35px'}}>
                Reviews
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{border: '2px solid #e5af56',borderRadius: '15px',py: '40px'}}>
                    <Grid container>
                        <Grid item lg={3}>
                            <img src={reimg1} alt="Hellen Jummey" />
                        </Grid>
                        <Grid item lg={9}>
                            <Typography variant="h6" sx={{color: '#fff'}}>
                                Hellen Jummey
                            </Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>
                                Palo alto, CA
                            </Typography>
                        </Grid>
                     </Grid>
                    <Typography variant='body2' sx={{color: '#fff',fontSize: '16px',lineHeight: '24px',mt: '10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{border: '2px solid #e5af56', borderRadius: '15px',px: '3px'}}>
                    <Grid container>
                        <Grid item lg={3}>
                            <img src={reimg1} alt="Hellen Jummey" />
                        </Grid>
                        <Grid item lg={9}>
                            <Typography variant="h6" sx={{color: '#fff'}}>
                                Hellen Jummey
                            </Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>
                                Palo alto, CA
                            </Typography>
                        </Grid>
                     </Grid>
                    <Typography variant='body2' sx={{color: '#fff',fontSize: '16px',lineHeight: '24px',mt: '10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{border: '2px solid #e5af56', borderRadius: '15px',px: '3px'}}>
                    <Grid container>
                        <Grid item lg={3}>
                            <img src={reimg1} alt="Hellen Jummey" />
                        </Grid>
                        <Grid item lg={9}>
                            <Typography variant="h6" sx={{color: '#fff'}}>
                                Hellen Jummey
                            </Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>
                                Palo alto, CA
                            </Typography>
                        </Grid>
                     </Grid>
                    <Typography variant='body2' sx={{color: '#fff',fontSize: '16px',lineHeight: '24px',mt: '10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Review;