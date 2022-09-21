import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import './CheckOut.css'



const CheckOut = () => {
  
  return (
    <div>
        <Header/>
        <Header2/>

        <div className='CheckOutGrid'>
        <div className='item1'>
          <div className='address'>
                <div className='boldItem'>1.</div>
                <div className='boldItem'>Pickup address</div>
                <div>CSW Solutions PVT. LTD.814, Niharika Mirage, Kopra Road, Sector 10,Kharghar, Navi Mumbai, Maharashtra, India 410210</div>
                <div className='edit'>Edit</div>

                
          </div>
          <hr />
          <div className='payment'>
          <div className='boldItem'>2.</div>
                <div className='boldItem'>Payment Method</div>
                <div className='paymentType'>
                  Select Payment Method: 
        
               
{

   //              <label for="pay">Select Payment Method:  </label>
//<div>
//<select name="pay" id="pay">
//  <option value="UPI">UPI</option>
//  <option value="netbanking">Net Banking</option>
//  <option value="card">Debit/Credit</option>
//  <option value="cash">Pay in Cash</option>
//</select>
//</div>

}
                </div>
                

                <div className='edit'>
                  Select
                  </div>
          </div>
          <hr />

          <div>
          <div className='items'>
          <div className='boldItem'>3.</div>
                <div className='boldItem'>Items and Delivery</div>
                <div className='itemsdetails'>
                  <div>Item List : Services Bought</div>
                  <div>Delivery type: Pick up</div>
                </div>
                <div className='edit'>Edit</div>
          </div>
          </div>
          <hr />
        </div>
        <div className='item3'>
          <div className='OrderDetails'>
               <div><h1>Order Summary</h1>Details related to items.</div> 
              <hr/>
              <div><h2>Details</h2></div>
               <div>
                <div className='details'>
                  <div>Items:</div>
                  <div>3</div>
                </div>
                <div className='details'>
                  <div>Order Total: </div>
                  <div>941$</div>
                </div>
               </div> 
               <div className='details'></div> 
               <div className='order' onClick={()=>{ alert('Order Placed!'); }}>Place Order</div> 


          </div>
        
        </div>
                 
        
        
        </div>
        <Footer/>
        
    </div>
    
  )
}

export default CheckOut