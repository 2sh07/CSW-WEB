import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


const Header = () => {
  return (
    <section class="bg-blue">
<div class="container">
	    	<div class="row">
	    		<div class="col-md-12 col-sm-12 col-12 col-xxl-12">
        <div class="topHeader">
            <div class="topHeader-info">
             { //  <div><i class="bi bi-envelope mr-1 x-medium"></i> <a href="mailto:info@carservicewale.in" class="color-white text-decoration-none">info@carservicewale.in</a></div>
              //<div><i class="bi bi-telephone mr-1 x-medium"></i> +91 8045 969696</div>
              //  <div><i class="bi bi-geo-alt mr-1 x-medium"></i> Navi Mumbai</div>
              //  <div><i class="bi bi-clock mr-1 x-medium"></i> Mon - Sun 24/7 hours</div>
  }
              </div>
              <div class="topHeader-info">
                
              <div className='icon'><ion-icon name="mail-outline" ></ion-icon> <a href="mailto:info@carservicewale.in" class="color-white text-decoration-none">info@carservicewale.in</a></div> 
               <div className='icon'><ion-icon name="call-outline" ></ion-icon> +91 8045 969696</div>
               <div className='icon'><ion-icon name="location-outline" ></ion-icon> Navi Mumbai</div>
               <div className='icon'><ion-icon name="time-outline" ></ion-icon> Mon - Sun 24/7 hours</div>
              </div>
            <div class="topHeader-user-info">
                <nav class="nav justify-content-end color-white">
                    <a class="nav-link d-flex align-items-center" aria-current="page" href="../LogIn">
                    <ion-icon name="person-circle-outline"></ion-icon>Login / Register</a>

                </nav>
            </div>
        </div>
</div></div></div>
    </section>
    
  )
}

export default Header