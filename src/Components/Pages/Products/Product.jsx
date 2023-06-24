import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  // const { discountPrice, originalPrice, title, thumbnail, _id } = product;
  const { brand, category, description, id, price, thumbnail, title } = product;

  return (
    // <div
    //   to={`/product-details/${_id}`}
    //   className="card h-96 bg-white border shadow-sm"
    // >

    //   <figure>
    //     <img src={thumbnail} className="h-full mt-5" alt="Shoes" />
    //   </figure>

    //   <div className="card-body">
    //     <p className="text-sm">
    //       {title ? title.slice(0, 100) + "..." : "N/A"}
    //     </p>
    //     <div className="flex flex-col mt-3">
    //       <span className="text-gray-800 lg:text-lg font-bold">
    //         <span className="font-extrabold">৳</span>
    //         {discountPrice}
    //       </span>
    //       <span className="text-red-500 line-through mb-0.5">
    //         <span className="text-xl">৳</span>
    //         {originalPrice}
    //       </span>
    //     </div>

    //     <div className="mt-3">
    //       <button
    //         onClick={() => addToCart(product)}
    //         className="flex items-center gap-3 bg-slate-200 sm:flex-none hover:bg-slate-300 active:bg-slate-700 focus-visible:ring ring-slate-300 text-slate-600 text-sm  rounded-md outline-none transition duration-100 px-8 py-2"
    //       >
    //         Add to cart
    //         <BsCartPlus className="text-xl text-slate-600"></BsCartPlus>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white shadow rounded-md  overflow-hidden">
      <Link to={`/product-details/${id}`}>
        <img src={thumbnail} className="w-full h-52" alt="" />
      </Link>

      <div className="pt-4 pb-3 px-4">
        <h3 className="capitalize font-medium  text-gray-800">{title}</h3>

        <div className="flex flex-col mt-3">
          <span className="text-gray-800 lg:text-lg font-bold">
            <span className="font-extrabold">৳</span>
            {price}
          </span>
          <span className="text-red-500 line-through mb-0.5">
            <span className="text-xl">৳</span>
            {price}
          </span>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center w-full bg-slate-200 hover:bg-slate-300 text-slate-600 ">
        <button
          onClick={() => addToCart(product)}
          className=" rounded-b-md outline-none transition duration-100 py-2"
        >
          Add to cart
        </button>
        <BsCartPlus className="text-xl text-slate-600"></BsCartPlus>
      </div>
    </div>
  );
};

export default Product;
