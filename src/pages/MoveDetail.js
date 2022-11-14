import React, { useEffect, useState } from "react";
//import thing up here
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {MovieState} from "../movieState";
//import framermotion 
import { motion } from "framer-motion";
import {pageAnimation} from "../animation"
const MoveDetail=()=>{
  const location=useLocation();
  const url=location.pathname;
  const [moves,setMoves]=useState(MovieState);
  const [move,setMove]=useState(null);
  useEffect(()=>{
    const currentMove=moves.filter((stateMove)=>stateMove.url === url);
    setMove(currentMove[0])
  },[moves,url]);
  return(
    <>
    {move && (
      <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <HeadLine>
          <h2>{move.title}</h2>
          <img src={move.mainImg} alt="move" />
        </HeadLine>
        <Awards>
        {move.awards.map((award)=>
          <Award title={award.title} description={award.description} key={award.title} />
        )}
        </Awards>
        <ImageDisplay>
          <img src={move.secondaryImg} alt="move" />
        </ImageDisplay>
      </Details>  
    )}
    </>
  )
}

const Details=styled(motion.div)`
  color:white;
`
const HeadLine=styled.div`
  min-height: 90vh;
  padding-top:20vh;
  position: relative;
  h2{
    position: absolute;
    top:10%;
    left:50%;
    transform: translate(-50%,-10%);
  }
  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Awards=styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2.5rem 5rem;
  align-items: center;
  justify-content: space-around;
`

const AwardStyles=styled.div`
  padding:2.5rem;
  h3{
    font-size: 1.5rem;
  }
  .line{
    width:100%;
    background: #23d997;
    height: 0.5rem;
    margin:1rem 0rem;
  }
  p{
    padding:2rem 0rem; 
  }
`
const ImageDisplay=styled.div`
  min-height:50vh;
  img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }

`

//Awards componants
const Award=({title,description})=>{
  return(
    <AwardStyles>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyles>
  )
}

export default MoveDetail;