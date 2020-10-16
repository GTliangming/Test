import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from "./app";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
