import React from 'react'
import  Logo from "../../lib/assets/Logo.png"
import { bottomNavLink } from '../../lib/data/data'
import { Link } from 'react-router-dom'
import { products } from '../../lib/ProductList/ProductList'

function Footer() {
  return (
    <footer class="page-footer black">
    <div class="container">
      <div class="row">
        <div class="col l3 s6">

<img className='responsive-img' src={Logo} alt="" />
   
        </div>
        <div class="col l3  s12">
          <h5 class="white-text">Links</h5>
          <ul>
{
    bottomNavLink.map((link)=>{
        return(
            <li><Link to={`${link.uri}`} class="grey-text text-lighten-3" >{link.name}</Link></li>
        )
    })
}

            
           
          </ul>
        </div>
        <div class="col l3  s12">
          <h5 class="white-text">Links</h5>
          <ul>

          {products.map((product)=>{
            return(
              <li><a class="grey-text text-lighten-3" href="#!">{product.title}</a></li>  
            )
          })}
            

          </ul>
        </div>
        <div class="col l3  s12">
          <h5 class="white-text">CONTACT US</h5>
          <ul>
            <li><span></span><span>(323)714-3450</span></li>
            <li><span></span><span>pmedscare@gmail.com</span></li>
            <li><span></span><span>Telegram ID:
            Plug4sure</span></li>
            <li><span></span><span>Workign Time:
            24/7 OPEN</span></li>
         
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2014 Copyright Text
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
