import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';
import Quadrados from '../component/Quadrados';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan, faCartPlus , faHeadphonesAlt, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';



function Pergunta3() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({Questao3:""});

    const submitHandler = e => {
        e.preventDefault();

        if (details.Questao3 !== ""){
            setUser({
                objetivo: user.objetivo,
                pergunta01:user.pergunta01, 
                pergunta02:user.pergunta02, 
                pergunta03:details.Questao3,
                pergunta04:""
            });
            
        }else{
            setError("Selecione uma caixa!");
        }
    }


    const Check = e => {
        setDetails({Questao3:e})

    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'> Qual é o seu objetivo ao investir?{(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            
            <Quadrados Check={Check} icon1={faBan} icon2={faCartPlus} icon3={faHeadphonesAlt} icon4={faAdjust} 
                                     txt1="Ainda não tenho um objetivo definido" txt2="Preservar capital: corrigir os investimentos pela variação da inflação" 
                                     txt3="Acumular recursos: obter rentabilidade acima da inflação" txt4="Especular: ter alta valorização, correndo riscos maiores, se necessário"/>   
                                              
            <input type="submit" value="PROXIMO" id='botao' className='botaoEstilo'/>
            
        </form>
  
    );
  }
  
  export default Pergunta3;