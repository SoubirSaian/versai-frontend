// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const ShowDisplay = (props) => {
    const {category,pname,img} = props.show;
    return (
        <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345,borderRadius: '5px', backgroundColor: '#111229' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image= {img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                     {pname}
                    </Typography>
                    <Typography variant="body2" sx={{display: 'inline',p: '3px', border: '1px solid black',borderRadius: '3px', backgroundColor: '#e5c558',}}>
                      {category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">More Info</Button>
                    <Button size="small">--</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ShowDisplay;