import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table } from './tableElement/index.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
