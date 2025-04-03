import Carrinho from "./Carrinho";
import Logo from "./Logo";


export default function Cabecalho(){
 //Estamos definindo o estilo de forma dinaminca por isso o class name deste aquivo já possui exatamente os comandos
 //para add o estilo, igual nos outros arquivos tambem possuem o comando de forma direta.   
    return(
        <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
            <Logo/>
            <Carrinho />
        </header>
    )
}