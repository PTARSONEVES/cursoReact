
// Styles
import './App.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// hooks
import { useState, useEffect } from 'react';
import { useAuthetication } from './hooks/useAuthentication';


// Context
import { AuthProvider } from './context/Auth/AuthContext';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Ufs from './pages/Ufs/Ufs';
import Municipios from './pages/Municipios/Municipios';
import IssItems from './pages/Iss/IssItems/IssItems';
import IssSubitems from './pages/Iss/Subitems/IssSubitems';
import IssDnacs from './pages/Iss/IssDnacs/issDnacs';
import SecaoItems from './pages/Cnae/Secao/Secao';
import NotFound from './pages/NotFound/NotFound';
import Flats from './pages/Flats/Flat';
import Pessoas from './pages/Pessoas/Pessoas/Pessoa';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reserva from './pages/Reservas/Reserva';

// Componentes
import Navbase from './components/Navbar/Navbar';
import DivisaoItems from './pages/Cnae/Divisao/DIvisao';
import GrupoItems from './pages/Cnae/Grupo/Grupo';
import ClasseItems from './pages/Cnae/Classe/Classe';
import SubclasseItems from './pages/Cnae/Subclasse/Subclasse';
import Footer from './components/Footer/Footer';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthetication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbase />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/ufs' element={user ? <Ufs /> : <Navigate to='/login' />} />
            <Route path='/municipios/:munid/:ufid' element={user ? <Municipios /> : <Navigate to='/login' />} />
            <Route path='/iss' element={user ? <IssItems /> : <Navigate to='/login' />} />
            <Route path='/iss/subitem/:itemid' element={user ? <IssSubitems /> : <Navigate to='/login' />} />
            <Route path='/iss/subitem/dnac/:itemid/:subitemid' element={user ? <IssDnacs /> : <Navigate to='/login' />} />
            <Route path='/cnae/secao/:secaoid' element={user ? <SecaoItems /> : <Navigate to='/login' />} />
            <Route path='/cnae/divisao/:divisaoid/:secaoid' element={user ? <DivisaoItems /> : <Navigate to='/login' />} />
            <Route path='/cnae/grupo/:grupoid/:secaoid/:divisaoid' element={user ? <GrupoItems /> : <Navigate to='/login' />} />
            <Route path='/cnae/c/classe/:classeid/:secaoid/:divisaoid/:grupoid' element={user ? <ClasseItems /> : <Navigate to='/login' />} />
            <Route path='/cnae/subclasse/:subclasseid/:secaoid/:divisaoid/:grupoid/:classeid' element={user ? <SubclasseItems /> : <Navigate to='/login' />} />
            <Route path='/flats' element={user ? <Flats /> : <Navigate to='/login' />} />
            <Route path='/pessoas' element={user ? <Pessoas /> : <Navigate to='/login' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path='/reservas' element={user ? <Reserva /> : <Navigate to='/' />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}


export default App;
