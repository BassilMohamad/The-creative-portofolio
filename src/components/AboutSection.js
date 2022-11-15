import React from "react";
import home1 from "../img/home1.png";
import { About,Description,Image,Hide } from "../styles";
//import Framer Motion 
import { motion } from "framer-motion";
import {titleAnim,texAnim,photoAnim} from "../animation";
//Wave import 
import Wave from "./Wave";
const AboutSection=()=>{
  return(
   <About>
    <Description>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>your <span>dreams</span> come </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>true.</motion.h2>
        </Hide>
      </motion.div>
      <motion.p variants={texAnim}>Countact Us for any webDesign ideas you have . We have professionals with amizaing webTecnologes</motion.p>
      <motion.button  variants={texAnim}>Contact Us</motion.button>
    </Description>
    <Image>
      <motion.img variants={photoAnim} src={home1}  alt="gay with camera" />
    </Image>
    <Wave />
   </About>
  )
}

export default AboutSection;
