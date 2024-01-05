import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const cardsData = [
  {
    title: 'Birthday',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/banners/igp_Birthday_d_collections_20220309.jpg',
    // description: 'Birthday',
  },
  {
    title: 'Christmas',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-tinsel-town-270705-m.jpg',
    // description: '',
  },
  {
    title: 'New Year',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-sweet-touch-of-togetherness-personalized-new-year-hamper-271690-m.jpg',
    // description: 'This is the third card.',
  },
  {
    title: 'Anniversary',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/banners/igp_Anniversary_d_collections_20220309.jpg',
    // description: 'This is the third card.',
  },
  {
    title: 'STATIONARY & DESK ACCESSORIES',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Home_Stationary_Desk_Accessories_d_frames_20220309.jpg',
    // description: 'This is the third card.',
  },
  {
    title: 'BOUQUET',
    image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-dozen-red-rose-bouquet-204798-m.jpg',
    // description: 'This is the third card.',
  },
 
];

const Cards = () => {
  return (
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to="/Cards">
          <Card className='font'>
            <CardMedia
              component="img"
              height="300"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;