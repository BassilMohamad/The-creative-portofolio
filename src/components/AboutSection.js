import React from "react";
import home1 from "../img/home1.png";
import { About,Description,Image,Hide } from "../styles";
//import Framer Motion 
import { motion } from "framer-motion";
const AboutSection=()=>{
  return(
   <About>
    <Description>
      <motion.div>
        <Hide>
          <motion.h2>We work to make</motion.h2>
        </Hide>
        <Hide>
          <motion.h2>your <span>dreams</span> come </motion.h2>
        </Hide>
        <Hide>
          <motion.h2>true.</motion.h2>
        </Hide>
      </motion.div>
      <p>Countact Us for any webDesign ideas you have . We have professionals with amizaing webTecnologes</p>
      <button>Contact Us</button>
    </Description>
    <Image>
      <img src={home1} alt="gay with camera" />
    </Image>
   </About>
  )
}

export default AboutSection;
