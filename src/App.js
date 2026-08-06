import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";

import Home from "./components/Home";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Addproduct from "./components/Addproduct";
import Makepayment from "./components/Makepayment";
import About from "./components/About";
import Shoes from "./components/Shoes";
import Women from "./components/Women";
import Jewellery from "./components/Jewellery";
import Contact from "./components/Contact";
import Getproductss from "./components/Getproductss";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header bg-secondary">
          <h1 className="kk">
            Shopping in Nairobi: My Top Picks for Kenyan Fashion Designers
          </h1>
        </header>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Getproductss />} />
          <Route path="/women" element={<Women />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* Floating Chat Button */}
        <ChatButton />

        <Footer />

      </div>
    </Router>
  );
}

export default App;