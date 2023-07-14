import React from 'react'
// import Data from './Data';


function Card({ data }) {
  return (
      <div className='blog-card'>
        <div className='card-img'>
          <img src={data.img} alt="pic" />
        </div>
        <div className='card-title'>
          <h2>{data.title}</h2>
        </div>
        <div className='card-desc'>
          <p>{data.desc}</p>
        </div>
      </div>
  )
}
export default Card;