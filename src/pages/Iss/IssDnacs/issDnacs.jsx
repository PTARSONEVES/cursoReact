import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import './IssDnacs.css';

const IssDnacs = () => {
    const { itemid, subitemid } = useParams();
    const url = 'http://localhost:3001/iss/subitem/dnac/'+itemid+'/'+subitemid;

    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className="App">
        <h1>Lista de Serviços</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table>
          <tr>
            <th>ID</th>
            <th>ITEM ID</th>
            <th>SUBITEM ID</th>
            <th>DNAC</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((issdnac) => (
            <tr key={issdnac.id}>
              <td id="issid">{issdnac.id}</td>
              <td>{issdnac.itemid}</td>
              <td>{issdnac.subitemid}</td>
              <td>{issdnac.coddnac}</td>
              <td id="issname">{issdnac.descritemdnac}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default IssDnacs;