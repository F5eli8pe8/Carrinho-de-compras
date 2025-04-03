'use client'
import Pagina from "@/components/template/Pagina";
import UseCarrinho from "@/data/hooks/useCarrinho";
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
export default function PaginaCarrinho(){
  
  const {itens, adicionar, remover} = UseCarrinho()
   return(
    <Pagina className="flex flex-col gap-10">
        {itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          <>
        <div className="flex flex-col gap-5">
        {itens.map((item) =>(
          <AreaItemCarrinho key={item.produto.id} 
          item={item} 
          adicionar={(item) => adicionar(item.produto)} 
          remover={(item) => remover(item.produto)}/>
        ))}
        </div>
          <TotalCarrinho itens={itens} />
          </>
        )}
    </Pagina>
      
    )
}