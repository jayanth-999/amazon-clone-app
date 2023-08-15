/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './AdvertisementFour.css'

function AdvertisementFour(props) {
  return (
    <div className='AdvertisementFour_main'>
        <div className='AdvertisementFour_header'>Appliances for your home | Up to 55% off</div>
        <div className='AdvertisementFour_body'>
          <img src='https://ik.imagekit.io/amazonImg/amazon-image/tab4.jpg?updatedAt=1691732707178' className='AdvertisementOne_imgs'/>
          <img src='https://ik.imagekit.io/amazonImg/amazon-image/tab8.jpg?updatedAt=1691732707155' className='AdvertisementOne_imgs'/>
          <img src='https://ik.imagekit.io/amazonImg/amazon-image/tab10.jpg?updatedAt=1691732707128' className='AdvertisementOne_imgs'/>
          <img src='https://ik.imagekit.io/amazonImg/amazon-image/box2_2.jpg?updatedAt=1691732708235' className='AdvertisementOne_imgs'/>
        </div>
        <div className='AdvertisementFour_footer'>see more</div>
    </div>
  )
}

export default AdvertisementFour;