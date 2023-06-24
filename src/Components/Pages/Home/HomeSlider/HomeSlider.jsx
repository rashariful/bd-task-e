import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[1020px] h-[600px]"
            src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[1020px] h-[600px]"
            src="https://static.vecteezy.com/system/resources/previews/001/776/835/non_2x/online-shopping-and-e-commerce-banner-vector.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[1020px] h-[600px]"
            src="https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
