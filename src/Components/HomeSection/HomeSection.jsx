import React from 'react';
import './HomeSection.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeSection = ({
  title,
  titleColor,
  description,
  buttonText,
  buttonBackground,
}) => {
  return (
    <div className='home-section'>
      {title && (
        <div className='title' style={{ color: titleColor}}>
          {title}
        </div>
      )}
      {description && <div className='description'>{description}</div>}
      <div className='button' style={{ backgroundColor: buttonBackground,height:"2.5rem"}}>
        <button
          className='home-section-btn'
          style={{ backgroundColor: buttonBackground ,fontSize:"1.1rem"}}
        >
          {buttonText}
        </button>
        <ArrowForwardIcon className='arrow-icon'style={{fontSize:"1.3rem"}} />
      </div>
    </div>
  );
};

export default HomeSection;
