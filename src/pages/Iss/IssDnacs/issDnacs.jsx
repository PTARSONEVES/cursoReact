import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Iss.module.css';

const IssDnacs = () => {
    const { itemid, subitemid } = useParams();
    const url = 'http://localhost:3001/iss/subitem/dnac/'+itemid+'/'+subitemid;

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
              <th>SUBITEM ID</th>
              <th>DNAC</th>
              <th>DESCRIÇÃO</th>
              <th>Voltar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((issdnac) => (
              <tr key={issdnac.id}>
                <td className={styles.issid}>{issdnac.id}</td>
                <td className={styles.issid}>{issdnac.itemid}</td>
                <td className={styles.issid}>{issdnac.subitemid}</td>
                <td>{issdnac.coddnac}</td>
                <td className={styles.issname}>{issdnac.descritemdnac}</td>
                <td><Link to={'/iss/subitem/'+itemid.toString()}>Voltar</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default IssDnacs;