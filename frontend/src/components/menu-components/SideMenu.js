import React from 'react';
import '../../cssFiles/menu/side-menu.css';
import SideMenuList from '../layout-parts/SideMenuList';
import UseNavigation from '../../customHooks/UseNavigation';


const SideMenu = () => {

  const { onNavigateHandler } = UseNavigation('/');

  return (
    <section className='sideMenu-wrapper'>
        <button onClick={onNavigateHandler}>&#10060;</button>
        <div className='sideMenu-container'>
            <SideMenuList/>
        </div>

    </section>
    
  )
}

export default SideMenu;