import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';

import styles from  '../Pessoa.module.css';

const Pessoa = () => {

    const convData = (value) => {
      if(value == null) {
        return null;
      } else {
        let vll = value.toString();
        return (vll.slice(8,10)+'.'+vll.slice(5,7)+'.'+vll.slice(0,4));
      }
    }

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
              <th>MÍDIAS</th>
              <th>INTERAÇÃO</th>
              </tr>
          </thead>
          <tbody>
            {items && items.map((pessoa) => (
                <tr key={pessoa.id}>
                    <td className={styles.pessoaid}>{pessoa.id}</td>
                    <td className={styles.pessoaname}>{pessoa.nomepessoa}</td>
                    <td>Pessoa {pessoa.Pessoatpo.tipopessoa}</td>
                    <td>{pessoa.cpfpessoa}</td>
                    <td>{pessoa.cnpjpessoa}</td>
                    <td>{convData(pessoa.nascpessoa)}</td>
                    <td>{pessoa.Emails.email}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>EMAIL</th>
                            <th>VALIDADO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pessoa.Emails && pessoa.Emails.map((email) => (
                              <tr key={email.id}>
                                  <td className={styles.pessoaname}>{email.email}</td>
                                  <td className={styles.pessoaid}>{email.validado ? 'Sim' : 'Não'}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </td>
                    <td>{pessoa.Midia.midia}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>DESCRIÇÃO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pessoa.Midia && pessoa.Midia.map((midia) => (
                              <tr key={midia.id}>
                                  <td className={styles.pessoaname}>{midia.Midiatpo.namemidia}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </td>
                    <td>{pessoa.Users.user}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>PERFIL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pessoa.Users && pessoa.Users.map((user) => (
                              <tr key={user.id}>
                                  <td className={styles.pessoaname}>{user.Usertype.tipouser}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>

                    </td>
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

export default Pessoa;