import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import slide from '../assets/image/slide1.png'
import slide22 from '../assets/image/slide2.png'
import slide33 from '../assets/image/Slide3.png'
import slide44 from '../assets/image/slide4.png'
import slide55 from '../assets/image/slide6.jpg'
import slide66 from '../assets/image/slide7.png'
function Slideshow() { 
return ( 
    <div style={{
        marginBottom:'35px'
    }}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          style={{
            height:'600px'
          }}
          alt="First slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide22}
          style={{
            height:'600px'
          }}
          

          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide33} style={{
            height:'600px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide44} style={{
            height:'600px'
          }}
          
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide66} style={{
            height:'600px'
          }}
          
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide55} style={{
            height:'600px'
          }}
          
          alt="Fifth slide"
        />
      </Carousel.Item>
      </Carousel>
	</div>
); 
}
export default Slideshow;