import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    return (
        <Card sx={{ width: 400, height: 300}}>
            <CardMedia
                component="img"
                height="210"
                image={props.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    The temperature of {props.title} is {props.degrees} degrees
                </Typography>
            </CardContent>
        </Card>
    );
}
