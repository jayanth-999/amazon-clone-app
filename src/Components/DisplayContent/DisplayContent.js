import React, { Component } from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

class DisplayContent extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{display:'flex'}}>
                <div><LeftSide/></div>
                <div><RightSide/></div>
            </div>
        );
    }
}
 
export default DisplayContent;