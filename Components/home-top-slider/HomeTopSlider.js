import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function HomeTopSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="home_Swiper_slider"
      >
        <SwiperSlide>
            <img className='home_slider_img' src='slider-img/slider-img-1.png' alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='home_slider_img' src='slider-img/slider-img-2.png' alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='home_slider_img' src='slider-img/slider-img-3.png' alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='home_slider_img' src='slider-img/slider-img-4.png' alt="img"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
