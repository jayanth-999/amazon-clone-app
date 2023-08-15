import React, { Component } from 'react';
import './MainPage.css'
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';

class MainPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <div className='mainpage'>
                {/* MainPage Lakshmi */}
                <div style={{paddingTop: '260px', display : "flex", flexWrap: "wrap"}}>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                </div>
            </div>
         );
    }
}
 
export default MainPage;