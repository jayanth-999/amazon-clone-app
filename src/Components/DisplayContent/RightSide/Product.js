/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './RightSide.css'
import Rating from '@mui/material/Rating';
// import currencySymbol from 'currency-symbol';
import getSymbolFromCurrency from 'currency-symbol-map';

function Product(props) {
    return ( 
        <div className="product">
            <div className="product__image">
                <img src={props.definition.image} height="280px" />
            </div>
            <div className="product__name">
                {props.definition.name}
                {/* iPhone 11 Unlocked U Landvo Ip12 Pro */}
                
            </div>
            <div className="product__rating">
                {/* <Rating name="read-only" value={3} readOnly /> */}
                <Rating name="read-only" value={4} style={{ fontSize : "20px",paddingRight:'5px'}} readOnly />
                <div >{props.definition.rating}</div>
                {/* Rating */}
            </div>
            <div className="product__price">
                {/* {{}} */}
                { getSymbolFromCurrency('INR')}
                {props.definition.price}
                {/* Prize */}
            </div>
    </div>
    );
}

export default Product;