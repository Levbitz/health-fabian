import React from 'react'
import "./About.css"
import AbtImg from '../../../lib/assets/abt.png'

function About() {
  return (
    <div className='home_abt_wrap'>
    
    <div className="container">
    <div className="row">
    <div className="col l6 s12">
    <div>
    <h4>ABOUT PHARMA MEDS CARE</h4>
    <p className='white-text'>Pharma Meds Care companies, are businesses that research, develop, and manufacture medications. We are responsible for bringing new drugs to the market and making them available to patients. While these companies are for-profit businesses, they also play an important role in ensuring that people have access to the medicines they need to stay healthy. We also have legal obligation to ensure the safety and effectiveness of their products.</p>

    <p className='white-text'>Pharma Meds Care is a free and impartial online reference tool that is exclusively accessible through the Medicare Rights Center and was carefully created to assist older individuals and those with disabilities in navigating the complex world of health insurance.</p>

    <p className='white-text'>Pharma Meds Care offers clear responses to queries from Medicare-eligible Americans, their families, carers, and the professionals that assist them.

    Pharma Meds Care main Drugs are Adderall, Erimin, Rivotril, Oxy, Percocet, Roxy ,Suboxone & Xanax.</p>
    </div>
    </div>
    <div className="col l6 s12">
    <div>
    <img className='responsive-img' src={AbtImg} alt="" />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About
