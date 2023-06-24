import React from 'react';
import { FaDonate, FaHandsHelping, FaHeadset, FaShippingFast,   } from "react-icons/fa";


const Futures = () => {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 py-10 px-5 border rounded-md mt-10">

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center">
            <FaShippingFast className="text-4xl text-rose-500"></FaShippingFast>
          </div>
          <div>
            <p className="text-xl font-bold">Free delivery</p>
            <p>Free shipping on all order</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center">
            <FaHeadset className="text-4xl text-rose-500"></FaHeadset>
          </div>
          <div>
            <p className="text-xl font-bold">Online support 24/7</p>
            <p>support online 24 hours a day</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center">
            <FaDonate className="text-4xl text-rose-500"></FaDonate>
          </div>
          <div>
            <p className="text-xl font-bold">Money return</p>
            <p>Back gurantee under 7 days</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center">
            <FaHandsHelping className="text-4xl text-rose-500"></FaHandsHelping>
          </div>
          <div>
            <p className="text-xl font-bold">Member discount</p>
            <p>every order get discount</p>
          </div>
        </div>
      </div>
    );
};

export default Futures;