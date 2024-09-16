import './App.css';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Resume from './Components/Resume/Resume';
import Portfolio from  './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import SwipperComponent from './Components/Slider/Slider';


function App() {
  return (
    <>
    <Sidebar />
    <div className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Blog />
      <SwipperComponent />
      <Contact />
    </div>
    </>
  );
}

export default App;
