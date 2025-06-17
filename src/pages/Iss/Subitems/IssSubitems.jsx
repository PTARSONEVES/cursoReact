import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import './IssSubitems.css';

const IssSubitems = () => {
    const { itemid } = useParams();
    const url = 'http://localhost:3001/iss/subitem/'+itemid;

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
            <th>SUBITEM</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((isssubitem) => (
            <tr key={isssubitem.id}>
              <td id="issid">{isssubitem.id}</td>
              <td>{isssubitem.itemid}</td>
              <td>{isssubitem.codsubitem}</td>
              <td id="issname">{isssubitem.descrsubitem}</td>
              <td><Link to={'/iss/subitem/dnac/'+isssubitem.itemid.toString()+'/'+isssubitem.id.toString()}>Detalhes</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default IssSubitems;