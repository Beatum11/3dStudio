import React from 'react';
import Service from '../elements/Service';

const ServicesList = () => {


  return (
    <ul>
        <Service title={'Анимация для сайта'}
             price={'От 15 тысяч рублей'} />

        <Service title={'Моушендизайн'}
            price={'От 20 тысяч рублей'}/>

        <Service title={'Создание персонажа'}
            price={'От 15 тысяч рублей'} />

        <Service title={'Визуальные эффекты'} 
        price={'От 15 тысяч рублей'}/>

        <Service title={'Создание окружения'}
            price={'От 25 тысяч рублей'}/>
    </ul>
  )
}

export default ServicesList;