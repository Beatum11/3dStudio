import React from 'react';
import UpperText from '../components/layout-parts/UpperText';
import ServicesList from './layout-parts/ServicesList';

const Services = () => {


  return (
    <div className='global-container section-basic'>
        <UpperText title={'Services'}
                   description={'Решаю ширрокий спектр задач: от создания простой анимации до полноценного синематика.'}/>
        <ServicesList/>
    </div>
  );

}

export default Services;