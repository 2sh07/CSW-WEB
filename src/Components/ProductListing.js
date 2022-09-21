import React from 'react'
import './productlisting.css'

const ProductListing = () => {
  return (
    <div className='Listing'>
        <div className='ProductList'><h1>Wheel Services</h1>
            
            <div className='ProductListChild'>
                <img src="https://carservicewale.in/assets/images/Service_AC1.jpg"/>
                <div><ion-icon name="shield-checkmark-outline"></ion-icon>Warranty: 1,000 KMS <br/>or 1 Month Warranty</div>
                <div>
                <br />High Performance AC Service 
                <br />AC Gas Replacement
                <br />AC Vent Cleaning
               </div><div>
                <br />Cooling Coil Cleaning (Front + Rear)
                <br />AC filter cleaning

</div>
            <div className='ProductListData'>
                <div className='ProductListDiscription'>
                    
                </div>
            </div>
            <div >
                {//<div>ADD TO CART</div>
                //<div>BUY NOW</div>
}
            <button className='ProductButtons'>ADD TO CART</button>
            <button className='ProductButtons'><a href="/CheckOut">BOOK NOW</a></button>
            </div>

            </div>
        </div>
        <div className='ProductList'><h1>Wheel Care Service</h1>
        <div className='ProductListChild'>
                <img src="https://carservicewale.in/assets/images/Service_AC1.jpg"/>
                <div>High Performance Ac Service 
                <p>AC Gas Replacement</p><p>AC Vent Cleaning</p>
                <p>Cooling Coil Cleaning ( Front + Rear )
                AC filter cleaning</p>

</div>
                <div><ion-icon name="shield-checkmark-outline"></ion-icon>Warranty: 1,000 KMS or 1 Month Warranty</div>
            <div className='ProductListData'>
                <div className='ProductListDiscription'>
                    
                </div>
            </div>
            <div className='ProductButtons'>
                {//<div>ADD TO CART</div>
                //<div>BUY NOW</div>
}
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
            </div>

            </div>
           
        </div>
        <div className='ProductList'><h1>Tyres Replacement</h1>

        <div className='ProductListChild'>
                <img src="https://carservicewale.in/assets/images/Service_AC1.jpg"/>
                <div>High Performance Ac Service 
                <p>AC Gas Replacement</p><p>AC Vent Cleaning</p>
                <p>Cooling Coil Cleaning ( Front + Rear )
                AC filter cleaning</p>

</div>
                <div><ion-icon name="shield-checkmark-outline"></ion-icon>Warranty: 1,000 KMS or 1 Month Warranty</div>
            <div className='ProductListData'>
                <div className='ProductListDiscription'>
                    
                </div>
            </div>
            <div className='ProductButtons'>
                {//<div>ADD TO CART</div>
                //<div>BUY NOW</div>
}
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default ProductListing