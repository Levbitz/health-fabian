import React from 'react'
import { products } from '../../lib/ProductList/ProductList'
import { Link } from 'react-router-dom'

function ProductHighLights() {
  return (
    <div
    style={{
        padding:'10px',
        borderRadius:10
    }}
    className=' grey lighten-2'>
    <h5>Categories</h5>
   {products.map((product)=>{
    return(
        
        <div style={{
          marginBottom:10
        }}>
        <Link style={{
          color:"coral",
          fontSize:16,
         
        }} to='/'>
        {product.title}
        </Link>
        </div>
    )
   })} 
    
    </div>
  )
}

export default ProductHighLights
