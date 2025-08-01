import { useEffect, useState } from 'react';
import cls from './History.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Quantity from "components/Quantity/Quantity";
import CircleWithPoints from "components/CircleWithPoints/CircleWithPoints";
import PeriodNavigation from "components/PeriodNavigation/PeriodNavigation";
import HistorySlider from "components/HistorySlider/HistorySlider";

export interface Slide {
  title: number;
  description: string;
}

export interface DatePoint {
  from: number;
  to: number;
  title: string;
  slides: Slide[];
}

interface SliderProps {
  history: DatePoint[];
}

const History = ({ history }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPeriod = () => {
    if (currentSlide < history.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevPeriod = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const onPointClick = (index: number) => {
    setCurrentSlide(index);
  };

  const pointsList = history.map((item) => {
    return {title: item.title}
  })

  return (
    <div>
      <CircleWithPoints activePoint={currentSlide} pointsList={pointsList} onPointClick={onPointClick} />

      <div className={cls.innerHistoryTitle}>
        <Quantity className={cls.historyTitle} value={history[currentSlide].from} />
        <Quantity className={cls.historyTitle} value={history[currentSlide].to} />
      </div>

      <PeriodNavigation
        currentSlide={currentSlide}
        totalSlides={history.length}
        onPrev={prevPeriod}
        onNext={nextPeriod}
      />

      <HistorySlider
        slides={history[currentSlide].slides}
        isMobile={isMobile}
      />
    </div>
  );
};

export default History;
