import React, { useState } from 'react';
import '../stylesheet/pages/Inicio.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const Inicio = (props) => {
  
    return (   
        <div className="App">
            <header className="App-header">
            <img src={logo}  alt="logo" />
            <h1>
                Me Poupe!
            </h1>
            <h4>
                Bem-vindo ao Me Poupe!
            </h4>
            <p className="textinho">Aqui voce aprende a controlar suas financas e a conquistar sua independência financeira</p>

            <Link to="/cadastro"> <div className="iniciar"><span className="spanNone">&nbsp;&nbsp; INICIAR</span><span className="spanHover">&nbsp;&nbsp; INICIAR</span><FontAwesomeIcon icon={faArrowRight} className="doneteIcon"/></div></Link>

            </header>
        </div>
  
    );
  }
  
  export default Inicio;
  