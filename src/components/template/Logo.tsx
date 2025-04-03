import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo(){
    return (
    //Essa parte do codigo é refente a logo do projeto, usando de base o icone da Amazon conseguimos fazer uma logo simples 
    //que ao clicar nela somos levados a raiz da aplicação
     <Link href="/">
        <div className="flex flex-col items-center mt-2">
            <div className="text-xl leading-4">M Y</div> 
            <IconBrandAmazon size={40} stroke={1} className="-mt-2" />
        </div>
     </Link>
     
    )
}