import React from "react";
//import componnents 
import AboutSection from "../components/AboutSection";
import ServesSection from "../components/ServesSection";
import FaqSection from "../components/FaqSection";
//import framermotion 
import { motion } from "framer-motion";
import {pageAnimation} from "../animation"
const AboutUs=()=>{
  return(
    <motion.div exit="exit" variants={pageAnimation} initial="hidden"  animate="show">
      <AboutSection />
      <ServesSection />
      <FaqSection />
    </motion.div>
  );
}
export default AboutUs;