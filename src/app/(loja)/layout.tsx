'use client'
import { ReactNode } from "react";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <ProvedorCarrinho>
            {children}
        </ProvedorCarrinho>
    );
}