import '@fontsource/estedad/300.css';
import '@fontsource/estedad/400.css';
import '@fontsource/estedad/500.css';
import '@fontsource/estedad/600.css';
import '@fontsource/estedad/700.css';
import '@fontsource/estedad/800.css';
import '@fontsource/estedad/900.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
