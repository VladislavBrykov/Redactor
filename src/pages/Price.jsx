import React, { useEffect }  from 'react';
import './Price.css';

function Price() {
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

            <div class="wrapper">
                <div class="pricing-table group">
                    <h1 class="heading"></h1>
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


