import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line eqeqeq
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        let cardAmount=existingCart.length;

        this.state = { 
            item: existingCart,
            size: cardAmount,
            // item:[],
            // size: 0,
            increment: (value) => {
                let itemList= this.state.item;
                itemList.push(value);

                this.setState( { item: itemList } );
                this.setState( { size: this.state.item.length });

                this.state.saveToLocalCache();
            },Decrement: (value) => {
                let itemList= this.state.item;
                itemList.pop(value);

                this.setState( { item: itemList } );
                this.setState( { size: this.state.item.length });

                this.state.saveToLocalCache();
            },
            saveToLocalCache: ()=>{
                localStorage.setItem('myCart', JSON.stringify(this.state.item));
            }
         }
    }
    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment }} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;
