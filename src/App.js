import React from "react";
//import pages 
import AboutUs from "./pages/AboutUs"; //section
import ContactUs from "./pages/ContactUs"; //section
import OurWork from "./pages/OurWork";  //section
import MoveDetail from "./pages/MoveDetail"; //our offline Api
//Global Styled
import GlobalStyled from "./components/GlobalStyles";
import Nav from "./components/Nav"
//import react router
import {Route,Routes,useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
function App() {
  const location = useLocation();
  return (
    <div className="App"> 
      <GlobalStyled/>   
      <Nav />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" id="logo" element={<AboutUs/>}></Route>
        <Route path="/work" element={<OurWork/>}></Route>
        <Route path="/work/:id" element={<MoveDetail/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
      <ScrollTop />
      </AnimatePresence>
    </div>
  );
}

export default App;
