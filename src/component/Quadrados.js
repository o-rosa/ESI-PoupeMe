import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import '../stylesheet/component/Quadrado.css';


import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function Quadrados({Check, icon1, icon2, icon3, icon4, txt1,txt2, txt3, txt4}) {



    const setGender = e => {
        Check(e.target.value);
      }

    

    return (   
      
        <div onChange={setGender.bind(this)}>
            <input type="radio" value="1" id="opcao1" className='radioff' name='opcao'/> <label htmlFor="opcao1" className='lbl'> <div className='caixa'   ><FontAwesomeIcon icon={icon1} className="icon"/><p className='txt'>{txt1}</p></div></label>
            <input type="radio" value="2" id="opcao2" className='radioff' name='opcao'/> <label htmlFor="opcao2" className='lbl'> <div className='caixa'   ><FontAwesomeIcon icon={icon2} className="icon"/><p className='txt'>{txt2}</p></div></label>
            <input type="radio" value="3" id="opcao3" className='radioff' name='opcao'/> <label htmlFor="opcao3" className='lbl'> <div className='caixa'   ><FontAwesomeIcon icon={icon3} className="icon"/><p className='txt'>{txt3}</p></div></label>
            <input type="radio" value="4" id="opcao4" className='radioff' name='opcao'/> <label htmlFor="opcao4" className='lbl'> <div className='caixa l4'><FontAwesomeIcon icon={icon4} className="icon"/><p className='txt'>{txt4}</p></div></label>
        </div>
  
    );
  }
  
  export default Quadrados;