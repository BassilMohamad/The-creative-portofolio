import React from "react";
//import pages 
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Global Styled
import GlobalStyled from "./components/GlobalStyles";
import Nav from "./components/Nav"
//import 
import {Route,Routes } from "react-router-dom"
function App() {
  return (
    <div className="App"> 
      <GlobalStyled />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} ></Route>
        <Route path="/work" exact element={<OurWork />} ></Route>
        <Route path="/contact" exact element={<ContactUs />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
