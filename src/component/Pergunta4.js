import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan, faCartPlus , faHeadphonesAlt, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function Pergunta4({Feed, error}) {
    
    const [details, setDetails] = useState({Questao4:""});

    const submitHandler = e => {
        e.preventDefault();

        Feed(details);
    }


    const Check = e => {
        setDetails({Questao4:e})

    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Ultima questao amem {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            
            <Quadrados Check={Check} icon1={faBan} icon2={faCartPlus} icon3={faHeadphonesAlt} icon4={faAdjust} 
                                     txt1="Alo galera de cowboy" txt2="Alo galera de peao" 
                                     txt3="Quem gosta de rodeio " txt4="Bate forte com a mao"/>
            
            <input type="submit" value="CONCLUIR" id='botao' className='botaoEstilo'/>
            
        </form>
  
    );
  }
  
  export default Pergunta4;