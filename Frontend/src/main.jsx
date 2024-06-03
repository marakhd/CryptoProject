import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import CurrencyInfo from './components/CurrencyInfo.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info/currency/:id" element={<CurrencyInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
