import React from 'react';
import detail_img from '../../Assets/images/Rectangle 870 (1).png';
import EmailIcon from '@mui/icons-material/Email';


function Blogs_detail_card() {
    return (
        <div className='detail-card'>
            <div className='detail-img'>
                <img src={detail_img} alt="" />
            </div>
            <div className='detail-content'>
                <div className='detail-text'>
                    <h1>Gunjan Giri</h1>
                    <h2>Cordinator</h2>
                </div>
                <div className='detail-icon'>
                    <EmailIcon></EmailIcon>
                </div>
            </div>
        </div>
    )
}

export default Blogs_detail_card;