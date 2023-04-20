import React from 'react';

const UpperText = ({title, description}) => {


  return (
    <>
        <h1>{title}</h1>
        <p className='global-description'>
            {description} 
        </p>
    </>
  );
};

export default UpperText;