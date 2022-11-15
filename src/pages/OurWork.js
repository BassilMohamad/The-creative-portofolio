import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//import framermotion 
import { motion } from "framer-motion";
import {pageAnimation,texAnim,photoAnim,line,slider,sliderContainer,scrollReveal} from "../animation";
import {useScroll} from "../components/useScroll"

const OurWork=()=>{
  const [element,controle]=useScroll();
  const [element2,controle2]=useScroll();
  return(
    <Work exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    style={{background:"#fff"}}>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Move>
        <motion.h2 variants={texAnim}>The Athlete</motion.h2>
        <motion.div  variants={line} className="line"></motion.div>
        <Link to={"/work/the-athlete"}>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Move>
      <Move ref={element} animate={controle} variants={scrollReveal} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={line} animate={controle2}  className="line"></motion.div>
        <Link to={"/work/the-racer"}>
        <motion.img src={theracer} alt="theracer" />
        </Link>
      </Move>
      <Move ref={element2} animate={controle2} variants={scrollReveal} initial="hidden">
        <h2>Good Times</h2>
        <motion.div variants={line} animate={controle} initial="hidden" className="line"></motion.div>
        <Link to={"/work/good-times"}>
        <motion.img  src={goodtimes} alt="goodtimes" />
        </Link>
      </Move>
    </Work>
  )
}

const Work=styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding:2.5rem 5rem;
  h2{
    padding:1rem 0rem;
    color:black
  }
  @media (max-width:922px){
    padding:2rem 2rem
  }
`
const Move=styled(motion.div)`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Hide=styled(motion.div)`
overflow: hidden;
`
//Frame Animation 
const Frame1=styled(motion.div)`
position:fixed;
top:10%;
left:0;
width:100%;
height:100vh;
background: #fffebf;
z-index: 2;
`

const Frame2=styled(Frame1)`
  background: #ff8efb;
`
const Frame3=styled(Frame1)`
  background: #8ed2ff;
`
const Frame4=styled(Frame1)`
  background: #8effa0;
`

export default OurWork;