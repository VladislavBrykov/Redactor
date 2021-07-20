import './main.css';
import React, { Component }  from 'react';

function MainPage() {
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

            <div>
                <ul class="main-menu">
                    <img class="img" src="https://cdn.gallerix.asia/x/src/news/2018/Jan/fotor.jpg"></img> 
                </ul>
            </div>

            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div>
                            <p class="p">Spice up your type with CSS
                                <span class="span">Photo Editor Online</span>
                                    &mdash; Here’s to the Crazy Ones, Think Different &mdash;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;


