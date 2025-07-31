import cls from './MainPage.module.scss'
import Slider from "components/Slider/Slider";
function MainPage() {
  return (
    <div className={cls.wrap}>
      <Slider/>
    </div>
  );
}

export default MainPage;
