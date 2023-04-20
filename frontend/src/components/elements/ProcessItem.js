import React from 'react';
import '../../cssFiles/elements-css/process-item.css';

const ProcessItem = ({title, text}) => {

  return (
    <div className='process-item-container'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default ProcessItem;