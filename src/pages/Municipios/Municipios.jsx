import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';

import styles from  './Municipios.module.css';


const Municipios = () => {

    const {munid, ufid} = useParams();
    const url = 'http://localhost:3001/municipios/'+munid+'/'+ufid;

    const { data: items, loading, error } = useFetch(url);

  return (
    <>
      <div className={styles.municipios}>
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
              <td className={styles.municipioid}>{municipio.id}</td>
              <td>{municipio.ibgefull}</td>
              <td>{municipio.ibgeshort}</td>
              <td className={styles.municipioname}>{municipio.cityname}</td>
              <td>{municipio.Tbsbruf.uf}</td>
              <td className={styles.citylaw}>{municipio.citylaw}</td>
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