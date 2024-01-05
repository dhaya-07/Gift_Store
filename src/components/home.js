import React from 'react';
import Slideshow from './Slidesshow';

import Footer from './Footer';
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Cards from './Cards';

function home(){
    return (
        <div className='querys'>
        <Slideshow/>
        <br></br>
        <p className='tranding'>Tranding Gifts</p>
        <Cards/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h6 style={{position:"relative",left:'5px' ,color: 'black'}}> <Link>Term@Conditions</Link><Link to='/Contact'>ContactUs</Link></h6>
            <Footer/>
        </div>

    )
    
}
export default home;