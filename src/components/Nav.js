import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav =  () =>{
  const {pathname}=useLocation();
  return(
    <Navbar>
       <Link to={"/"} id="logo">Capture</Link>
      <ul>
        <li>
          <Link to={"/"} className="link">1.About Us</Link>
          <Line transition={{duration:0.75}}  initial={{width:"0%"}} 
           animate={{width: pathname==="/" ? "50%" : "0"}}
          />
        </li>
        <li>
         <Link to={"/work"}className="link">2.Our Work</Link>
         <Line transition={{duration:0.75}}  initial={{width:"0%"}} 
           animate={{width: pathname==="/work" ? "50%" : "0"}}
          />
        </li>
        <li>
        <Link to={"/contact"}className="link">3.Contact Us</Link>
        <Line transition={{duration:0.75}}  initial={{width:"0%"}} 
           animate={{width: pathname==="/contact" ? "50%" : "0"}}
          />
        </li>
      </ul>
    </Navbar>
  )
}
const Navbar=styled.div`
 display: flex;
 min-height: 10vh;
 margin:auto;
 justify-content: space-between;
 width:100%;
 align-items: center;
 padding:1rem 5rem;
 background:#282828;
 position: sticky;
 top:0;
 z-index: 100;
 a{
  color:white;
  text-decoration: none;
 }
 ul{
  display: flex;
  list-style: none;
 }
 li{
  padding-left:10rem;
  position: relative;
 }
 #logo{
  font-family:"Lobster",cursive ;
  font-size: 1.5rem;
  font-weight: lighter;
 }
 @media (max-width:922px){
    flex-direction: column;
    padding:2rem 1rem;
    #logo{
      display: inline-block;
      margin:2rem
    }
    ul{
      padding:2rem;
      justify-content: space-around;
      width:100%;
      li{
        padding:0rem
      }
    }
  }
`
const Line =styled(motion.div)`
height: 0.3rem;
background: #23d997;
width:0%;
position: absolute;
bottom:-80%;
left:60%;
@media (max-width:922px) {
  left:0;
}
`
export default Nav;