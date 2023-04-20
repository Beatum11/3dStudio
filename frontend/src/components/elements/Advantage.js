import React from 'react';
import '../../cssFiles/elements-css/advantage.css';

const Advantage = ({title, text}) => {


  return (
    <li className='advantage-container'>
        <h2>{title}</h2>
        <p>{text}</p>
    </li>
  );
}

export default Advantage;