import UseCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto";
import Image from "next/image";
import Link from "next/link";

export interface CartaoProdutoProps {
    produto: Produto;
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { adicionar } = UseCarrinho();
    const { id, nome, descricao, preco, imagem } = props.produto;

    return (
        <div className="flex flex-col w-72 bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
            {/* Link na Imagem */}
            <Link href={`/produto/${id}`} className="relative w-72 h-52 cursor-pointer">
                <Image 
                    src={imagem} 
                    alt={nome} 
                    fill 
                    className="object-cover transition-transform duration-200 hover:scale-105"
                />
            </Link>

            <div className="flex-1 flex flex-col gap-4 p-5">
                {/* Link no Nome */}
                <Link href={`/produto/${id}`}>
                    <h2 className="text-xl font-bold hover:underline cursor-pointer">{nome}</h2>
                </Link>
                
                <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2">R$ {preco.toFixed(2)}</span>
                    <button 
                        onClick={() => adicionar(props.produto)} 
                        className="border rounded-full px-5 py-1 text-sm hover:bg-yellow-500 transition-all"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}


//<div className="flex-1 flex flex-col gap-4 p-5"> esse é o codigo que da o espaçamento entre o nome descrição preço
//  ficando todos do mesmo tamanho.