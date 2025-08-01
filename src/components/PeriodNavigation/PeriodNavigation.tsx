import cls from './PeriodNavigation.module.scss';

interface PeriodNavigationProps {
  currentSlide: number;
  totalSlides: number;
  clasName?: string;
  onPrev: () => void;
  onNext: () => void;
}

const PeriodNavigation = ({ currentSlide, totalSlides, onPrev, onNext, clasName }: PeriodNavigationProps) => {
  return (
    <div className={`${cls.periodNavigation} ${clasName}`}>
      <span>{currentSlide + 1}/{totalSlides}</span>
      <div>
        <button
          className={cls.navButton}
          onClick={onPrev}
          disabled={currentSlide === 0}
        >
          {'<'}
        </button>
        <button
          className={cls.navButton}
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default PeriodNavigation;
