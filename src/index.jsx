import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { AppContext } from './components/Context/AppContext.jsx';
import './assets/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
);
