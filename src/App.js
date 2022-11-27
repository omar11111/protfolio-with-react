import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

import Spline from '@splinetool/react-spline';
// components
import Navbar from './components/Navbar';
import Scene from './spline/final.splinecode';
import AboutText from './components/AboutText';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container-fluid'>
      
      <div className='first-section'>
      <Navbar/>
        <div className='about-section row'>
        

          <div className='col-md-6   about-text'>
            <AboutText />
          </div>

          <div className='col-md-6 spline'>
            <div className=' mx-auto h-100'>
            <Spline scene={Scene} />

            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    
      

    </div>


  );
}

export default App;
