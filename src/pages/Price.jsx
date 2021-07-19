import React, { useEffect }  from 'react';
// Добавили jquery в зависимости
import $ from 'jquery';
import './Price.css';


function Price() {

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
    <li><a href="/galery">Фотогалерея</a></li>
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


<div class="wrapper">
        <div class="pricing-table group">
            <h1 class="heading">
            </h1>
            <div class="block personal fl">
                <h2 class="title">Redactor Pro</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>20</span>
                        <sub>/мес.</sub>
                    </p>
                    <p class="hint">Идеален для профессиональных фотографов</p>
                </div>
                <ul class="features">
                    <li><span class="fontawesome-cog"></span>Поддержка HD файлов</li>
                    <li><span class="fontawesome-star"></span>100 000+ Ресурсы для дизайна шаблонов, стикеров и шрифтов</li>
                    <li><span class="fontawesome-dashboard"></span>10GB в вашем распоряжении</li>
                    <li><span class="fontawesome-cloud"></span>Защита хранимой информации</li>
                </ul>
                <div class="pt-footer">
                    <p>Host My Website</p>
                </div>
            </div>
            <div class="block professional fl">
                <h2 class="title">Создание презентаций</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>99</span>
                        <sub>/от.</sub>
                    </p>
                    <p class="hint">Создание презентаций мирового уровня</p>
                </div>
                <ul class="features">
                    <li><span class="fontawesome-cog"></span>Понятный и красивый дизайн</li>
                    <li><span class="fontawesome-star"></span>Легально купленыые фото, графика и шрифты</li>
                    <li><span class="fontawesome-dashboard"></span>Стабильная обратная связь</li>
                    <li><span class="fontawesome-cloud"></span>Конфиденциальность</li>
                </ul>
                <div class="pt-footer">
                    <p>Модерация сообществ</p>
                </div>
            </div>
            <div class="block business fl">
                <h2 class="title">Продвижение</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>400</span>
                        <sub>/от.</sub>
                    </p>
                    <p class="hint">Ведение любой социальной сети</p>
                </div>

                <ul class="features">
                    <li><span class="fontawesome-cog"></span>Создание контент-плана</li>
                    <li><span class="fontawesome-star"></span>Индивидуальный подход</li>
                    <li><span class="fontawesome-dashboard"></span>Гарантия прироста аудитории, увеличение лояльности.</li>
                    <li><span class="fontawesome-cloud"></span>Уникальный авторский контент</li>
                </ul>

                <div class="pt-footer">
                    <p>Host My Website</p>
                </div>
            </div>
        </div>
    </div>





    {/* <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <h2>ПОЧЕМУ МЫ ЛУЧШИЕ?</h2>
                        </div>
                        <div class="text">Приоритетную роль мы всегда уделяем вопросам качества на всех этапах производства и реализации продукции. У нас работают только проверенные специалисты, мы спользуем исключительно высококачественное источники, внедряем и используем наилучшие технологии. Работаем с нашими клиентами максимально быстро и эффективно.</div>
                        
                        
                    </div>
                </div>
            </div>
        </div> */}



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

export default Price;


