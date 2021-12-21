import React, { useState } from 'react';
import '../stylesheet/pages/Feed.css';
import ObjetivoInvestimento from '../component/ObjetivoInvestimento';
import Pergunta1 from '../component/Pergunta1';
import Pergunta2 from '../component/Pergunta2';
import Pergunta3 from '../component/Pergunta3';
import Pergunta4 from '../component/Pergunta4';

import { useNavigate } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';

const Feed = (props) => {
    const {user} = useUserPointsContext()

    let navigate = useNavigate();



    const Tela = () => {
        if(user.objetivo === ""){
           return <ObjetivoInvestimento/>
        }
        else if(user.pergunta01 === ""){
            return <Pergunta1 />
        }
        else if(user.pergunta02 === ""){
            return <Pergunta2 />
        }
        else if(user.pergunta03 === ""){
            return <Pergunta3 />
        }
        else if(user.pergunta04 === ""){
            return <Pergunta4 />
        }
        else{
            console.log(user);
            navigate("/perfil")
        }

    }


    return (   
        <div className='corpo'>
            <h2>Perfil Investidor</h2>
            {Tela()}            
            
        </div>
  
    );
  }
  
  export default Feed;
  