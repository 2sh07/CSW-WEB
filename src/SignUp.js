import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import './Login.css'

const SignUp = () => {
  return (
    <div>
      <Header/>
      <Header2/>

      <div className='login'>
        <div className='box'>
          <div className='boxDetails'>
            <h1>Register </h1>
            <div className='enterphone'>
            <input type="text" placeholder="Enter Mobile Number" className='boxDetailsinput'/>
            </div>
            

            <input type="submit" value="Get OTP" />
            
            <div className='loginwith'>
                <div><a href="/LogIn">Log in</a></div>
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

export default SignUp