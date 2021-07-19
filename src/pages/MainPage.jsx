import axios from 'axios';
import { Link } from 'react-router-dom';
import './main.css';
import React, { Component }  from 'react';

function MainPage() {
    // const styles = {//Стили для страницы
    //     position: 'absolute',
    //     top: '0px',
    //     left: '50%',
    //     transform: 'translateX(-50%)',
    // }

    const loadData = async () => { //Функция с запросом на сервер
        let login = document.getElementById('login').value;
        let password = document.getElementById('pass').value;
        let passwordConfirmation = document.getElementById('pass').value;
        let email = document.getElementById('email').value;
        
        const body = { "login": login, "password": password, "passwordConfirmation":passwordConfirmation, "email": email } // То что передаем на сервер
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';

        await axios.post(
            `http://localhost:3000/api/auth/register`,
            body
        );
        alert('На почту было отправлено письмо. Подтвердите регистрацию');
    }

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



  
{/* <header>
  <div class="container">
  <h3>Header</h3>
  </div>
</header> */}




{/* <section class="heroro">
    <div class="container">
        <div class="hero-content">
            <h1>Flexbox Sticky Footer</h1>
            <h2 class="h2">Обработка фотографий, обрезка, настройка и фотоэффекты без установки плагинов и программ</h2> 
           
        </div>
    </div>
</section> */}

<div>
<ul class="main-menu">
<img class="img" src="https://cdn.gallerix.asia/x/src/news/2018/Jan/fotor.jpg"></img> 
</ul>
</div>



{/* <section class="hero">
    <div class="container">
        <div class="hero-content">
            <div>
                <p class="p">Spice up your type with CSS
                    <span class="span">Photo Editor Online</span>
                        &mdash; Here’s to the Crazy Ones, Think Different &mdash;
                </p>
            </div>
            <ul class="features1">
              <li class="all-css">100% CSS</li> 
              <li class="js-free">JavaScript Free</li>
            </ul>
        </div>
  
    </div>
</section> */}



{/* <ul class="main-menu">
<img class="img" src="https://twilio-cms-prod.s3.amazonaws.com/original_images/Screen-Shot-2014-01-02-at-4.12.25-PM.png"></img> 
</ul> */}


<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div>
                <p class="p">Spice up your type with CSS
                    <span class="span">Photo Editor Online</span>
                        &mdash; Here’s to the Crazy Ones, Think Different &mdash;
                </p>
                
            </div>
            {/* <ul class="features1">
              <li class="all-css">100% CSS</li> 
              <li class="js-free">JavaScript Free</li>
            </ul> */}
        </div>
  
    </div>
</section>










      </div>
    );
}

export default MainPage;


