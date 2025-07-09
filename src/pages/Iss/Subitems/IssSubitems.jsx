import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Iss.module.css';

const IssSubitems = () => {
    const { itemid } = useParams();
    const url = 'http://localhost:3001/iss/subitem/'+itemid;

    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.iss}>
        <h1>Lista de Serviços</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>ITEM ID</th>
              <th>SUBITEM</th>
              <th>DESCRIÇÃO</th>
              <th>DNAC</th>
              <th>Voltar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((isssubitem) => (
              <tr key={isssubitem.id}>
                <td className={styles.issid}>{isssubitem.id}</td>
                <td className={styles.issid}>{isssubitem.itemid}</td>
                <td>{isssubitem.codsubitem}</td>
                <td className={styles.issname}>{isssubitem.descrsubitem}</td>
                <td><Link to={'/iss/subitem/dnac/'+isssubitem.itemid.toString()+'/'+isssubitem.id.toString()}>Detalhes</Link></td>
                <td><Link to={'/iss/'}>Voltar</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default IssSubitems;