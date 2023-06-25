import React from 'react'
import { products } from '../../lib/ProductList/ProductList'
import { Link } from 'react-router-dom'


function ProductListings() {
  return (
    <div>

    {products.map((product)=>{
        return(
            <div className="col l4">
            <div>
            <Link to={`/item/${product._id}`}>
            <div style={{
              position:'relative'
            }}>
            <div
            style={{
              position:"absolute",
              right:0,
              top:-10
            }}
            
            className=' '>
            <span
           style={{
            fontWeight:"bold",
            padding:1

           }} 
            
            className='
            btn-floating 
            btn-small
             waves-effect
              waves-light 
              green accent-4
              '>
             Sell!
            </span>
           </div>
       <img className='responsive-img' src={product.src} alt="" />     
            </div>
   
            <div>
            <p style={{
              fontWeight:"bold"
            }} className='center black-text'>{product.title}</p>
            </div>
            <div>
            <p style={{
              fontWeight:"bold"
            }} className='center black-text'>{product.priceRange}</p>
            </div>

            <div className='teal darken-1'>
            <p style={{
              padding:"16px 0px",
              fontWeight:'900'
            }} className='center white-text'>Select Optioons</p>
            </div>
            </Link>
            </div>
            </div>
        )
    })}
    
    </div>
  )
}

export default ProductListings
