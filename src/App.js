import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Getproductss from './components/Getproductss';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Notfound from './components/Notfound';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Makepayment from './components/Makepayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Women from './components/Women';
import Jewellery from './components/Jewellery';




function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header bg-secondary">        
        <h1 className='kk'>Shopping in Nairobi: My Top Picks for Kenyan Fashion Designers</h1>  
      </header>

     {/* the navigation component */}
      <Navbar/>

      {/* carousel components] */}
     
      <Routes>
        <Route path='/' element={<Getproductss/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shoes' element={<Shoes/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/*'element={<Notfound/>}/>
        <Route path='/' element={<Home/>}/>
        
      </Routes>

      {/* footer component */}
     <Footer/>
    </div>
   </Router>
  );
}

export default App;
