import React from 'react';
import '../cssFiles/about.css';
import UpperText from './layout-parts/UpperText';
import AdvantagesList from './layout-parts/AdvantagesList';

const About = () => {


  return (
    <section className='about-wrapper'>
      <div className='global-container section-basic'>
          <UpperText title={'About me'}
                      description={'Занимаюсь производством 3D графики на всех этапах производства: полный цикл создания модели, окружения и анимации.'}/>
          <AdvantagesList/>
      </div>
    </section>
  );
}

export default About;