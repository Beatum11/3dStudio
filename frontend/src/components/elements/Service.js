import React from 'react';
import '../../cssFiles/elements-css/service.css';
import Button from './Button';

const Service = ({title, price}) => {

  return (
    <li className='service-container'>
      <div className='text-wrapper'>
        <p>{title}</p> 
        <p className='service-price'>{price}</p>
      </div>
       
       <Button text={'Заказать'}/>
    </li>
  )
}

export default Service;