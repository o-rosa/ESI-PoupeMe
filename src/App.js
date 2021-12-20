import React, { Component } from 'react';

import './stylesheet/App.css';


import { MemoryRouter, Router, Route, Routes, HashRouter, Link} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import Inicio  from './pages/Inicio';
import Login from './pages/Login';
import Perfil from './pages/Perfil';


function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes> 

      </div>
    </MemoryRouter>

  );
}

export default App;

