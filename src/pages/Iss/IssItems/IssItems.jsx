import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import './IssItems.css';

const IssItems = () => {
    const url = 'http://localhost:3001/iss';
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
            <th>CÓDIGO</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((issitem) => (
            <tr key={issitem.id}>
              <td id="issid">{issitem.id}</td>
              <td>{issitem.coditem}</td>
              <td id="issname">{issitem.descritem}</td>
              <td><Link to={'/iss/subitem/'+issitem.id.toString()}>Detalhes</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default IssItems;