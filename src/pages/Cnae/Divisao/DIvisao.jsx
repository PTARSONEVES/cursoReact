import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';

import '../Cnae.css';

const DivisaoItems = () => {
    const {divisaoid, secaoid} = useParams();
    const url = 'http://localhost:3001/cnae/divisao/'+divisaoid+'/'+secaoid;
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className="App">
        <h1>CNAE - Lista de Divisões</h1>
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
              <td>{item.coddivisao}</td>
              <td id="tribname">{item.descrdivisao}</td>
              {/*<td><Link to={'/cnae/grupo/0/0'}>Grupo</Link></td>*/}
              {/*<td><Link to={grupoUrl(item.secaoid,item.id)}>Detalhes</Link></td>*/}
              <td><Link to={'/cnae/grupo/0/'+item.secaoid.toString()+'/'+item.id.toString()}>Grupo</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default DivisaoItems;