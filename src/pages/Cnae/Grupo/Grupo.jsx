import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import styles from '../Cnae.module.css';

const Grupotems = () => {
  const {grupoid, secaoid, divisaoid} = useParams();
  const url = 'http://localhost:3001/cnae/grupo/'+grupoid+'/'+secaoid+'/'+divisaoid;
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.cnae}>
        <h1>CNAE - Lista de Grupos</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table className={styles.tblgrupo}>
          <tr>
            <th>ID</th>
            <th>CÓDIGO</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((item) => (
            <tr key={item.id}>
              <td className={styles.tribid}>{item.id}</td>
              <td>{item.codgrupo}</td>
              <td className={styles.tribname}>{item.descrgrupo}</td>
              <td><Link to={'/cnae/c/classe/0/'+item.secaoid.toString()+'/'+item.divisaoid.toString()+'/'+item.id.toString()}>Classe</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default Grupotems;