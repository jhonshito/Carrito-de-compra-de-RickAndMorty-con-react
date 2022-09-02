import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Compras from './components/Compras';
import Tablas from './components/Tablas';
import UserProvide from './context/UserProvide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvide>
    <Routes>
      <Route path='compras/:id' element={<Compras />} />
      <Route path='Tablas/:id' element={<Tablas />} />
      <Route path='/' element={<App />} />
    </Routes>
  </UserProvide>
  </BrowserRouter>
);

