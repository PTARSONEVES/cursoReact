import { useContext } from "react";
import { TitleColorContext } from "../context/Title/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);
    if(!context) {
        console.log('FRONT - Contexto "TitleColorContext" não encontrado ou problemático!');
    }
    return context;
}