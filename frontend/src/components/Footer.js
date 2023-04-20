import React from 'react';
import '../cssFiles/footer.css';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <div className='footer-container'>
        <ul className='footer-list'>
            <li>
            <Link to="hero" smooth={true} duration={500}>
              <p>Main</p>
            </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
                <p>About</p>
              </Link>  
            </li>
            <li>
              <Link to='portfolio' smooth={true} duration={500}>
                <p>Portfolio</p>
              </Link>
            </li>
            <li>
              <Link to='process' smooth={true} duration={500}>
                <p>Process</p>
              </Link>
            </li>
            <li>
              <Link to='services' smooth={true} duration={500}>
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link to='contacts' smooth={true} duration={500}>
                <p>Contacts</p>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer;