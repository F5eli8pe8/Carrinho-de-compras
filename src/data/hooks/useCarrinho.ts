import { useContext } from "react"
import ContextoCarrinho from "../contexts/ContextoCarrinho"


const UseCarrinho = () => { 
 return useContext(ContextoCarrinho)
}

export default UseCarrinho