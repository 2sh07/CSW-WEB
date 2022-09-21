import React from 'react'
import Header from './Components/Header'
import Footer from './Components/footer'
import './ProfilePage.css'
import Header2 from './Components/Header2'
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  let navigate = useNavigate();

  return (
    <div>
        <Header />      
        <Header2/>
          
      <div className='mainbody'>
         <div className='account'>
          <h1>Your Account<ion-icon name="create-outline"></ion-icon></h1>
        <div>
          <div ><img src="https://thispersondoesnotexist.com/image" className='pfpimage'/></div>
         <div>NAME<br/>Email<br/> Address<br/>Phone Number</div>
        </div>
         </div>
         <div className='card'>
            <div>Service History</div>
            <div>My Vehicle</div>
            <div>
              Wallet
              <h1>500₹</h1>
              Current Balance
            </div>
            <div onClick={() => {navigate('/ContactUs');}}>
              Contact Us
              <ion-icon name="call-outline" class="ml-2 m-large"></ion-icon>
            <div className='details'>Our Calling assistant can quickly solve many issues or direct you to the right person or place.</div>
            </div>
        </div>
     </div>
    
          <Footer/>
</div>
  )
}

export default ProfilePage