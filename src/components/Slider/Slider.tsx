import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface Slide {
  title: string,
  description: string,
}

export interface History {
  from: number;
  to: number;
  slides: Slide[]
}

interface SliderProps {
  history: History[]
}

const Slider = ({history}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);

    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);

    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }

  return (
    <div>
      <span>{currentSlide + 1}/{history.length}</span>
      <button onClick={prevSlide} disabled={currentSlide + 1 === 1}>
        Prev
      </button>
      <button onClick={nextSlide} disabled={currentSlide === history.length - 1}>
        Next
      </button>
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
      >
        {history[currentSlide].slides.map((slide) =>
          <SwiperSlide key={slide.title}>
            <span>{slide.title}</span>
            <p>{slide.description}</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
