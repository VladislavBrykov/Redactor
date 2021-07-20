import React, { useEffect }  from 'react';
import './News.css';

function Price() {

  return (
      <div>
          <ul class="main-menu">
              <li class="active"><a href="/">Главная</a></li>
              <li><a href="/red">Redactor</a></li>   
              <li><a href="/price">Услуги</a></li>
              <li><a href="/news">Новости</a></li>
              <li><a href="/galery">Фотогалерея</a></li>
              <li><a href="/contacts">Контакты</a></li>       
          </ul>

          <div class="end-description">
              <p>Наш фоторедактор есть двух версий: обычная и расширенная (Extended).
              Новая версия Photoshop содержит в себе много улучшений и нововведений, о которые мы и рассмотрим в данной статье. Прежде всего улучшена производительность программы, расширены возможности редактирования фотошоп. Изменен интерфейс фотошопа: документы могут отображаться не только стандартно, в отдельных окнах, но также в виде вкладок. Повышена интуитивность пользовательского интерфейса.</p>
              <p>Made by PhotoEditor</p>
          </div>

          <div class="container">
              <div class="title-section">
                  <p class="main">Последние новости</p>
              </div>

              <div class="columns">
                  <div class="row">
                      <div class="col-md-6 feature">
                          <div class="image">
                              <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"></img>
                          </div>
                          <div class="title text-left">
                              <p>Adobe Photoshop</p>
                          </div>
                          <div class="description">
                              <p>Не так давно в свет вышла новая версия графического редактора Adobe Photoshop - версия Photoshop CS6, а за ним вышла еще одна: Фотошоп СС. В этой статье я хочу рассказать именно о них, а также о том, почему стоит купить фотошоп. И прежде чем говорить непосредственно о самой последних версиях, давайте вспомним, зачем же собственно нужен photoshop? «Adobe Photoshop» - это целое семейство программного обеспечения, разработанное с целью обработки и редактирования различного типа изображений. На сегодняшний день миллионы людей используют фотошоп различных версий для работы и в личных целях. И с каждым обновлением линейки фотошопа, редактор становится все лучше, добавляются новые функции и возможности, исправляются погрешности и недочеты предыдущих версий, привносятся свежие идеи.</p>
                          </div>
                      </div>
                      <div class="col-md-6 feature">
                          <div class="image-right">
                              <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"></img>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="end-description">
                  <p>Adobe Photoshop помог произвести революцию в том, как фотографы всего мира снимают, редактируют и готовят свои фотографии для нас - их потребителей. Большинство изображений, которые мы сейчас встречаем в повседневной жизни, были отредактированы и подготовлены с помощью программных продуктов компании Adobe.</p>
                  <p>Made by PhotoEditor</p>
              </div>
          </div>
      </div>
    );
}

export default Price;
