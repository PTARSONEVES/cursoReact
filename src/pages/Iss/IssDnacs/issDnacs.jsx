import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

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
        <table className={styles.tbldnacs}>
          <tr>
            <th>ID</th>
            <th>ITEM ID</th>
            <th>SUBITEM ID</th>
            <th>DNAC</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((issdnac) => (
            <tr key={issdnac.id}>
              <td className={styles.issid}>{issdnac.id}</td>
              <td className={styles.issid}>{issdnac.itemid}</td>
              <td className={styles.issid}>{issdnac.subitemid}</td>
              <td>{issdnac.coddnac}</td>
              <td className={styles.issname}>{issdnac.descritemdnac}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default IssDnacs;