import Grid from '@mui/material/Grid';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';

const CircularProgress = () => {

    const percentage1 = 66;
    const percentage2 = 70;
    const percentage3 = 60;
    const percentage4 = 75;

    return (
        <Grid container spacing={0} sx={{mt: '200px',mx: '30px'}}>
            <Grid item sm={12} md={3}>
                <CircularProgressbar
                    className='circular-progress'
                    value={percentage1}
                    text={`${percentage1}`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '16px',
                        // strokeWidth : 20,
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#f5f5f5`,
                        textColor: '#fff',
                        trailColor: 'black',
                        backgroundColor: 'black',
                })}
                />;
            </Grid>
            <Grid item sm={12} md={3}>
                <CircularProgressbar
                    className='circular-progress'
                    value={percentage2}
                    text={`${percentage2}`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `red, ${percentage2 / 100})`,
                        textColor: '#fff',
                        trailColor: 'black',
                        backgroundColor: 'black',
                })}
                />;
            </Grid>
            <Grid item sm={12} md={3}>
                <CircularProgressbar
                    className='circular-progress'
                    value={percentage3}
                    text={`${percentage3}`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `red, ${percentage3 / 100})`,
                        textColor: '#fff',
                        trailColor: 'black',
                        backgroundColor: 'black',
                })}
                />;
            </Grid>
            <Grid item sm={12} md={3}>
                <CircularProgressbar
                    className='circular-progress'
                    value={percentage4}
                    text={`${percentage4}`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `red, ${percentage4 / 100})`,
                        textColor: '#fff',
                        trailColor: 'black',
                        backgroundColor: 'black',
                })}
                />;
            </Grid>
            
        </Grid>
    );
};

export default CircularProgress;