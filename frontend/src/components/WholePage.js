import React from 'react';
import useScroll from '../customHooks/useScroll';
import UseElement from '../customHooks/UseElement';
import componentsData from '../data/componentsData';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


const WholePage = () => {

  useScroll();

  return (
    <>
      <Menu/>
      {componentsData.map(comp => 
      <UseElement key={comp.id} nameOfTheComponent={comp.name}
                  component={comp.component}/>)}
      <Footer/>
    </>
  )
}

export default WholePage;