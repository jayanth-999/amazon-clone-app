import React, { Component } from 'react'
import './LeftSide.css'

class LeftSide extends Component {
    state = {  } 
    render() { 
        return (
        <div className="LeftSize__main">
            <div className="leftSide__header">
                Brand
            </div>
            <div className="leftSide__brandname">
                <label className="brandname">
                    <input type="checkbox" value="Apple" />Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung" />Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Mi
                </label>
            </div>
        </div>
        );
    }
}
 
export default LeftSide;