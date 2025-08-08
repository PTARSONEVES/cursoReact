import { NavLink } from 'react-router-dom';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styles from './Navbar.module.css';

import { useAuthetication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/Auth/AuthContext';

const Navbase = () => {
  const {user} = useAuthValue();
  const {logout} = useAuthetication();
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <NavLink to='/'className={styles.brand}>Curso <span>React</span></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/'className={styles.navbar}>Home</NavLink>
            {!user &&(
              <>
                <NavLink to='/login' className={styles.navbar}>Entrar</NavLink>
                <NavLink to='/register' className={styles.navbar}>Cadastrar</NavLink>
              </>
            )}
            {user &&(
             <>
                <NavDropdown className={styles.navbar} title="Hospedagem">
                  <NavDropdown className={styles.navbar} title="Reservas">
                    <NavDropdown.Item>
                      <NavLink to='/cadreservas' className={styles.navbar}>Cadastrar</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to='/' className={styles.navbar}>Gerenciar</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to='/reservas' className={styles.navbar}>Visualizar</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.navbar} title="Cadastros do Sistema">
                  <NavDropdown.Item>
                    <NavLink to='/flats' className={styles.navbar}>Flats</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/' className={styles.navbar}>Itens de Manutenção</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/pessoas' className={styles.navbar}>Pessoas</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/' className={styles.navbar}>Usuários</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown className={styles.navbar} title="Produtos">
                    <NavDropdown.Item>
                      <NavLink to='/' className={styles.navbar}>Consumo</NavLink>
                      <NavLink to='/' className={styles.navbar}>Mobiliário</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className={styles.navbar} title="Tabelas do Sistema">
                  <NavDropdown.Item>
                    <NavLink to='/ufs' className={styles.navbar}>UF's</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/iss' className={styles.navbar}>Serviços</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/cnae/secao/0' className={styles.navbar}>CNAE's</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
             </>
            )}
            <NavLink to='/about' className={styles.navbar}>Sobre</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {user && (
              <Button variant="outline-warning" onClick={logout}>Sair</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*
import styles from  './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <NavLink to='/' className={styles.brand}>
        Curso <span>React</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/ufs' className={({isActive}) => (isActive ? styles.active : '')}>UF's</NavLink>
        </li>
        <li>
          <NavLink to='/iss' className={({isActive}) => (isActive ? styles.active : '')}>Serviços</NavLink>
        </li>
        <li>
          <NavLink to='/cnae/secao/0' className={({isActive}) => (isActive ? styles.active : '')}>CNAE's</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
}
*/


export default Navbase;