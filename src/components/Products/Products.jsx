 import React from 'react';

import Product from "./Product/Product";
//import Navbar from '../Nav/Navbar';
// const products = [
//     {id: 1, name:"shoes", description: "Running Shoe", price: "50", image:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"},
//     {id: 2, name: "Macbook", description: "Mac", price: "10", iamge:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"}
// ]


const Products = ({ products }) =>{
    
    return (
        <>
         <div container justify="center" spacing={4}>
         {products.map((product) => (
          <div key={product.id} item xs={12} sm={6} md={4} lg={3}>
             <Product product={product}  />
          </div>
        ))}
         </div>
            
        </>
    );
}

export default Products;