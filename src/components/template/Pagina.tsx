import Cabecalho from "./Cabecalho"

export interface PaginaProps{
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps){
    return( 
    
    
    <div className="flex flex-col min-h-screen">
     <Cabecalho />
     <main className={`
     w-[1200px] mx-auto 
     flex-1 ${props.className ?? ''} py-10`}
     >{props.children}</main>
    </div>



)
}
/**
 * w-[1200px]: Define a largura do elemento como 1200 pixels.

mx-auto: Centraliza o elemento horizontalmente, definindo margens automáticas à esquerda e à direita.

flex-1: Faz com que o elemento ocupe o espaço restante disponível no contêiner flexível.

py-10: Adiciona um padding vertical de 2.5rem (40px) ao elemento.


 * ${props.className ?? ''}: Aqui, o className passado como prop é inserido dinamicamente. O operador ?? (nullish coalescing) 
é usado para garantir que, se props.className for undefined ou null, uma string vazia seja usada, evitando erros.

Isso permite que o componente Pagina seja estilizado de fora, passando classes CSS adicionais via className.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */