import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan, faCartPlus , faHeadphonesAlt, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';

import {VerificaCampo} from '../utils/validacao';

function Pergunta2() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({Questao2:""});

    const submitHandler = e => {
        e.preventDefault();

        if (VerificaCampo(details.Questao2)){
            console.log(details.Questao2);
            setUser({
                ...user,
                objetivo: user.objetivo,
                pergunta01:user.pergunta01, 
                pergunta02:details.Questao2, 
                pergunta03:"",
                pergunta04:""
            });
            
        }else{
            setError("Selecione uma caixa!");
        }
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
                                                 
            <input type="submit" value="PROXIMO" id='botao' className='botaoEstilo'/>
            
        </form>
  
    );
  }
  
  export default Pergunta2;