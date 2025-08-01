import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { useRef, useState } from 'react';
import cls from './HistorySlider.module.scss';
import {Slide} from "components/History/History";

interface HistorySliderProps {
  slides: Slide[];
  isMobile: boolean;
}

const HistorySlider = ({ slides, isMobile }: HistorySliderProps) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = isMobile ? 1 : 4;

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });
  };

  return (
    <div className={cls.slider}>
      <div className={cls.container}>
        <Swiper
          onInit={handleSwiperInit}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            enabled: isMobile,
          }}
          spaceBetween={20}
          slidesPerView={slidesPerView}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <h3 className={cls.title}>{slide.title}</h3>
              <p className={cls.text}>{slide.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={cls.wrapper}>
        <button
          className={cls.button}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
        >
          {'<'}
        </button>
        <button
          className={cls.button}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex >= slides.length - slidesPerView}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default HistorySlider;
