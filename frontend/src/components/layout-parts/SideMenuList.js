import React from 'react';
import '../../cssFiles//menu/side-menu.css';


const SideMenuList = () => {

  return (
    <ul className='sideMenu-list'>
        <li>
          <a href='/?section=hero'>Main</a>
        </li>
        <li>
          <a href='/?section=about'>About</a>
        </li>
        <li>
          <a href='/?section=portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='/?section=process'>Process</a>
        </li>
        <li>
          <a href='/?section=services'>Services</a>
        </li>
        <li>
          <a href='/?section=contacts'>Contacts</a>
        </li>
    </ul>
  )
}

export default SideMenuList;