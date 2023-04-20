import React from 'react';
import '../cssFiles/menu.css';
import UseNavigation from '../customHooks/UseNavigation';

const Menu = () => {

  const { onNavigateHandler } = UseNavigation('/sidemenu');


  return (
    <div className='menu-container'>
        <p className='menu-name'>Daria B.</p>
        <p onClick={onNavigateHandler} className='hamburger'>&equiv;</p>
    </div>
  );
}

export default Menu;