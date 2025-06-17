import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/ufs'>Unidades da Federação</NavLink>
      {/*<NavLink to='/municipios/0/0'>Municípios</NavLink>*/}
      <NavLink to='/iss'>Tabela de Serviços</NavLink>
      <NavLink to='/about'>Sobre</NavLink>
    </nav>
  );
}

export default Navbar;