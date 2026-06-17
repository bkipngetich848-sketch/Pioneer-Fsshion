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



function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">        
        <h1>Sokogarden Buy & Sell Online</h1>       
      </header>

     {/* the navigation component */}
      <Navbar/>

      {/* carousel components] */}
      <Carousel/>

      <Routes>
        <Route path='/' element={<Getproductss/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/*'element={<Notfound/>}/>
      </Routes>

      {/* footer component */}
     <Footer/>
    </div>
   </Router>
  );
}

export default App;
