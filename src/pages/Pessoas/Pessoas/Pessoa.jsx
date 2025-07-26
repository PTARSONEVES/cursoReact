import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  '../Pessoa.module.css';

const TblPessoas = () => {
    const url = 'http://localhost:3001/pessoas';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.pessoa}>
        <h1>Pessoas (Configuração Original)</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>TIPO</th> 
              <th>CPF</th>
              <th>CNPJ</th>
              <th>NASCIMENTO</th>
              <th>EMAIL's</th>
{/*
              <th>QUARTOS</th>
              <th>SALAS</th>
              <th>VARANDAS</th>
              <th>WC'S</th>
              <th>COZINHAS</th>
              <th>GARAGENS</th>
*/}
              </tr>
          </thead>
          <tbody>
            {items && items.map((pessoa) => (
                <tr key={pessoa.id}>
                    <td className={styles.pessoaid}>{pessoa.id}</td>
                    <td>{pessoa.nomepessoa}</td>
                    <td>{pessoa.Tbspessoatipo.tipopessoa}</td>
                    <td>{pessoa.cpfpessoa}</td>
                    <td>{pessoa.cnpjpessoa}</td>
                    <td>{pessoa.nascpessoa}</td>
                    <td>{pessoa.Tblemails.email}</td>
{/*
                    <td>{pessoa.nascpessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.areapessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.quartospessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.salaspessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.varandaspessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.wcspessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.cozinhaspessoa}</td>
                    <td className={styles.pessoaid}>{pessoa.Tbstipopessoa.garagenspessoa}</td>
*/}
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default TblPessoas;