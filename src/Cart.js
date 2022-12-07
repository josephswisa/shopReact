import React from "react";
import {PRODUCTS} from "./productList";
import './cart.css'
import CartItem from "./CartItem";


function Cart() {
    let price=0;
    const prodId = window.$itemsId


    prodId.map(item =>(
        price = price + (PRODUCTS[item].price * window.$itemQuantity[item])

    ))

    const check=()=>{
        console.log(window.$itemQuantity)
    }

    return (
        <div>
        <div className={'cart'}>
            {
            prodId.map(item => (
                <div key={item} >
                    <ul >
                    <CartItem img={PRODUCTS[item].img}
                              name={PRODUCTS[item].name}
                              price={PRODUCTS[item].price}
                              quantity={window.$itemQuantity[item]}
                    />

                    </ul>
                </div>
            ) )
            }
        </div>
            TOTAL: ${price}
            <br/>
            <button onClick={check}>BUY NOW</button>
        </div>
    )
}

export default Cart