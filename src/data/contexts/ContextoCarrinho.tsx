import { createContext, useEffect, useState } from "react"
import ItemCarrinho from "../model/itemCarrinho"
import Produto from "../model/Produto"
import useLocalStorage from "../hooks/useLocalStorege"
import { PropsWithChildren } from "react"

interface ContextoCarrinhoProps {
   itens: ItemCarrinho[]
   qtdeDeItens: number
   adicionar: (item: Produto) => void
   remover: (item: Produto) => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as ContextoCarrinhoProps)

export function ProvedorCarrinho({ children }: PropsWithChildren) {
   const [itens, setItens] = useState<ItemCarrinho[]>([])
   const { set, get } = useLocalStorage()

   useEffect(() => {
    const carrinho = get<ItemCarrinho[]>('carrinho') ?? [];
    setItens(carrinho);
    }, [get])    

   function adicionar(produto: Produto) {
       const indice = itens.findIndex((i) => i.produto.id === produto.id)

       if (indice === -1) {
           alterarItens([...itens, { produto, quantidade: 1 }])
       } else {
           const novosItens = [...itens]
           novosItens[indice].quantidade++
           alterarItens(novosItens)
       }
   }

   function remover(produto: Produto) {
       const novosItens = itens
           .map((i) => {
               if (i.produto.id === produto.id) {
                   i.quantidade--
               }
               return i
           })
           .filter((i) => i.quantidade > 0)
       alterarItens(novosItens)
   }

   function alterarItens(novosItens: ItemCarrinho[]) {
       setItens(novosItens)
       set('carrinho', novosItens)
   }

   return (
       <ContextoCarrinho.Provider
           value={{
               itens,
               adicionar,
               remover,
               get qtdeDeItens() {
                   return itens.reduce((total, item) => total + item.quantidade, 0)
               },
           }}
       >
           {children}
       </ContextoCarrinho.Provider>
   )
}

export default ContextoCarrinho
