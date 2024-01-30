//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/Home";
import About from "./features/About";
import Nav from "./features/Nav";
import Footer from "./features/Footer";
import Affiliate from "./features/Affiliate";
import { Fragment } from "react";
import Contact from "./features/Contact";
import Performance from "./features/Performance";
import ScrollToTop from "./features/ScrollToTop";
//  import { Route } from 'react-router-dom';


function App() {
  return (
    
    <Fragment>
      <BrowserRouter>
      <ScrollToTop/>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Affiliate" element={<Affiliate />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Performance" element={<Performance />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
      {/* <Performance/> */}
    </Fragment>
  );
}

export default App;
