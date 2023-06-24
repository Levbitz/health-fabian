import React from 'react'
import PeriShowcase from '../../components/PeriShowcase/PeriShowcase'
import ProductHighLights from '../../components/ProductHighLights/ProductHighLights'
import ProductListings from '../../components/ProductListings/ProductListings'

function ShopPage() {
  return (
    <div>
    <PeriShowcase
    title={"Shop"}
    name={"shop"}
    />
    
    <div className="container">
    <div className="row">
    <div className="col l3">
    <div>
    <ProductHighLights/>
    </div>
    </div>
    <div className="col l9">
    <div>
    <ProductListings/>
    </div>
    <div>
    
    </div>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default ShopPage
