import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import '../Cnae.css';

const Grupotems = () => {
    const url = 'http://localhost:3001/cnae/grupo/0';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className="App">
        <h1>CNAE - Lista de Grupos</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table>
          <tr>
            <th>ID</th>
            <th>CÓDIGO</th>
            <th>DESCRIÇÃO</th>
          </tr>
          {items && items.map((item) => (
            <tr key={item.id}>
              <td id="tribid">{item.id}</td>
              <td>{item.codgrupo}</td>
              <td id="tribname">{item.descrgrupo}</td>
              <td><Link to={'/cnae/classe/0'}>Classe</Link></td>
              {/*<td><Link to={'/iss/subitem/'+item.id.toString()}>Detalhes</Link></td>*/}
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default Grupotems;