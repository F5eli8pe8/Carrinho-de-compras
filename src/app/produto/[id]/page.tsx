"use client";

import { useParams, useRouter } from "next/navigation";
import produtos from "@/data/constants/produtos";
import Image from "next/image";
import UseCarrinho from "@/data/hooks/useCarrinho";

export default function ProdutoDetalhes() {
    const params = useParams();
    const router = useRouter();
    const carrinho = UseCarrinho();
    const produto = produtos.find(p => p.id.toString() === params.id);

    if (!produto) {
        return <div className="text-center mt-10 text-white text-2xl">Produto não encontrado!</div>;
    }

    return (
        <div className="container mx-auto p-10 flex flex-col md:flex-row items-center md:items-start bg-zinc-900 rounded-lg shadow-lg max-w-4xl">
            {/* Imagem do Produto */}
            <div className="relative w-72 h-72 flex-shrink-0">
                <Image src={produto.imagem} alt={produto.nome} fill className="object-cover rounded-lg" />
            </div>

            {/* Informações do Produto */}
            <div className="ml-8 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">{produto.nome}</h1>
                    <p className="text-md text-zinc-400 mt-2">{produto.descricao}</p>
                    <p className="text-3xl font-bold text-yellow-400 mt-4">R$ {produto.preco.toFixed(2)}</p>
                </div>

                {/* Botões de ação */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => {
                            if (carrinho && carrinho.adicionar) {
                                carrinho.adicionar(produto);
                                console.log(`Produto ${produto.nome} adicionado ao carrinho!`);
                            } else {
                                console.error("Erro: Função adicionar não disponível!");
                            }
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                    >
                        Adicionar ao Carrinho
                    </button>
                    
                    {/* Botão de Voltar */}
                    <button
                        onClick={() => router.back()}
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all"
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
}
