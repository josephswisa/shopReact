import React,{useState} from "react";
import './product.css'

function Product(props) {
    const [quantity,setQuantity]= useState(0)
    const itemQuantity=(e)=>{
        setQuantity(e.target.value)
    }
    const onAdd=()=>{

            window.$itemsId.push(props.id);
            console.log(quantity)
            window.$itemQuantity[props.id] = quantity;

    }


    return (
        <div className={'product'}>
            <img src={props.img} alt={'product'} style={{width: '100px',height:'100px',borderRadius: '20px'}} />
            {props.name}
            <br/>
            Price:${props.price}
            <br/>
            <input placeholder={"insert quantity"}
                   style={{width:'45%',borderRadius:'5px'}}
                   value={quantity} onChange={itemQuantity}/>
            <button onClick={onAdd} disabled={quantity === 0}
                    style={{marginTop:'5px'}}>Add to cart</button>
        </div>
    )
}

export default Product