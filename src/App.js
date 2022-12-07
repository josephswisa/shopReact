import './App.css';
import Navbar from './Navbar'
import Product from "./Product";
import {useState} from "react";
import {PRODUCTS} from "./productList";
import Cart from "./Cart";


function App() {
    const [search,setSearch]= useState('')
    const [mode,setMode]=useState(false)
    const changeMode=()=>{
        setMode(!mode)
    }
    const setNewSearch=(e)=>{
        setSearch(e.target.value)
    }

    const filter=()=>{
        return PRODUCTS.filter((item => {
            let allow = false;
            if (item.name.startsWith(search)) {
                allow = true
            }
            return allow;
        }))
    }

    return (
        <div className="App">
            <div className={'upperNavBar'}>
                <Navbar/>
            </div>
                {mode ? <div>
                        <button onClick={changeMode}>Close Shopping Cart</button>
                    <br/>
                    <Cart/>
                </div>
                    :
                    <div>
                <button onClick={changeMode}>Open Shopping Cart</button>

                <div className={'search'}>
                    <input placeholder={'Search for an item'} className={'searchInput'} value={search}
                           onChange={setNewSearch}/>
                    <br/>
                    <br/>
                </div>

                <div className={'products'}>
            {search.length === 0 ?
                PRODUCTS.map((item) => (
                <span key={item.id} className={'single'}>
                <Product name={item.name} price={item.price} img={item.img} id={item.id}/>
                </span>
                ))

                :

                filter().map((prod)=>(
                <span key={prod.id} className={'single'}>
                <Product name={prod.name} price={prod.price} immg={prod.img} id={prod.id}/>
                </span>
                ))
            }
                </div>
                </div>
            }



        </div>
    );

}
export default App

