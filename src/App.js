import React, { Component } from 'react';

import './stylesheet/App.css';


import { MemoryRouter, Router, Route, Routes, HashRouter, Link} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import Inicio  from './pages/Inicio';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import UserPointsContextProvider from './contexts/UserPointsContext';


function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/home" element={<Home/>} />
        </Routes> 

      </div>
    </MemoryRouter>

  );
}

export default App;

