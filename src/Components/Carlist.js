import React from 'react'
import Slider from "react-slick";
import './carlist.css';
import { useNavigate, useParams } from "react-router-dom";

const Carlist = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let navigate = useNavigate();
  let { service } = useParams();
  
      return (
        <div className='Products'>
          
          <Slider {...settings}>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Schedule-Services');}}>
              <img src="https://carservicewale.in/assets/images/Service-Custom.png" class="w-70pc" />
              <div>Schedule Services</div>
            </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Denting-Painting');}}> 
              <img src="https://carservicewale.in/assets/images/Service-Painting.png"class="w-70pc" />
                <div>
                  Denting Painting
                </div>
            </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/AC-Services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-AC.png" class="w-70pc"/>
              <div>
              A/C Services
              </div>        
            </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Battery-services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-Batteries.png" class="w-70pc"/>
            Battery services
              </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Wheel-Services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-Wheel.png"class="w-70pc"/>
            Wheel Services
              </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Schedule-Services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-Custom.png"class="w-70pc"/>
            Schedule Services
              </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/AC-Services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-AC.png" class="w-70pc"/>
            AC Services
              </div>
            </div>
            <div>
              <div className='icons' onClick={() => {navigate('/ProductPage/Battery-Services');}}> 
              <img src="https://carservicewale.in/assets/images/Service-Batteries.png" class="w-70pc"/>
            Battery Services
              </div>
            </div>
          </Slider>
          
        </div>
      )
}

export default Carlist