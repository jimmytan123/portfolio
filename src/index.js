import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/App';

// stylesheet
import './scss/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
