import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Cnae.module.css';

const Classetems = () => {
    const {classeid, secaoid, divisaoid, grupoid} = useParams();
    const url = 'http://localhost:3001/cnae/c/classe/'+classeid+'/'+secaoid+'/'+divisaoid+'/'+grupoid;
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.cnae}>
        <h1>CNAE - Lista de Classes</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>Voltar</th>
              <th>Avançar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((item) => (
              <tr key={item.id}>
                <td className={styles.tribid}>{item.id}</td>
                <td>{item.codclasse}</td>
                <td className={styles.tribname}>{item.descrclasse}</td>
                <td><Link to={'/cnae/grupo/0/'+secaoid.toString()+'/'+divisaoid.toString()}>Grupo</Link></td>
                <td><Link to={'/cnae/subclasse/0/'+item.secaoid.toString()+'/'+item.divisaoid.toString()+'/'+item.grupoid.toString()+'/'+item.id.toString()}>Subclasse</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Classetems;