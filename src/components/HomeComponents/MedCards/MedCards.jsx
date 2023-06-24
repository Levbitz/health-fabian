import React from 'react';
import { medCardData } from '../../../lib/data/data';
import { Link } from 'react-router-dom';
import "./MedCards.css"


function MedCards() {
  return (
    <div className='MedCards_wrap'>
      <div className="">
        {medCardData.map((item, index) => {
          const isEvenIndex = index % 2 === 0;
          return (
            <div className="row" key={index}>
              <div className={`col l6 s12 ${isEvenIndex ? "push-l6" : ""}`}>
                <div>
                  <h4>{item.titleBold}</h4>
                  <h6
                 style={{
                    textTransform:'lowercase'
                 }} 
                  >{item.titleBold}</h6>
                 <h4>{item?.highLightOne}</h4>
 
                 <div>
                 {item.H_One_desc ?  item.H_One_desc.map((item)=>{
                    return(
                        <>
                        <p>{item}</p>
                        </>
                    )
                 }): null}
                 
                 </div>
                 <h4>{item?.highLightTwo}</h4>
 
                 <div>
                 {item.H_Two_desc ?  item.H_Two_desc.map((item)=>{
                    return(
                        <>
                        <p>{item}</p>
                        </>
                    )
                 }): null}
                 
                 </div>

                 <div className="row">
                 <div className="col l6">
                 <div>
                 <Link to='/'>
                 select Options
                 </Link>
                 </div>
                 </div>
                 <div className="col l6">
                 <div>
                 <h4>{item?.price}</h4>
                 </div>
                 </div>
                 </div>
                </div>
              </div>
              <div className={`col l5 s12 ${isEvenIndex ? "pull-l6" : ""}`}>
                <div>
                  <img className='responsive-img' src={item.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MedCards;
