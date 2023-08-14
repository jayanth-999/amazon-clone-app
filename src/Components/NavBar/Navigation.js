/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <div className='navbar'>
                <div className='nav_component'>
                    <div className='nav_logo'></div>
                    <div className='nav_locator'>
                        <div className='nav_locatorImg'></div>
                        <div className='nav_location nav_text'>Bangalore</div>
                    </div>
                    <div className='nav_searchcomponent'>
                        <div>
                            <select className='nav_dropdown'>
                            <option value="All">All</option>
                                <option value="Alexa">Alexa</option>
                                <option value="Books">Books</option>
                                <option value="Baby">Baby</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Clothes">Clothes</option>
                            </select>
                        </div>
                        <div>
                            <input type='text' className='nav_searchbox'/>
                            
                        </div>
                        <div className='navbar__seaarchboxdiv'>
                            <div className='nav_searchicon'></div>
                        </div>
                    </div>
                    <div className='nav_text nav_signin'>
                        <div style={{ fontSize: "14px" }}>Hello, sign in</div>
                        <div style={{ fontWeight: "bold",fontSize: "14px" }}>Account & Lists</div>
                    </div>
                    <div className='nav_text nav_return'>
                        <div style={{ fontSize: "14px" }}>Returns </div>
                        <div style={{ fontWeight: "bold",fontSize: "14px" }}>& Order</div>
                    </div>
                    <div className='nav_text nav_cart'>
                        <img className='nav_cartimg'/>
                        <div className='cart__item'>0</div>
                        <div className='navbar_text_cart'>Cart</div>
                    </div>
                </div> 
                <div className="navbar__footer">
                        <div className="navbar__footer_text">Best Seller</div>
                        <div className="navbar__footer_text">Mobile</div>
                        <div className="navbar__footer_text">Amazon Pay</div>
                        <div className="navbar__footer_text">Fashion</div>
                        <div className="navbar__footer_text">Electronics</div>
                        <div className="navbar__footer_text">Prime</div>
                        <div className="navbar__footer_text">New Release</div>
                        <div className="navbar__footer_text">Customer Service</div>
                        <div className="navbar__footer_text">Computers</div>
                        <div className="navbar__footer_text">Home & Kitchen</div>
                </div>
            </div>
        );
    }
}
 
export default NavBar;