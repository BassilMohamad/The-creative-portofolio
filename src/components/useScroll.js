import { useInView } from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const useScroll=()=>{
  const controle=useAnimation();
  const [element,view]=useInView({threshold:0.5});
  if(view){
    controle.start("hidden")
  }else{
    controle.start("show")
  }
  return [element,controle]
}