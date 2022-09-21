import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import './Login.css'
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const [goToProfile, setGoToProfile] = React.useState(false);
  if (goToProfile) {
    return <Navigate to="/ProfilePage" />;
  }

  return (
    <div>
      <Header/>
      <Header2/>
      
      <div className='login'>
        <div className='box'>
          <div className='boxDetails'>
            <h1>Login / Register</h1>
            <div>
            <input type="text" placeholder="Username" className='boxDetailsinput'/>
            </div>
            <div>
            <input type="password" placeholder="Password" className='boxDetailsinput'/>
            </div>

            <input onClick={() => {
          setGoToProfile(true);
            }}type="submit" value="Submit" />
            
            <div className='loginwith'>
            <div><a href="/SignUp">Sign up</a></div>
            Log in with
            <div>
            <a href="https://mail.google.com/mail" class="f-gry" target="_blank"><ion-icon name="logo-google" class="ml-2 m-large"></ion-icon></a>
            <a href="#" class="f-gry"><ion-icon name="logo-facebook" class="ml-2 m-large"></ion-icon></a>
            <a href="#" class="f-gry"><ion-icon name="logo-instagram" class="ml-2 m-large"></ion-icon></a>
            </div>
          </div>

          </div>
          
        </div>
      </div>

      <Footer/>
    </div>
      )
}

export default LogIn