
// Styles
import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Ufs from './pages/Ufs/Ufs';
import Municipios from './pages/Municipios/Municipios';
import NotFound from './pages/NotFound/NotFound';

// Componentes
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ufs' element={<Ufs />} />
          <Route path='/municipios' element={<Municipios />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
