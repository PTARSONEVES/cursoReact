import { useParams, Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from '../Cnae.module.css';

const SubclasseItems = () => {
  const {subclasseid,classeid, secaoid, divisaoid, grupoid} = useParams();
  const url = 'http://localhost:3001/cnae/subclasse/'+subclasseid+'/'+secaoid+'/'+divisaoid+'/'+grupoid+'/'+classeid;
  const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.cnae}>
        <h1>CNAE - Lista de Subclasses</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
        <thead>
            <tr>
              <th>ID</th>
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>Voltar</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((item) => (
              <tr key={item.id}>
                <td className={styles.tribid}>{item.id}</td>
                <td>{item.codsubclasse}</td>
                <td className={styles.tribname}>{item.descrsubclasse}</td>
                <td><Link to={'/cnae/c/classe/0/'+secaoid.toString()+'/'+divisaoid.toString()+'/'+grupoid.toString()}>Classe</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default SubclasseItems;