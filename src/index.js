import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Compras from './components/Compras';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter  erRouter>
    <Routes>
      <Route path='compras/:id' element={<Compras />} />
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);

