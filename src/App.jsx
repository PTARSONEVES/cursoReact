
// Styles
import './App.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthetication } from './hooks/useAuthentication';
// hooks
import { useState, useEffect } from 'react';


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
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

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
  {/*}    <AuthProvider>*/}
        <BrowserRouter>
          <Navbase />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/ufs' element={<Ufs />} />
            <Route path='/municipios/:munid/:ufid' element={<Municipios />} />
            <Route path='/iss' element={<IssItems />} />
            <Route path='/iss/subitem/:itemid' element={<IssSubitems />} />
            <Route path='/iss/subitem/dnac/:itemid/:subitemid' element={<IssDnacs />} />
            <Route path='/cnae/secao/:secaoid' element={<SecaoItems />} />
            <Route path='/cnae/divisao/:divisaoid/:secaoid' element={<DivisaoItems />} />
            <Route path='/cnae/grupo/:grupoid/:secaoid/:divisaoid' element={<GrupoItems />} />
            <Route path='/cnae/c/classe/:classeid/:secaoid/:divisaoid/:grupoid' element={<ClasseItems />} />
            <Route path='/cnae/subclasse/:subclasseid/:secaoid/:divisaoid/:grupoid/:classeid' element={<SubclasseItems />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
{/*}      </AuthProvider>*/}
    </div>
  );
}


export default App;
