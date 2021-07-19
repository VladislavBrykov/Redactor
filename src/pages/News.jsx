import React, { useEffect }  from 'react';
// Добавили jquery в зависимости
import $ from 'jquery';
import './News.css';


function Price() {

    // Код js вставляется в хук useEffect, он срабатывает каждый раз, при монтировании компонента
    useEffect(() => {
   
    }, []);
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





{/* <div class="container">
    <div class="inner-container">
      <div class="left-section">
        <h1 class="left-section-text">
          NEW <br />YORK
        </h1>
        <div class="left-section-bottom">
          <p class="left-section-bottom-text">
            #NewYork
            <span class="left-section-bottom-text-space">
              #NeverBeen
            </span>
            <span class="left-section-bottom-text-space">
              #BigApple
            </span>
          </p>
        </div>
      </div>
      <div class="right-section">
        <h2 class="right-section-header">
          Statue of Liberty
        </h2>
        <p class="right-section-likes">
          3.2 million like this
        </p>
        <p class="right-section-text">
          "Ut in dapibus metus, eu blandit enim. Aenean sollicitudin condimentum condimentum. Vivamus gravida hendrerit mi ut ornare. Ut pretium neque id porta congue. Morbi ac arcu lacinia, pulvinar massa vitae, ornare neque. Donec et purus erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fermentum tortor a felis dapibus suscipit. Aliquam erat volutpat."
        </p>
        <div class="right-section-bottom">
          <div class="right-section-img-one right-section-bottom-flex"></div>
          <div class="right-section-img-two right-section-bottom-flex"></div>
          <div class="right-section-img-three right-section-bottom-flex"></div>
          <div class="right-section-img-four right-section-bottom-flex">
            <h3 class="right-section-img-four-text">
              +15
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div> */}

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
                    {/* <div class="title text-right">
                        <p>Web Design</p>
                    </div>
                    <div class="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div> */}
                </div>
            </div>

            {/* <div class="row">
                <div class="col-md-6 feature">
                    <div class="image">
                        <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"></img>
                    </div>
                    <div class="title text-left">
                        <p>Web Programming</p>
                    </div>
                    <div class="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div class="col-md-6 feature">
                    <div class="image-right">
                        <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"></img>
                    </div>
                    <div class="title text-right">
                        <p>Full Support</p>
                    </div>
                    <div class="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div> */}
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


