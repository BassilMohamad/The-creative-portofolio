import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav =  () =>{
  return(
    <Navbar>
       <Link to={"/"} id="logo">Capture</Link>
      <ul>
        <li>
          <Link to={"/"} className="link">1.About Us</Link>
        </li>
        <li>
         <Link to={"/work"}className="link">2.Our Work</Link>
        </li>
        <li>
        <Link to={"/contact"}className="link">3.Contact Us</Link>
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
`
export default Nav;