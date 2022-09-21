import React from 'react'
import ProductListing from './ProductListing'
import Header from './Header'
import Header2 from './Header2'
import Content from './Content'
import Footer from './footer'
import CarSelect from './CarSelect'
import Carlist from './Carlist'

const WheelService = () => {
  return (
    <div>
      <Header/>
      <Header2/>
      <Carlist/>
      <CarSelect/>
      <ProductListing/>
      <Content/>
      <Footer/>
    </div>  )
}

export default WheelService