import React from 'react'
import "./HomeSection.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeSection = ({
    title,
    titleColor,
	description,
    buttonText,
    buttonBackground
}) => {
  return (
    <div className='home-section'>
        <div className='title' style={{ color: titleColor }}>{title}</div>
        <div className='description'>{description}</div>
        <div className='button' style={{backgroundColor:buttonBackground}} >
            <button className="home-section-btn" style={{backgroundColor:buttonBackground}}>{buttonText}  
            </button>
            <ArrowForwardIcon className='arrow-icon'/>
        </div>
    </div>
  )
}

export default HomeSection