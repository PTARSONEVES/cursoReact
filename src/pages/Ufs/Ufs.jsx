import { Link } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  './Ufs.module.css';

const Ufs = () => {
    const url = 'http://localhost:3001/ufs';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.uf}>
        <h1>Unidades da Federação</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>CÓDIGO</th>
              <th>SIGLA</th>
              <th>NOME</th>
              <th>PAÍS</th>
              <th>CONTINENTE</th>
              <th>MUNICIPIOS</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((uf) => (
              <tr key={uf.id}>
                <td className={styles.ufid}>{uf.id}</td>
                <td>{uf.coduf}</td>
                <td>{uf.uf}</td>
                <td className={styles.ufname}>{uf.ufname}</td>
                <td>{uf.Tbspai.paisname}</td>
                <td>{uf.Tbspai.Tbscontinente.namecontinente}</td>
                <td><Link to={'/municipios/0/'+uf.id.toString()}>Municípios</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Ufs;