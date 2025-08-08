import { useParams, Link } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  './Municipios.module.css';


const Municipios = () => {

    const convData = (value) => {
      if(value == null) {
        return null;
      } else {
        let vll = value.toString();
        return (vll.slice(8,10)+'.'+vll.slice(5,7)+'.'+vll.slice(0,4));
      }
    }

    const {munid, ufid} = useParams();
    const url = 'http://localhost:3001/municipios/'+munid+'/'+ufid;

    const { data: items, loading, error } = useFetch(url);

  return (
    <>
      <div className={styles.municipios}>
        <h1>Municipios da Federação</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
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
              <th>Voltar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((municipio) => (
              <tr key={municipio.id}>
                <td className={styles.municipioid}>{municipio.id}</td>
                <td>{municipio.ibgefull}</td>
                <td>{municipio.ibgeshort}</td>
                <td className={styles.municipioname}>{municipio.cityname}</td>
                <td>{municipio.Tbsbruf.uf}</td>
                <td className={styles.citylaw}>{municipio.citylaw}</td>
                <td>{convData(municipio.datelaw)}</td>
                <td>{convData(municipio.dateinstall)}</td>
                <td>{municipio.cityddd}</td>
                <td><Link to={'/ufs/'}><i class="bi bi-arrow-right-circle-fill">UF's</i></Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
};

export default Municipios;