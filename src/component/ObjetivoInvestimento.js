import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';



function ObjetivoInvestimento() {
    const { setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({objetivo:""});

    const submitHandler = e => {
        e.preventDefault();
        if (details.objetivo != ""){
            setUser({
                objetivo: details.objetivo,
                pergunta01:"", 
                pergunta02:"", 
                pergunta03:"",
                pergunta04:""
            });
            
        }else{
            console.log("Coloque um objetivo!");
            setError("Coloque um objetivo!");
        }
    }




    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Qual seu objetivo de investimento? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <textarea rows="20" cols="40" name='objetivo' id='objetivo' onChange={e => setDetails({...details, objetivo: e.target.value})} value={details.objetivo} />
            <div className='botao'>
                <input type="submit" value="PROXIMO" id='botao' className='botaoEstilo'/>
            </div>

        </form>
  
    );
  }
  
  export default ObjetivoInvestimento;