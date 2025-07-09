import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Cnae.module.css';

const SecaoItems = () => {
    const {secaoid} = useParams()
    const url = 'http://localhost:3001/cnae/secao/'+secaoid;
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.cnae}>
        <h1>CNAE - Lista de Seções</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>Avançar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((item) => (
              <tr key={item.id}>
                <td className={styles.tribid}>{item.id}</td>
                <td>{item.codsecao}</td>
                <td className={styles.tribname}>{item.descrsecao}</td>
                <td><Link to={'/cnae/divisao/0/'+item.id.toString()}>Divisão</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default SecaoItems;