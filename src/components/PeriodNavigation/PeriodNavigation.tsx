import cls from './PeriodNavigation.module.scss';
import LeftIcon from 'shared/assets/icons/left-icon.svg'

interface PeriodNavigationProps {
  currentSlide: number;
  totalSlides: number;
  clasName?: string;
  onPrev: () => void;
  onNext: () => void;
}

const PeriodNavigation = (props: PeriodNavigationProps) => {
  const { currentSlide, totalSlides, onPrev, onNext, clasName } = props;
  const count = currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1;
  const total = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

  return (
    <div className={`${cls.wrapper} ${clasName}`}>
      <span>{count}/{total}</span>
      <div>
        <button
          className={cls.button}
          onClick={onPrev}
          disabled={currentSlide === 0}
        >
          <LeftIcon/>
        </button>
        <button
          className={cls.button}
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
        >
          <LeftIcon style={{transform: 'rotate(-180deg)'}} />
        </button>
      </div>
    </div>
  );
};

export default PeriodNavigation;
