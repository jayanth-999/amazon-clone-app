/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './AdvertisementOne.css';

function AdvertisementOne(props) {
    return ( 
        <div className='AdvertisementOne_main'>
            <div className='AdvertisementOne_header'>
            Up to 70% off | Clearance store
            </div>
            <div className='AdvertisementOne_body'>
                <img src='https://ik.imagekit.io/amazonImg/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1691732707192' width='260px'/>
            </div>
            <div className='AdvertisementOne_footer'>
                see more
            </div>
        </div>
     );
}

export default AdvertisementOne;