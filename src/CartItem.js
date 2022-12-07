import React from "react";
import './cart.css'

function CartItem(props) {


    return (
        <div className={'singleCart'}>
            <img src={props.img} alt={'product'} style={{width: '60px',height:'60px',borderRadius: '20px'}} />
            {props.name}
            <br/>
            ${props.price}
            <br/>
            Quantity:{props.quantity}
        </div>
    )
}

export default CartItem