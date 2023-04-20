import React from 'react';
import '../cssFiles/portfolio.css';
import Button from './elements/Button';
import imagesData from '../data/imagesData';


const Portfolio = () => {



  return (
    <div className='portfolio-wrapper'>
        <div className='section-basic'>
            <h1>Portfolio</h1>
            <div className='images-container'>
                {imagesData.map((image) => (
                <img key={image.id} src={image.src} alt="" />
                  ))
                }
            </div>
            <div className='portfolio-buttons'>
                <Button text={'Все работы'}/>
                <Button text={'Связаться'}/>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;