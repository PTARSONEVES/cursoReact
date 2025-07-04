import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { CounterContextProvider } from './context/Counter/CounterContext.jsx';
import { TitleColorContextProvider } from './context/Title/TitleColorContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
