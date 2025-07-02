import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import styles from '../Cnae.module.css';

const DivisaoItems = () => {
    const {divisaoid, secaoid} = useParams();
    const url = 'http://localhost:3001/cnae/divisao/'+divisaoid+'/'+secaoid;
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.cnae}>
        <h1>CNAE - Lista de Divisões</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table className={styles.tbldivisao}>
          <tr>
            <th>ID</th>
            <th>CÓDIGO</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((item) => (
            <tr key={item.id}>
              <td className={styles.tribid}>{item.id}</td>
              <td>{item.coddivisao}</td>
              <td className={styles.tribname}>{item.descrdivisao}</td>
              <td><Link to={'/cnae/grupo/0/'+item.secaoid.toString()+'/'+item.id.toString()}>Grupo</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default DivisaoItems;