import { createGlobalStyle } from "styled-components";

const GlobalStyled= createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
 background:#1b1b1b;
}

button{
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  border:3px solid #23d997;
  background: transparent;
  padding:1rem 2rem;
  color:white;
  transition: all 0.5s ease;
  &:hover{
    background:#23d997 ;
    color: black;
  }
}

h2{
  font-weight: lighter;
  color:white;
  font-size:4rem;
}
h3{
  color:white;
}
h4{
  font-weight: bold;
}
span{
  font-weight: bold;
  color:#23d997;
}
a{
  font-size: 1.1rem;
}
p{
  padding:3rem 0rem;
  color:#ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

`
export default GlobalStyled;