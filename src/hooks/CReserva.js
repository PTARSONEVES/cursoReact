//import React, { useState } from 'react';
import { useFetch } from './useFetch';

export const CReserva = (rota) => {

    const url = rota;
    console.log('rota: ',rota);

    function Url(rota) {
        const urlBase = 'http://localhost:3001/'
        return urlBase+rota
    }

    function Consulta() {
        const { data: items, loading, error } = useFetch(Url(url));
        return {items, loading, error}
    }

    let teste = Consulta();
    if (teste !== null) {
        console.log('items: ',teste.items);
        return teste.items;
    }
}