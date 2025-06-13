import { Link } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';

import './Ufs.css';

const Ufs = () => {
    const url = 'http://localhost:3001/ufs';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className="App">
        <h1>Unidades da Federação</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <table>
          <tr>
            <th>ID</th>
            <th>CÓDIGO</th>
            <th>SIGLA</th>
            <th>NOME</th>
            <th>PAÍS</th>
            <th>CONTINENTE</th>
          </tr>
          {items && items.map((uf) => (
            <tr key={uf.id}>
              <td id="ufid">{uf.id}</td>
              <td>{uf.coduf}</td>
              <td>{uf.uf}</td>
              <td id="ufname">{uf.ufname}</td>
              <td>{uf.Tbspai.paisname}</td>
              <td>{uf.Tbspai.Tbscontinente.namecontinente}</td>
              <td><Link to={'/municipios/0/'+uf.id.toString()}>Detalhes</Link></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default Ufs;