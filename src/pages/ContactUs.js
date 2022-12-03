import React from "react";
//import framermotion 
import { motion } from "framer-motion";
import {pageAnimation,titleAnim} from "../animation";
import styled from "styled-components"
const ContactUs=()=>{
  return(
    <ContactStyle exit="exit" variants={pageAnimation} initial="hidden"     animate="show" >
      <Title>
        <Hide>
          <motion.h2 style={{color:"black"}} variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
        <Social variants={titleAnim}>
          <Circle /> 
          <h2 style={{color:"black"}}>Send Us A message</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
          <Circle /> 
          <h2 style={{color:"black"}}>Send an E-mail</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim}>
          <Circle /> 
          <h2 style={{color:"black"}}>Social Media</h2>
        </Social>
        </Hide>
      </div>
    </ContactStyle>
  )
}

const  ContactStyle=styled(motion.div)`
  background-color: white;
  padding:2.5rem 5rem ;
  color:#353535;
  min-height: 90vh;
`
const Title=styled(motion.div)`
  margin-bottom:4rem;
  color:black;
  @media (max-width:922px){
    margin-top:5rem;
  }
`

const Hide= styled.div`
overflow:hidden`

const Circle=styled.div`
  border-radius: 50%;
  width:2rem;
  height: 2rem;
  background: #353535;

`

const Social=styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin:2rem
  }
`

export  default ContactUs;  