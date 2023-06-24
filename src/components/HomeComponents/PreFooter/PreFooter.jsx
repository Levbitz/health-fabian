import React from 'react'
import { Link } from 'react-router-dom'

function PreFooter() {
  return (
    <div>
    <div className="container">
    {/*one */}
    <div className="row">
    <div className="col l12">
    <div>
    <h4>PATIENTS-FIRST ONLINE MEDICAL STOREs</h4>
    <p>Our relationships with pharmaceutical companies have been forged for quite some time. As a result, Pharma Meds Care is granted access to authentic, clinically-proven generic and brand-name pharmaceuticals. This means you can pick medications that you may have problems obtaining from a local drugstore or that are unavailable at any other reputable Internet pharmacy.</p>

    <p>
    For minimized disturbance, better sleeping patterns, and days free from discomfort, look no further than Pharma Meds Care. You can choose various payment options for the safe and quick processing of your medicine inquiries, as we’re focused on providing top-of-the-range service as a mail-order pharmacy. Easily pay today for what will help you tomorrow!
    </p>
    </div>
    </div>
    </div>
    {/*one */}
    {/*two */}
    <div className="row">
    <div>
    <h4>THE BEST ONLINE PHARMACY FOR MEDICARE-ELIGIBLE PATIENTS</h4>
    <p>When trying to fill a prescription, how frequently have you been denied it? You can avoid this embarrassing situation by buying medicine online over the counter at Pharma Meds Care. Fret not about the quality, as we collaborate with Medicare providers and pharmacists who spare no effort at the manufacturing and inspection stages.</p>
    <p>If you’re a Medicare-eligible US resident, you can get any meds without bureaucratic delays and complications accompanying pharmaceutical requests at offline and web-operated drugstores. Pharma Meds Care belongs to the limited range of online pharmacies you can have exclusive access to, even if you don’t have your health plan at hand.</p>
    </div>
    </div>
    {/*two */}
    {/*three */}
    <div className="row">
    <div className="col l12">
    <div>
    <h4>THE ORDERING PROCESS</h4>

    <p>After your pharmaceutical request has been successfully processed, we will immediately ship your medications. Whatever dosage and medicine type you need to get things moving for your well-being, we can handle it. But don’t take our word for it. Try out Pharma Meds Care for a few pills to see if our service can improve your quality of life or aid your recovery.</p>

    <p>If your order is substantial, we can provide you with a cost-reducing discount. However, <Link style={{
        color:"coral"
    }} to='/contact-us'>get in touch with us</Link> first so we can give you an accurate quote. You can reach out to buy pills, ask medical questions, or receive quotes anytime, day or night.</p>


    <p>Sensible healthcare habits should be developed and maintained scrupulously. We can’t advise you on the right medicines to counter dangerous effects if you accidentally combine substances that should have never been taken together. It’s crucial to set the record straight for your healthcare provider and other specialists involved in your treatment.</p>
    </div>
    </div>
    </div>
    {/*three */}
    {/*one */}
    </div>
    </div>
  )
}

export default PreFooter
