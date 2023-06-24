import React from 'react'
import "./PeriShowcase.css"
import { Link } from 'react-router-dom'

function PeriShowcase({title ,name}) {
  return (
    <div className='peri_showcase_wrap' >
    <div className="container">
    <div className="row">
    <div className="col l12">
    <div className='center'>
    <h4>{title}</h4>
    <p className='text-white'>
    <span>
    <Link className='white-text'>Home</Link>
    </span >
    <span className='white-text'>|</span>
     <span className='white-text'>{name}</span></p>
    </div>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default PeriShowcase
