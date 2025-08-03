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
    <div className={cls.wrap}>
      <h1 className={cls.title}>
        Исторические даты
      </h1>
      <div className={cls.circle}>
        <CircleWithPoints
          activePoint={currentSlide}
          pointsList={pointsList}
          onPointClick={onPointClick}
        />
      </div>

      <div className={cls.wrapper}>
        <Quantity
          className={cls.year}
          value={history[currentSlide].from}
        />
        <Quantity
          className={cls.year}
          value={history[currentSlide].to}
        />
      </div>

      <div className={cls.container}>
        <PeriodNavigation
          clasName={cls.period}
          currentSlide={currentSlide}
          totalSlides={history.length}
          onPrev={prevPeriod}
          onNext={nextPeriod}
        />

        <HistorySlider
          slides={history[currentSlide].slides}
        />
      </div>
    </div>
  );
};

export default History;
