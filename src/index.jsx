import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import {AppProvider} from './components/Context/AppContext';
import {MobXProviderContext, Provider} from 'mobx-react';
import App from './components/App/App.jsx';
import './assets/styles/styles.scss';
import wordStore from "./store/MobX/WordStore";

const words = wordStore;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider wordsStore={words}>

    <AppProvider>

        <App/>

    </AppProvider>
    </Provider>

  </React.StrictMode>,
);