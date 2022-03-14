import React, { useState } from "react";
import './style.css'
import insta from './image/footer-instagram.png'
import telegram from './image/footer-telegram.png'
import viber from './image/footer-viber.png'
import facebook from './image/footer-facebook.png'
import visa from './image/visa.png'
import mastercard from './image/mastercard.png'

export default function LastBody(){
    

    return(
        <div className="LSTDiv">
            <div>
                <p>Каталог Товаров</p>
                <a to='/ERROR'> Товары Для Коней</a>
                <a to='/ERROR'>Товары для Пони </a>
                <a to='/ERROR'>Товары для Людей </a>
                <a to='/ERROR'>Товары для Инопланетян </a>
                <a to='/ERROR'>Товары для Грызунов </a>
                <a to='/ERROR'>Товары для Настоящих Мужчин </a>
            </div>
            <div>
                <p>Клиентам</p>
                <a to='/ERROR'>Доставка</a>
                <a to='/ERROR'>Возврат и обмен </a>
                <a to='/ERROR'>Аренда </a>
                <a to='/ERROR'>Блог </a>
                <a to='/ERROR'>О компании</a>
                <a to='/ERROR'>Бонусная Программа </a>
            </div>
            <div>
                <p>Полезное</p>
                <a to='/ERROR'>Договор общественной оферты </a>
                <a to='/ERROR'>Политика Конфиденциальности </a>
                <a to='/ERROR'>Политика  безопасности</a>
                <a to='/ERROR'>Карта Сайта </a>
            </div>
            <div>
                <p>Контакты</p>
                <li style={{fontSize: '17px',fontWeight: 'bolder',marginBottom:'16px'}}>0 800 555 35 35</li>
                <li style={{color: 'gray',fontSize:'13px'}}>Бесплатно по Украине</li>
                <li style={{height: '20px',color: 'gray',fontSize:'13px'}}>График работы call-центра</li>
                <li style={{fontSize: '14px'}}>ПН - ПТ: 09:00 - 20:00 </li>
                <li style={{fontSize: '14px'}}>СБ: 09:00 - 18:00</li>
                <li style={{fontSize: '14px'}}>ВС: 10:00 - 17:00</li>
                <div className="LSTDivImg">
                    <img src={insta}></img>
                    <img src={viber}></img>
                    <img src={facebook}></img>
                    <img src={telegram}></img>
                    <img src={mastercard}></img>
                    <img src={visa}></img>
                </div>
            </div>
        </div>
    )
}

