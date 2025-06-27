import { NavLink } from 'react-router-dom';

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

export default Navbar;