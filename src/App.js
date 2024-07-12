import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carosel from './Components/carosel';
import Products from './Components/OurProduct';
import Choose from './Components/Choose';
import End from './Components/End';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
function App() {
  return (
    <div className='App'>
    <Header></Header>
    <Carosel></Carosel>
    <Choose></Choose>
    <Products></Products>
    <End></End>
    <Footer></Footer>
    </div>
  );
}

export default App;
