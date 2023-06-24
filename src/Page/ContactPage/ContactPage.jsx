import React from 'react'
import PeriShowcase from '../../components/PeriShowcase/PeriShowcase'
import ContactForm from '../../components/ContactForm/ContactForm'

function ContactPage() {
  return (
    <div>
    
    <PeriShowcase
    title={"Contact Us"}
    name={"Contact Us"}
    />
    <div className="container">
    <div className="row">
    <div className="col l5">

    <h4>HOW CAN WE HELP YOU?</h4>

    <h5>Address : US:EU</h5>
    <h4>(323)714-3450</h4>
    <p>pmedscare@gmail.com</p>
    <p>Telegram ID: Plug4sure</p>

    <p>Workign Time: 24/7 OPEN</p>
    <div>
    </div>
    </div>

    <div className="col l6 offset-l1 s12">
    <div>
    <ContactForm/>
    </div>
    <div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ContactPage
