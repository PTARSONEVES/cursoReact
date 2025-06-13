import { useParams } from "react-router-dom";
//import { useState } from "react";

import { useFetch } from '../../hooks/useFetch';

import './Municipios.css';


const Municipios = () => {

    const {munid, ufid} = useParams();
/*
    let ufid = 0;
    let munid = 0;
    if (localStorage.getItem('munid')) {
      munid = localStorage.getItem('munid');
    };
    if (localStorage.getItem('ufid')) {
      ufid = localStorage.getItem('ufid');
    };

    console.log('ufid: ',localStorage.getItem('ufid'));
*/
    console.log('munid: ',munid);
    console.log('ufid: ',ufid);
    const url = 'http://localhost:3001/municipios/'+munid+'/'+ufid;

    const { data: items, loading, error } = useFetch(url);

  return (
    <>
      <div className="App">
        <h1>Municipios da Federação</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table>
          <tr>
            <th>ID</th>
            <th>IBGE AMPLO</th>
            <th>IBGE CURTO</th>
            <th>NOME</th>
            <th>UF</th>
            <th>LEI</th>
            <th>DATA CRIAÇÃO</th>
            <th>DATA INSTALAÇÃO</th>
            <th>DDD</th>
          </tr>
          {items && items.map((municipio) => (
            <tr key={municipio.id}>
              <td id="municipioid">{municipio.id}</td>
              <td>{municipio.ibgefull}</td>
              <td>{municipio.ibgeshort}</td>
              <td id="municipioname">{municipio.cityname}</td>
              <td>{municipio.Tbsbruf.uf}</td>
              <td id='citylaw'>{municipio.citylaw}</td>
              <td className="date">{municipio.datelaw}</td>
              <td className="date">{municipio.dateinstall}</td>
              <td>{municipio.cityddd}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
};

export default Municipios;