import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  './Flat.module.css';

const Flats = () => {
    const url = 'http://localhost:3001/flats';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.flat}>
        <h1>Flats (Configuração Original)</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>BLOCO</th>
              <th>PISO</th>
              <th>FLAT</th>
              <th>TIPO</th>
              <th>ÁREA</th>
              <th>QUARTOS</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((flat) => (
              <tr key={flat.id}>
                <td className={styles.flatid}>{flat.id}</td>
                <td>{flat.flatname}</td>
                <td>{flat.flatbloco}</td>
                <td>{flat.flatpiso}</td>
                <td>{flat.flatnum}</td>
                <td className={styles.flat}>{flat.tipoflatid}</td>
                <td>{flat.Tbspai.paisname}</td>
                <td>{flat.Tbspai.Tbscontinente.namecontinente}</td>
                <td><Link to={'/municipios/0/'+flat.id.toString()}>Municípios</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Flats;