import { Link } from "react-router-dom";
import { useFetch } from '../../../src/hooks/useFetch';
//import { TrataData } from '../../../src/hooks/TrataData';
import Table from 'react-bootstrap/Table';

import styles from  './Reserva.module.css';

const Reservas = () => {


    const convData = (value) => {
      if(value == null) {
        return null;
      } else {
        let vll = value.toString();
        return (vll.slice(8,10)+'.'+vll.slice(5,7)+'.'+vll.slice(0,4));
      }
    }

    const url = 'http://localhost:3001/reservas';
    const { data: items, loading, error } = useFetch(url);
  return (
    <>
      <div className={styles.reserva}>
        <h1>Reservas</h1>
        {loading && <p>carregando dados...</p>}
        {error && <p>{error}</p>}
        <Table responsive='sm' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>RESPONSAVEL</th>
              <th>CHECK IN</th> 
              <th>CHECK OUT</th>
              <th>NÚMERO FLATS</th>
              <th>NUMERO HOSPEDES</th>
              <th>VALOR</th>
              <th>VALOR PAGO</th>
              <th>SITUAÇÃO</th>
              <th>Observações</th>
              </tr>
          </thead>
          <tbody>
            {items && items.map((reserva) => (
                <tr key={reserva.id}>
                    <td className={styles.reservaid}>{reserva.id}</td>
                    <td className={styles.reservaname}>{reserva.Pessoa.nomepessoa}</td>
{/*                    <td>{TrataData(reserva.checkin).dataReact}</td>  */}
                    <td>{convData(reserva.checkin)}</td>
                    <td>{convData(reserva.checkout)}</td>
                    <td className={styles.reservaid}>{reserva.numflats}</td>
                    <td className={styles.reservaid}>{reserva.numhospedes}</td>
                    <td className={styles.reservaid}>{reserva.vlrreserva}</td>
                    <td className={styles.reservaid}>{reserva.vlrpago}</td>
                    <td className={styles.reservaid}>{reserva.Sitreserva.nomstatus}</td>
                    <td className={styles.reservaname}>{reserva.observacao}</td>
{/*
                    <td>{reserva.Emails.email}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>EMAIL</th>
                            <th>VALIDADO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reserva.Emails && reserva.Emails.map((email) => (
                              <tr key={email.id}>
                                  <td className={styles.reservaname}>{email.email}</td>
                                  <td className={styles.reservaid}>{email.validado ? 'Sim' : 'Não'}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </td>
                    <td>{reserva.Midia.midia}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>DESCRIÇÃO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reserva.Midia && reserva.Midia.map((midia) => (
                              <tr key={midia.id}>
                                  <td className={styles.reservaname}>{midia.Midiatpo.namemidia}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>
                    </td>
                    <td>{reserva.Users.user}
                      <Table responsive='sm' striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>PERFIL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reserva.Users && reserva.Users.map((user) => (
                              <tr key={user.id}>
                                  <td className={styles.reservaname}>{user.Usertype.tipouser}</td>
                              </tr>
                          ))}
                        </tbody>
                      </Table>

                    </td>

                    <td>{reserva.nascreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.areareserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.quartosreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.salasreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.varandasreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.wcsreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.cozinhasreserva}</td>
                    <td className={styles.reservaid}>{reserva.Tbstiporeserva.garagensreserva}</td>
*/}
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Reservas;