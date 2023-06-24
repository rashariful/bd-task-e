import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DiscountPage from './DiscountPage';

const Discount = () => {
    const products = useLoaderData()
    console.log(products);
    return (
      <div className="max-w-screen-2xl mx-auto mt-8">
        <div className="grid gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
          {products?.map((product) => (
            <DiscountPage key={product?.id} product={product}></DiscountPage>
          ))}
        </div>
      </div>
    );
};

export default Discount;