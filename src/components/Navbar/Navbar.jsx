import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css';

const Navbase = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to='/'className={styles.brand}>Curso <span>React</span></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to='/'className={styles.navbar}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/login' className={styles.navbar}>Entrar</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/register' className={styles.navbar}>Cadastrar</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/about' className={styles.navbar}>Sobre</NavLink>
            </Nav.Link>
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
          </Nav>
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