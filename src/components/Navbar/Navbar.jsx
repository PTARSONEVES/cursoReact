import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>Sobre</NavLink>
      <NavLink to='/ufs'>Unidades da Federação</NavLink>
      <NavLink to='/municipios'>Municípios</NavLink>
    </nav>
  );
}

export default Navbar;