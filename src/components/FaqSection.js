import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import {useScroll} from "../components/useScroll";
import {scrollReveal} from "../animation";
const FaqSection=()=>{
  const [element,controle]=useScroll();
  return(
    <Faq ref={element} animate={controle} variants={scrollReveal} initial="hidden">
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsa?</p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsa?</p>
        </div>
      </Toggle>
      <Toggle title="Diferrent Payment Methods">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsa?</p>
        </div>
      </Toggle>
      <Toggle title="What Products Do You Offer?">     
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsa?</p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}
const Faq=styled(About)`
  display:block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight:lighter
  }
  .faq-line{
    width:100% auto ;
    background: #cccccc;
    margin:2rem 0rem;
    height: 0.2rem;
  }
  .question{
    padding:3rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding:2rem 0rem;
    p{
     padding:1rem 0rem;
    }
  }
`

export default FaqSection;