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
   <img className='responsive-img' src={product.src} alt="" />
            <div>
            <p>{product.title}</p>
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
