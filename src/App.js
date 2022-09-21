import './App.css';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Carlist from './Components/Carlist';
import Footer from './Components/footer';
import Services from './Components/services';
import Content from './Components/Content';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from './Components/Slider/Slider';
import ProductPage from './ProductPage';
import CarSelect from './Components/CarSelect';
import ProductListing from './Components/ProductListing';
import HomePage from './HomePage';
import CheckOut from './CheckOut';
import LogIn from './LogIn';
import SignUp from './SignUp';
import ProfilePage from './ProfilePage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import WheelService from './Components/WheelService';
import ServiceSchedule from './Components/ServiceSchedule';
import AboutUs from './AboutUs';
import TC from './TC';
import ContactUs from './ContactUs';
import Privacy from './Privacy'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/ProductPage/" element={<ProductPage/>}/>
        <Route path="/ProductPage/:service" element={<ProductPage/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/ProductPage/Wheel-Services" element={<WheelService/>}/>
        <Route path="/ProductPage/Denting-Painting" element={<WheelService/>}/>
        <Route path="/ProductPage/Schedule-Services" element={<ServiceSchedule/>}/>
        <Route path="/ProductPage/AC-Services" element={<WheelService/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/TC" element={<TC/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>




        
        
        
        



        </Routes>
      </Router>
   

{
 // <Header/>
}

  </div>
  
 );
}

export default App;
