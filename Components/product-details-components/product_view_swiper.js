import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() { 
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //     // when window width is >= 640px
        //     320: {
        //       width: 640,
        //       slidesPerView: 4,
        //     },
        //     // when window width is >= 768px
        //     768: {
        //       width: 768,
        //       slidesPerView: 5,
        //     },
            
        //   }}
        navigation={true}
        modules={[Navigation]}
        className="product_view_swiper"
      >
        <SwiperSlide><img src="/product/watch.png" alt="product img"></img></SwiperSlide>
        <SwiperSlide><img className="product_view_single_img" src="/product/watch.png" alt="product img"></img></SwiperSlide>
        <SwiperSlide><img className="product_view_single_img" src="/product/watch.png" alt="product img"></img></SwiperSlide>
        <SwiperSlide><img className="product_view_single_img" src="/product/watch.png" alt="product img"></img></SwiperSlide>
        <SwiperSlide><img src="/product/watch.png" alt="product img"></img></SwiperSlide>
        <SwiperSlide><img src="/product/watch.png" alt="product img"></img></SwiperSlide>
      </Swiper>
    </>
  );
}
