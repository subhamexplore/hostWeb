import React from 'react'
import Data from './Data';


function Card() {
    return(
        <div className='card'>
        {Data.map((item)=>{
         return(
        <div className='blog-card'>
        <div className='card-img'>
        <img src={item.img} alt="pic" />
        </div>
         <div className='card-title'>
         <h2>{item.title}</h2>
        </div>
        <div className='card-desc'>
        <p>{item.desc}</p>
        </div>
        </div>
         )
         })
        }
      </div>
    )
}
export default Card;