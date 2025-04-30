import { AppContext } from "../Context";
import { useContext } from "react";

const UseAppContext = () =>{
    const contexto = useContext(AppContext);
    return contexto;
};
export { UseAppContext }; 