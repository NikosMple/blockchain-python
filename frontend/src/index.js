import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Blockchain from './components/Blockchain';
import ConductTransaction from './components/ConductTransactions';
import TransactionPool from './components/TransactionPool';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/blockchain' element={<Blockchain />} />
      <Route path='/conduct-transaction' element={<ConductTransaction />} />
      <Route path='/transaction-pool' element={<TransactionPool />} />
    </Routes>
  </Router>
);
