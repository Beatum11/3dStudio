import React from 'react';
import '../../cssFiles/about.css';
import Advantage from '../elements/Advantage';

const AdvantagesList = () => {


  return (
    <ul className='about-advantages'>
        <Advantage title={'Гибкость'} text={'Решаю широкий спектр задач. От простой анимации для сайта до полноценного cgi ролика.'}/>
        <Advantage title={'Индивидуальный подход'}
                text={'Подбираю оптимальный вариант реализации вашей идеи. С учетом вашего бюджета.'}/>
        <Advantage title={'Официально'} text={'Работаю по договору с физическими и юридическими лицами, оформлен как самозанятый.'}/>
        <Advantage title={'Гибкость'} text={'Решаю широкий спектр задач. От простой анимации для сайта до полноценного cgi ролика.'}/>
    </ul>
  )
}

export default AdvantagesList;