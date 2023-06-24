import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Product from './Product';
import { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';


const Products = () => {
  const { products, addToCart } = useContext(AuthContext);
  // console.log(products);
  // const [cart, setCart] = useState([])
  // console.log(cart);
    
  // const { data: products = [], refetch } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // const addToCart = (data) =>{
  //  setCart([...cart, { ...data, quantity: 1 }]);
  // }

    return (
      <div>
        <h2 className="text-2xl font-semibold text-base-600">
          Trending product
        </h2>
        <div className="grid gap-3 mt-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 mb-16">
          {products?.products?.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <section>
          {/* <AddToCart cart={cart}></AddToCart> */}
        </section>
      </div>
    );
};

export default Products;