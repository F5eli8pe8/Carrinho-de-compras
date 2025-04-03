'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback(<T,>(chave: string): T | null => {
        const valor = localStorage.getItem(chave);
        return valor ? (JSON.parse(valor) as T) : null;
    }, []);
    const set = useCallback(<T,>(chave: string, valor: T): void => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const remove = useCallback((chave: string): void => {
        localStorage.removeItem(chave)
    }, [])

    return { get, set, remove }
}
