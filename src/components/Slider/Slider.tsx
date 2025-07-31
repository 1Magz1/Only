import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import cls from './Slide.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Quantity from "components/Quantity/Quantity";

export interface Slide {
  title: string;
  description: string;
}

export interface History {
  from: number;
  to: number;
  slides: Slide[];
}

interface SliderProps {
  history: History[];
}

const Slider = ({ history }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });
  };

  const nextPeriod = () => {
    if (currentSlide < history.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      swiperRef.current?.slideTo(0);
      setActiveIndex(0);
    }
  };

  const prevPeriod = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      swiperRef.current?.slideTo(0);
      setActiveIndex(0);
    }
  };

  const currentSlidesLength = history[currentSlide].slides.length;
  const slidesPerView = isMobile ? 1 : 4;

  return (
    <div>
      <div className={cls.innerHistoryTitle}>
        <Quantity className={cls.historyTitle} value={history[currentSlide].from}/>
        <Quantity className={cls.historyTitle} value={history[currentSlide].to}/>
      </div>
      <div className={cls.periodNavigation}>
        <span>{currentSlide + 1}/{history.length}</span>
        <div>
          <button
            className={cls.navButton}
            onClick={prevPeriod}
            disabled={currentSlide === 0}
          >
            {'<'}
          </button>
          <button
            className={cls.navButton}
            onClick={nextPeriod}
            disabled={currentSlide === history.length - 1}
          >
            {'>'}
          </button>
        </div>
      </div>

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
        {history[currentSlide].slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <h3 className={cls.cardTitle}>{slide.title}</h3>
            <p className={cls.cardText}>{slide.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={cls.innerNavButtons}>
        <button
          className={cls.navButton}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
        >
          {'<'}
        </button>
        <button
          className={cls.navButton}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex >= currentSlidesLength - slidesPerView}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
