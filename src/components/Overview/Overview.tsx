import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';

interface OverviewProps {
    title: string;
    introText: string;
    image?: string;
}


export const Overview: React.FC<OverviewProps> = ({title, introText, image = 'public/photo_cv.png'}) => {
    return (
        <Container maxWidth="sm">
            <Card sx={{maxWidth: 600}}>
                <CardHeader
                    title="Oleksandr Semenets"
                />
                <CardMedia
                    component="img"
                    sx={{height: 250}}
                    image={image}
                    title="CV photo"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>

                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {introText}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};
