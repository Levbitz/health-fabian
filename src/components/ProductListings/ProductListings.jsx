import React from 'react'
import { products } from '../../lib/ProductList/ProductList'


function ProductListings() {
  return (
    <div>
    {products.map((product)=>{
        return(
            <div className="col l4">
            <div>
            
   <img className='responsive-img' src={product.src} alt="" />
            <div>
            <p>{product.title}</p>
            </div>
            </div>
            </div>
        )
    })}
    
    </div>
  )
}

export default ProductListings
