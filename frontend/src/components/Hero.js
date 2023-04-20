import React from 'react';
import '../cssFiles/hero.css';
import UpperText from './layout-parts/UpperText';
import avocado from '../images/hero-avocado.png';
import Button from './elements/Button';

const Hero = () => {


  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
          <UpperText title={'Создаю 3D графику'}
                     description={'Я предоставляю полный цикл услуг: от подбора референсов до готового конечного продукта.'}/>
            <Button text={'Смотреть работы'}/>
        </div>
        <img src={avocado} alt='avocado'/>
    </div>
  )
}

export default Hero;