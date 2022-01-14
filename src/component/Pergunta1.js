import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faWifi , faBook, faPeopleArrows} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';

import {VerificaCampo} from '../utils/validacao';


function Pergunta1() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({Questao1:""});

    const submitHandler = e => {
        e.preventDefault();

        if (VerificaCampo(details.Questao1)){
            setUser({
                ...user,
                objetivo: user.objetivo,
                pergunta01:details.Questao1, 
                pergunta02:"", 
                pergunta03:"",
                pergunta04:""
            });
            
        }else{
            setError("Selecione uma caixa!");
        }
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
            
            <input type="submit" value="PROXIMO" id='botao' className='botaoEstilo'/>
            
        </form>
  
    );
  }
  
  export default Pergunta1;