import React from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from '../HomeSlider/HomeSlider';

const Banner = () => {
    return (
      <section className="">
        <div className="flex gap-5 sm:flex-col md:flex-row">
          <div className="w-[1020px] h-[600px]">
            <HomeSlider></HomeSlider>
            {/* <img src="https://dummyimage.com/1020x600" alt="" /> */}
          </div>
          <div className="flex flex-col gap-5">
            <Link to="/discount">
              <img
                className="w-[720px] h-[290px]"
                src="https://thumbs.dreamstime.com/b/ecommerce-web-banner-d-smartphone-illustration-shopping-bags-wallet-credit-card-icons-pump-out-screen-typography-sale-233798488.jpg"
                alt=""
              />
            </Link>
            <Link to="/big-deal">
              <img
                className="w-[720px] h-[290px]"
                src="https://i.pinimg.com/736x/96/71/5b/96715bbf8952e54608f71d8894ee5472.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Banner;