import React from 'react';
import '../../cssFiles/elements-css/button.css';

const Button = ({text, action='button'}) => {


  return (
    <button type={action} className='basic-button'>{text}</button>
  );

}

export default Button;