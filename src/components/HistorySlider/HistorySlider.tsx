import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import cls from './HistorySlider.module.scss';
import { Slide } from "components/History/History";
import RightIcon from 'shared/assets/icons/right-icon.svg';
import gsap from 'gsap';

interface HistorySliderProps {
  slides: Slide[];
  isMobile: boolean;
}

const HistorySlider = ({ slides, isMobile }: HistorySliderProps) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [displayedSlides, setDisplayedSlides] = useState<Slide[]>(slides);

  const slidesPerView = isMobile ? 1 : 4;

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });
  };

  useEffect(() => {
    if (JSON.stringify(slides) === JSON.stringify(displayedSlides)) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(contentRefs.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
          swiperRef.current?.slideTo(0, 0);
          setDisplayedSlides(slides);
        },
      });
    });

    return () => ctx.revert();
  }, [slides]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      );
    });

    return () => ctx.revert();
  }, [displayedSlides]);

  return (
    <div className={cls.slider}>
      <div>
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
          {displayedSlides.map((slide, idx) => (
            <SwiperSlide key={slide.title}>
              <div
                ref={el => (contentRefs.current[idx] = el)}
                className={cls.slideContent}
              >
                <h3 className={cls.title}>{slide.title}</h3>
                <p className={cls.text}>{slide.description}</p>
              </div>
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
          <RightIcon style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button
          className={cls.button}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex >= displayedSlides.length - slidesPerView}
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default HistorySlider;
