import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide><div className="slide">Slide 1</div></SwiperSlide>
      <SwiperSlide><div className="slide">Slide 2</div></SwiperSlide>
      <SwiperSlide><div className="slide">Slide 3</div></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
