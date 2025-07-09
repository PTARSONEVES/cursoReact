import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Iss.module.css';

const IssItems = () => {
    const url = 'http://localhost:3001/iss';
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
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>Subitens</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((issitem) => (
              <tr key={issitem.id}>
                <td className={styles.issid}>{issitem.id}</td>
                <td>{issitem.coditem}</td>
                <td className={styles.issname}>{issitem.descritem}</td>
                <td><Link to={'/iss/subitem/'+issitem.id.toString()}>Detalhes</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default IssItems;