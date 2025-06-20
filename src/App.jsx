
// Styles
import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

// Componentes
import Navbar from './components/Navbar/Navbar';
import DivisaoItems from './pages/Cnae/Divisao/DIvisao';
import GrupoItems from './pages/Cnae/Grupo/Grupo';
import ClasseItems from './pages/Cnae/Classe/Classe';
import SubclasseItems from './pages/Cnae/Subclasse/Subclasse';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ufs' element={<Ufs />} />
          <Route path='/municipios/:munid/:ufid' element={<Municipios />} />
          <Route path='/iss' element={<IssItems />} />
          <Route path='/iss/subitem/:itemid' element={<IssSubitems />} />
          <Route path='/iss/subitem/dnac/:itemid/:subitemid' element={<IssDnacs />} />
          <Route path='/cnae/secao/0' element={<SecaoItems />} />
          <Route path='/cnae/divisao/0' element={<DivisaoItems />} />
          <Route path='/cnae/grupo/0' element={<GrupoItems />} />
          <Route path='/cnae/classe/0' element={<ClasseItems />} />
          <Route path='/cnae/subclasse/0' element={<SubclasseItems />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
