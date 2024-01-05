// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// const cardsData = [
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     route:'/login',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     route:'/review',
//   }, 
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     // route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     // route:'/review',
//   },
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     // route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     // route:'/review',
//   },
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     // route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     // route:'/review',
//   },
 
// ];

// const Home2 = () => {
//   return (
   
//     <Grid container spacing={3}>

//         <div style={{
//             marginTop:'60px',
//             width:'100%',
//             height:'50px',
//             backgroundColor:'rgba(100, 65, 48,0.6)',
//             color:'whitesmoke',
//             zIndex:'+1'
//         }}>
//             <h1>YOUR FAVORITE GENRE BOOKS</h1>
//         </div>
//       {cardsData.map((card, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//             <Link to={card.route}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="270"
//               image={card.image}
//               alt={card.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h6" component="div">
//                 {card.title}
//               </Typography>
             
//             </CardContent>
//           </Card>
//           </Link>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Home2;
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
          <Link to="/Home2">
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