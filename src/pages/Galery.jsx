import React, { useEffect }  from 'react';
// Добавили jquery в зависимости
import $ from 'jquery';
import './News.css';


function Galery() {

    // Код js вставляется в хук useEffect, он срабатывает каждый раз, при монтировании компонента
    useEffect(() => {
   
    }, []);
    return (
        <div class="body">


<ul class="main-menu">
    <li class="active"><a href="/">Главная</a></li>
    <li><a href="/red">Redactor</a></li>   
    <li><a href="/price">Услуги</a></li>
    <li><a href="/news">Новости</a></li>
    <li><a href="#url">Фотогалерея</a></li>
    <li><a href="#url">Контакты</a></li>       
</ul>












        {/* <div className="editor-buttons">
        <input type="file" id="upload-file" placeholder="Upload a Picture" />
        <br/>
        <button id="vintage-btn">Vintage</button>
        <button id="lomo-btn">Lomo</button>
        <button id="clarity-btn">Clarity</button>
        <button id="sincity-btn">Sin City</button>
        <button id="crossprocess-btn">Cross Process</button>
        <button id="pinhole-btn">Pinhole</button>
        <button id="nostalgia-btn">Nostalgia</button>
        <button id="majestic-btn">Her Majesty</button>
        </div>
        <div className="preview-wrapper">
        <canvas id="canvas"></canvas>
      </div>

      <div className="editor-buttons">
        <input type="file" id="upload-file" placeholder="Upload a Picture" />
        <label htmlFor="upload-file">Загрузить картинку</label>
        <button id="download-btn">Скачать изображение</button>
        </div>


      <div className="filter-buttons">
        <div className="filter-group">
          <button id="brightness-dec">-</button>
          <span className="filter-name">Яркость</span>
          <button id="brightness-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="contrast-dec">-</button>
          <span className="filter-name">Контраст</span>
          <button id="contrast-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="saturation-dec">-</button>
          <span className="filter-name">Насыщенность</span>
          <button id="saturation-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="vibrance-dec">-</button>
          <span className="filter-name">Вибрация</span>
          <button id="vibrance-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="exposure-dec">-</button>
          <span className="filter-name">Экспозиция</span>
          <button id="exposure-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="noise-dec" className="disabled">-</button>
          <span className="filter-name">Шум</span>
          <button id="noise-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="sharpen-dec" className="disabled">-</button>
          <span className="filter-name">Резкость</span>
          <button id="sharpen-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="sepia-dec" className="disabled">-</button>
          <span className="filter-name">Сепия</span>
          <button id="sepia-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="hue-dec" className="disabled">-</button>
          <span className="filter-name">Оттенок</span>
          <button id="hue-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="blur-dec" className="disabled">-</button>
          <span className="filter-name">Размытие</span>
          <button id="blur-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="gamma-dec" className="disabled">-</button>
          <span className="filter-name">Гамма</span>
          <button id="gamma-inc">+</button>
        </div>
        <div className="filter-group">
          <button id="clip-dec" className="disabled">-</button>
          <span className="filter-name">Клип</span>
          <button id="clip-inc">+</button>
        </div>
      </div> */}
      {/* <div className="editor-buttons">
        <input type="file" id="upload-file" placeholder="Upload a Picture" />
        <label htmlFor="upload-file">Загрузить картинку</label>
        <button id="download-btn">Скачать изображение</button>
        <br/>
        <button id="vintage-btn">Vintage</button>
        <button id="lomo-btn">Lomo</button>
        <button id="clarity-btn">Clarity</button>
        <button id="sincity-btn">Sin City</button>
        <button id="crossprocess-btn">Cross Process</button>
        <button id="pinhole-btn">Pinhole</button>
        <button id="nostalgia-btn">Nostalgia</button>
        <button id="majestic-btn">Her Majesty</button>
        </div> */}

{/* ********************************************************************      первая строка фото */}
<div class="wrapper">
        <div class="pricing-table group">
            <h1 class="heading">
            </h1>
            <div class="block personal fl">
                <h2 class="title">Увеличение резкости</h2>
                <div class="content">
                    {/* <p class="price">
                        <sup>$</sup>
                        <span>20</span>
                        <sub>/мес.</sub>
                    </p> */}
                    <p class="hint">Видны мельчайшие детали</p>
                </div>
                <ul class="features">
                    <img id="galery"  src="https://bipbap.ru/wp-content/uploads/2018/06/alternative-girly-delicious-hair-Favim.com-4211337.jpeg" alt="Письма мастера дзен"></img>
                 
                </ul>
                <div class="pt-footer">
                    <p>11.06.2020</p>
                </div>
            </div>
            <div class="block professional fl">
                <h2 class="title">Усиление цвета</h2>
                <div class="content">
                    <p class="hint">Арбузики выглядят очень сочно</p>
                </div>
                <ul class="features">
                <img src="https://i.pinimg.com/564x/8d/ac/02/8dac02fe880dec811dd1a696c9f12753.jpg" alt="Письма мастера дзен"></img>
                </ul>
                <div class="pt-footer">
                <p>20.06.2020</p>
                </div>
            </div>
            <div class="block business fl">
                <h2 class="title">Освещение</h2>
                <div class="content">
                    {/* <p class="price">
                        <sup>$</sup>
                        <span>400</span>
                        <sub>/от.</sub>
                    </p> */}
                    <p class="hint">Откорректированы солнечные блики</p>
                </div>

                <ul class="features">
                <img src="https://vsitury.com.ua/uploads/168/51404/1.jpg" alt="Письма мастера дзен"></img>
                </ul>

                <div class="pt-footer">
                <p>25.06.2020</p>
                </div>
            </div>
        </div>
    </div>

{/* ********************************************************************  вторая строка фото */}

    <div class="wrapper">
        <div class="pricing-table group">
            <h1 class="heading">
            </h1>
            <div class="block personal fl">
                <h2 class="title">Ночное фото</h2>
                <div class="content">
                    <p class="hint">Подобран оптимальный уровень освещения</p>
                </div>
                <ul class="features">
                    <img src="https://bigjack24.ru/assets/images/resources/738/500x500/prezentacziya-2018.07.14-bmw-x4-(2)-1.jpg" alt="Письма мастера дзен"></img>
                </ul>
                <div class="pt-footer">
                <p>30.06.2020</p>
                </div>
            </div>
            <div class="block professional fl">
                <h2 class="title">Создание презентаций</h2>
                <div class="content">
                  
                    <p class="hint">Создание презентации для компании</p>
                </div>
                <ul class="features">
                <img src="https://i.pinimg.com/originals/c8/a9/19/c8a919d50fe403fcc60b2eb6585198af.jpg" alt="Письма мастера дзен"></img>
                </ul>
                <div class="pt-footer">
                <p>20.06.2020</p>
                </div>
            </div>
            <div class="block business fl">
                <h2 class="title">Продвижение</h2>
                <div class="content">
                 
                    <p class="hint">Ведение любой сети</p>
                </div>

                <ul class="features">
                <img src="https://www.themighty1290am.com/wp-content/uploads/2014/11/MACW-14-8112-CAD-Banner-November-500x500.jpg" alt="Письма мастера дзен"></img>
                </ul>

                <div class="pt-footer">
                <p>23.06.2020</p>
                </div>
            </div>
        </div>
    </div>





{/* ********************************************************************  третья строка фото */}

<div class="wrapper">
        <div class="pricing-table group">
            <h1 class="heading">
            </h1>
            <div class="block personal fl">
                <h2 class="title">Рекламные баннера</h2>
                <div class="content">
                    <p class="hint">Разработка рекламных баннеров для сайта</p>
                </div>
                <ul class="features">
                    <img src="https://www.crushpixel.com/static18/preview2/stock-photo-banner-template-design-with-world-photography-day-for-advertise-and-brochure-watercolor-illustration-2812259.jpg" alt="Письма мастера дзен"></img>
                </ul>
                <div class="pt-footer">
                <p>01.07.2021</p>
                </div>
            </div>
            <div class="block professional fl">
                <h2 class="title">Продажное фото</h2>
                <div class="content">
                  
                    <p class="hint">Обработка фото для продажи дома</p>
                </div>
                <ul class="features">
                <img src="https://www.archimir.ru/uploads/images/topic/2016/07/13/fd5b3cb57c_500.jpg" alt="Письма мастера дзен"></img>
                </ul>
                <div class="pt-footer">
                <p>22.08.2020</p>
                </div>
            </div>
            <div class="block business fl">
                <h2 class="title">Освещение</h2>
                <div class="content">
                 
                    <p class="hint">Откорректированы солнечные блики</p>
                </div>

                <ul class="features">
                <img src="https://avatarko.ru/img/kartinka/25/devushka_siluet_plyazh_24184.jpg" alt="Письма мастера дзен"></img>
                </ul>

                <div class="pt-footer">
                <p>02.10.2020</p>
                </div>
            </div>
        </div>
    </div>





<div>

<p class="p">
  Spice up your type with CSS
  <span class="span">
  Photo Editor Online
  </span>
  &mdash; Here’s to the Crazy Ones, Think Different &mdash;

</p>
</div>


    </div>
    );
}

export default Galery;


