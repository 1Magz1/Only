import cls from './MainPage.module.scss'
import Slider, {History} from "components/Slider/Slider";
const history = [
  {
    from: 1960,
    to: 1987,
    slides: [
      { title: 1960, description: 'Первый лазер был продемонстрирован Теодором Майманом.' },
      { title: 1961, description: 'Юрий Гагарин стал первым человеком в космосе.' },
      { title: 1963, description: 'The Beatles выпустили дебютный альбом "Please Please Me".' },
      { title: 1965, description: 'IBM выпускает первый коммерческий компьютер IBM System/360.' },
      { title: 1967, description: 'Первая успешная пересадка сердца, выполненная Кристианом Барнардом.' },
      { title: 1969, description: 'Первый человек на Луне — Нил Армстронг ("Аполлон-11").' },
      { title: 1971, description: 'Изобретение микропроцессора Intel 4004.' },
      { title: 1973, description: 'Запуск проекта ARPANET — прообраза современного интернета.' },
      { title: 1975, description: 'Основание Microsoft Биллом Гейтсом и Полом Алленом.' },
      { title: 1977, description: 'Премьера "Звёздных войн" (Star Wars) Джорджа Лукаса.' },
      { title: 1979, description: 'Sony выпускает Walkman — революцию в персональном аудио.' },
      { title: 1981, description: 'Запуск первого шаттла "Колумбия" (NASA).' },
      { title: 1983, description: 'Выход первого мобильного телефона Motorola DynaTAC 8000X.' },
      { title: 1984, description: 'Apple представляет Macintosh с графическим интерфейсом.' },
      { title: 1985, description: 'Открытие озоновой дыры над Антарктидой.' },
      { title: 1986, description: 'Катастрофа шаттла "Челленджер" (упоминается без деталей).' }
    ]
  },
  {
    from: 1987,
    to: 1999,
    slides: [
      { title: 1987, description: 'Microsoft выпускает Windows 2.0. Начало эпохи графических интерфейсов.' },
      { title: 1988, description: 'Создание первого интернет-червя Морриса — толчок к развитию кибербезопасности.' },
      { title: 1989, description: 'Изобретение Всемирной паутины (WWW) Тимом Бернерсом-Ли.' },
      { title: 1990, description: 'Запуск телескопа "Хаббл" — новое окно во Вселенную.' },
      { title: 1991, description: 'Рождение Linux — ядра операционной системы от Линуса Торвальдса.' },
      { title: 1992, description: 'Выход браузера Mosaic — популяризация интернета.' },
      { title: 1993, description: 'Создание процессора Pentium — мощный скачок в производительности ПК.' },
      { title: 1994, description: 'Основание Amazon — будущего гиганта электронной коммерции.' },
      { title: 1995, description: 'Выход Windows 95 — революция в пользовательских ОС.' },
      { title: 1996, description: 'Появление Google как поисковой системы (тогда BackRub).' },
      { title: 1997, description: 'Deep Blue побеждает Гарри Каспарова в шахматах.' },
      { title: 1998, description: 'Основание Google как компании.' },
      { title: 1999, description: 'Запуск Euro — единой валюты для Еврозоны.' }
    ]
  },
  {
    from: 1992,
    to: 1997,
    slides: [
      { title: 1992, description: 'Нобелевская премия по литературе — Дерек Уолкотт.' },
      { title: 1993, description: 'Выход игры "Doom" — начало эры 3D-шутеров.' },
      { title: 1994, description: 'Премьера "Короля Льва" — культового анимационного фильма.' },
      { title: 1995, description: 'Основание eBay — первой крупной онлайн-аукционной платформы.' },
      { title: 1996, description: 'Клонирование овечки Долли — прорыв в генетике.' },
      { title: 1997, description: 'Публикация первой книги о Гарри Поттере.' }
    ]
  },
  {
    from: 1997,
    to: 2002,
    slides: [
      { title: 1997, description: 'Запуск сервиса Netflix — будущего лидера стриминга.' },
      { title: 1998, description: 'Основание PayPal — революция в онлайн-платежах.' },
      { title: 1999, description: 'Выход The Matrix — культового фантастического фильма.' },
      { title: 2000, description: 'Запуск Wikipedia — крупнейшей энциклопедии.' },
      { title: 2001, description: 'iPod от Apple меняет индустрию музыки.' },
      { title: 2002, description: 'Первое использование 3G-сетей — новый этап мобильной связи.' }
    ]
  },
  {
    from: 2002,
    to: 2015,
    slides: [
      { title: 2003, description: 'Запуск Skype — революция в онлайн-общении.' },
      { title: 2004, description: 'Основание Facebook — начало эры социальных сетей.' },
      { title: 2005, description: 'YouTube: первое видео "Me at the zoo" положило начало видеоплатформам.' },
      { title: 2007, description: 'iPhone от Apple — смартфоны меняют мир.' },
      { title: 2008, description: 'Запуск Android OS — конкурент iOS.' },
      { title: 2009, description: 'Биткоин: Сатоши Накамото публикует whitepaper криптовалюты.' },
      { title: 2010, description: 'iPad дебютирует — новый класс устройств.' },
      { title: 2011, description: 'IBM Watson побеждает в Jeopardy! — прорыв в ИИ.' },
      { title: 2012, description: 'Curiosity садится на Марс — новые горизонты космоса.' },
      { title: 2013, description: 'Google Glass — первые шаги в дополненной реальности.' },
      { title: 2014, description: 'Вирусный флешмоб Ice Bucket Challenge для изучения БАС.' }
    ]
  },
  {
    from: 2015,
    to: 2022,
    slides: [
      { title: 2015, description: 'Парижское соглашение по климату — глобальная экологическая инициатива.' },
      { title: 2016, description: 'AlphaGo побеждает чемпиона по игре Го — прорыв в ИИ.' },
      { title: 2017, description: 'Биткоин достигает $20,000 — бум криптовалют.' },
      { title: 2018, description: 'Запуск Falcon Heavy от SpaceX — успешная посадка ракет.' },
      { title: 2019, description: 'Первое фото чёрной дыры — достижение астрофизики.' },
      { title: 2020, description: 'Разработка вакцин от COVID-19 в рекордные сроки.' },
      { title: 2021, description: 'Запуск телескопа James Webb — новая эра в астрономии.' },
      { title: 2022, description: 'DALL-E 2 от OpenAI — революция в генеративном ИИ.' }
    ]
  }
] as unknown as History[];

function MainPage() {
  return (
    <div className={cls.page}>
      <Slider history={history}/>
    </div>
  );
}

export default MainPage;
