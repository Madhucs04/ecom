
//import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import React, {useState, useEffect } from 'react';
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

const App = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState({});
   const [item, setItem] = useState(0);

   const fetchProducts = async () =>{
      const { data } = await commerce.products.list();
      console.log('data', data);
      setProducts(data);
   }
   
   const fetchCart = async () =>{
      const { cart } = await commerce.cart.retrieve()
         setCart(cart);
         console.log('cart', cart);
   }

   const handleAddToCart = async(productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity)
   setCart(item.cart);
   }

   useEffect(()=>{
      fetchProducts();
      fetchCart();
   }, []);

   return(
         <>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </>
   ) 
}

export default App;