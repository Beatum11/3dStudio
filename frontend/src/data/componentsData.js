import About from '../components/About';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Services from '../components/Services';
import Contacts from '../components/Contacts';

const componentsData = [
    {
        id: 1, 
        name: 'hero',
        component: <Hero/>
    }, 
    {
        id: 2, 
        name: 'about',
        component: <About/>
    }, 
    {
        id: 3, 
        name: 'portfolio',
        component: <Portfolio/>
    }, 
    {
        id: 4, 
        name: 'process',
        component: <Process/>
    }, 
    {
        id: 5, 
        name: 'services',
        component: <Services/>
    }, 
    {
        id: 6, 
        name: 'contacts',
        component: <Contacts/>
    }, 
];

export default componentsData;