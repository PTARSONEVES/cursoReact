import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  '../Flat.module.css';

const TbsFlats = () => {
    const url = 'http://localhost:3001/tbsflats';
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
              <th>SALAS</th>
              <th>VARANDAS</th>
              <th>WC'S</th>
              <th>COZINHAS</th>
              <th>GARAGENS</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((flat) => (
              <tr key={flat.id}>
                <td className={styles.flatid}>{flat.id}</td>
                <td>{flat.flatnome}</td>
                <td>{flat.flatbloco}</td>
                <td>{flat.flatpiso}</td>
                <td>{flat.flatnum}</td>
                <td className={styles.flatid}>{flat.tbstipoflatid}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.areaflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.quartosflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.salasflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.varandasflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.wcsflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.cozinhasflat}</td>
                <td className={styles.flatid}>{flat.Tbstipoflat.garagensflat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default TbsFlats;