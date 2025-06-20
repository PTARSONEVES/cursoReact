import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import '../Cnae.css';

const SecaoItems = () => {
    const url = 'http://localhost:3001/cnae/secao/0';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className="App">
        <h1>CNAE - Lista de Seções</h1>
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
              <td>{item.codsecao}</td>
              <td id="tribname">{item.descrsecao}</td>
              <td><Link to={'/cnae/divisao/0'}>Divisão</Link></td>
              {/*<td><Link to={'/cnae/divisao/0'+item.id.toString()}>Divisão</Link></td>*/}
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default SecaoItems;