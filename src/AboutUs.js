import React from 'react'
import Header2 from './Components/Header2'
import Header from './Components/Header'
import Footer from './Components/footer'
import './ContentFooter.css'

const AboutUs = () => {
  return (
    <div >
    <Header/>
    <Header2 />
    <div className="maincontent">
    <h1>About Us</h1>
    <hr />
    Car Service Wale is your one-stop-shop for all your car care and maintenance needs. We provide routine, wheel care, battery care, AC care, repair, detailing, and cleaning services at the best prices with unmatched quality!
We ensure that our customers get the best services at the most competitive prices. Our experts are well-trained in their respective fields, with years of experience in delivering quality work to our clients. We have service centers all over Kolkata so acquiring a service near you will never be an issue.
    
    <div className="aboutussociallinks">
            <a href="https://www.instagram.com/carservicewale/" class="f-gry" target="_blank"><ion-icon name="logo-youtube" class="ml-2 m-large"></ion-icon></a>
            <a href="https://www.instagram.com/carservicewale/" class="f-gry" target="_blank"><ion-icon name="logo-linkedin" class="ml-2 m-large"></ion-icon></a>
            <a href="https://www.instagram.com/carservicewale/" class="f-gry" target="_blank"><ion-icon name="logo-instagram" class="ml-2 m-large"></ion-icon></a>
    </div>
    
    </div>
   
    <Footer/>
    </div>
  )
}

export default AboutUs