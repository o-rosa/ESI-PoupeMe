import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faWifi , faBook, faPeopleArrows} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function Pergunta1({Feed, error}) {
    
    const [details, setDetails] = useState({Questao1:""});

    const submitHandler = e => {
        e.preventDefault();

        Feed(details);
    }


    const Check = e => {
        setDetails({Questao1:e})

    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Quando tenho um dinheirinho extra sobrando, o que geralmente eu faço? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            
            <Quadrados Check={Check} icon1={faPhone} icon2={faWifi} icon3={faBook} icon4={faPeopleArrows} 
                                     txt1="Ligo para meu gerente e peço orientação" txt2="Pesquiso na internet  como guardar dinheiro" 
                                     txt3="Leio livros e revistas sobre investimentos " txt4="Converso com pessoas que já investem"/>
            
            <input type="submit" value="PROXIMO" id='botao' />
            
        </form>
  
    );
  }
  
  export default Pergunta1;