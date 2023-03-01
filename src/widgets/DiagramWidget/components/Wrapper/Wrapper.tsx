import {SWrapper} from "./Wrapper.styled";
import {FC, ReactNode} from "react";

const Wrapper:FC<{children:ReactNode[] | ReactNode}> = ({children}) =>{
  return(
    <SWrapper>
      {children}
    </SWrapper>
  )
}

export default Wrapper