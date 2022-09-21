import React from 'react'
import ProductListing from './Components/ProductListing'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import Content from './Components/Content'
import Footer from './Components/footer'
import CarSelect from './Components/CarSelect'
import Carlist from './Components/Carlist'
import Sales from './Components/Sales'

const ProductPage = () => {
  return (
    <div>
      <Header/>
      <Header2/>
      <Carlist/>
      <CarSelect/>
      <Sales/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default ProductPage