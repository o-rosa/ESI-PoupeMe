import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan, faCartPlus , faHeadphonesAlt, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function Pergunta2({Feed, error}) {
    
    const [details, setDetails] = useState({Questao2:""});

    const submitHandler = e => {
        e.preventDefault();

        Feed(details);
    }


    const Check = e => {
        setDetails({Questao2:e})

    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Como você avalia seu conhecimento sobre investimentos?{(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            
            <Quadrados Check={Check} icon1={faBan} icon2={faCartPlus} icon3={faHeadphonesAlt} icon4={faAdjust} 
                                     txt1="Não tenho conhecimento" txt2="Razoável" 
                                     txt3="Bom" txt4="Excelente"/>
                                                 
            <input type="submit" value="PROXIMO" id='botao' />
            
        </form>
  
    );
  }
  
  export default Pergunta2;