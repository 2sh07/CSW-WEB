import React from 'react'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import Slider from './Components/Slider/Slider'
import Content from './Components/Content'
import Footer from './Components/footer'

const HomePage = () => {
  return (
    <div>
    <Header />
      <Header2/>
      <Slider/>
      <Content/>
      <Footer/>
      </div>
  )
}

export default HomePage