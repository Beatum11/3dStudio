import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WholePage from './components/WholePage';
import SideMenu from './components/menu-components/SideMenu';


function App() {
  return (

    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<WholePage/>} />
         <Route exact path="/sidemenu" element={<SideMenu/>} />
      </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
