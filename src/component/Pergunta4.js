import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan, faCartPlus , faHeadphonesAlt, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';

function Pergunta4() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({Questao4:""});
    

    const submitHandler = e => {
        e.preventDefault();

        if (details.Questao4 != ""){
            setUser({
                ...user,
                objetivo: user.objetivo,
                pergunta01:user.pergunta01, 
                pergunta02:user.pergunta02, 
                pergunta03:user.pergunta03,
                pergunta04:details.Questao4
            });
            
        }else{
            setError("Selecione uma caixa!");
        }
    }


    const Check = e => {
        setDetails({Questao4:e})

    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Quais investimentos você realizou frequentemente nos últimos 24 meses? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            
            <Quadrados Check={Check} icon1={faBan} icon2={faCartPlus} icon3={faHeadphonesAlt} icon4={faAdjust} 
                                     txt1="Nunca investi. Primeiro aporte." txt2="Investi apenas em produtos ou fundos de renda fixa." 
                                     txt3="Investi em produtos de renda fixa e/ou renda variável com finalidade de hedge." txt4="Investi em produtos de renda fixa e/ou renda variável com finalidade de especulação ou alavancagem"/>
            
            <input type="submit" value="CONCLUIR" id='botao' className='botaoEstilo'/>
            
        </form>
  
    );
  }
  
  export default Pergunta4;