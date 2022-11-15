import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//import Styles
import styled from "styled-components";
import {About,Description,Image} from "../styles";
import {scrollReveal} from "../animation"
import { useScroll } from "../components/useScroll";
const ServesSection=()=>{
  const [element,controle]=useScroll();
  return(
    <Serveces ref={element} animate={controle} variants={scrollReveal} initial="hidden">
      <Description>
        <h2>High <span>quality</span> serveces</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </Serveces>
  )
}
const Serveces=styled(About)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width:70%;
    padding:2rem 0rem 4rem 0rem
  }
`
const Cards=styled.div`
  display:flex;
  flex-wrap: wrap;
`
const Card=styled.div`
flex-basis: 15rem;
 .icon{
  display:flex;
  align-items:center;
  h3{
    margin-left: 1rem;
    background:white;
    color:black;
    padding:1rem ;
  }
 }
`
export default ServesSection;