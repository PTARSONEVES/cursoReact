import { useContext } from "react";
import { CounterContext } from "../context/Counter/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext);
    if(!context) {
        console.log('FRONT - Contexto não encontrado ou problemático!');
    }
    return context;
};