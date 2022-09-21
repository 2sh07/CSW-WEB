
import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import Carlist from '../Carlist'
import { Navigate } from "react-router-dom";

export default function Slider() {


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    const [goToProductPage, setGoToProductPage] = React.useState(false);

    if (goToProductPage) {
      return <Navigate to="/ProductPage" />;
    }
    return (
        <div className='services'>
           {

            //<Carlist/>
}
<div className='ServiceSlider'>
           <div className='cards'  onClick={() => {
          setGoToProductPage(true);
        }}>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-Painting.png"class="w-70pc" />
            Denting Painting
            </div>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-Denting.png"class="w-70pc"/>
           Cleaning & Detailing
            </div>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-AC.png" class="w-70pc"/>
            <div>A/C Services</div>
            </div>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-Batteries.png" class="w-70pc"/>
            Battery services
            </div>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-Wheel.png"class="w-70pc"/>
            Wheel Services
            </div>
            <div className='services-card'>
            <img src="https://carservicewale.in/assets/images/Service-Custom.png"class="w-70pc"/>
            Schedule Services
            </div>
        
            </div>
           <div className='sliderHolder'>
        <div className="container-slider">
                 
            {dataSlider.map((obj, index) => {
                return (
                    <div>
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} 
                        />
                        
                    </div>
                    </div>
                )
            })}
            
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
