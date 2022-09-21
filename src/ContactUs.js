import React from 'react'
import Header2 from './Components/Header2'
import Header from './Components/Header'
import Footer from './Components/footer'
import './ContentFooter.css'


const ContactUs = () => {
  return (
    <div>
    <Header/>
    <Header2 />
    <div className='maincontent'>
        <div>
        <h1>Contact Us</h1>
        <hr />
        Reach out to us on Our Email:<a href="tel:+918045969696"><ion-icon name="mail-outline"></ion-icon> info@carservicewale.in</a>
        <div>
        Contact us through phone on Our Number:<a href="tel:+918045969696" class="f-gry" > <ion-icon name="call-outline"></ion-icon>+91 8045 969696</a>
        </div>
        </div>
        <div className="sociallinks">
            <a href="tel:+918045969696" class="f-gry" ><ion-icon name="call-outline" class="ml-2 m-large"></ion-icon></a>
            <a href="mailto:info@carservicewale.in" class="f-gry" target="_blank"><ion-icon name="mail-outline" class="ml-2 m-large"></ion-icon></a>
            <a href="https://www.instagram.com/carservicewale/" class="f-gry" target="_blank"><ion-icon name="logo-instagram" class="ml-2 m-large"></ion-icon></a>
            <a href="https://www.instagram.com/carservicewale/" class="f-gry" target="_blank"><ion-icon name="logo-whatsapp" class="ml-2 m-large"></ion-icon></a>

        </div>

    </div>
    
    <Footer/>
    </div>
  )
}

export default ContactUs