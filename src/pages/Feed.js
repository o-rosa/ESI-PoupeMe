import React, { useState } from 'react';
import '../stylesheet/pages/Feed.css';
import ObjetivoInvestimento from '../component/ObjetivoInvestimento';
import Pergunta1 from '../component/Pergunta1';
import Pergunta2 from '../component/Pergunta2';
import Pergunta3 from '../component/Pergunta3';
import Pergunta4 from '../component/Pergunta4';

import { useNavigate } from 'react-router-dom';







const Feed = (props) => {


    let navigate = useNavigate();

    const [user, setUser] = useState({objetivo:"", pergunta01:"", pergunta02:"", pergunta03:"", pergunta04:""});
    const [error, setError] = useState("");

    const Objetivo = details => {
        console.log(details);

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

    const Questao1 = details => {

        if (details.Questao1 != ""){
            setUser({
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

    const Questao2 = details => {

        if (details.Questao2 != ""){
            console.log(details.Questao2);
            setUser({
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

    const Questao3 = details => {
        if (details.Questao3 != ""){
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

    const Questao4 = details => {

        if (details.Questao4 != ""){
            setUser({
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







    const Tela = () => {
        if(user.objetivo == ""){
           return <ObjetivoInvestimento Feed={Objetivo} error={error}/>
        }
        else if(user.pergunta01 == ""){
            return <Pergunta1 Feed={Questao1} error={error}/>
        }
        else if(user.pergunta02 == ""){
            return <Pergunta2 Feed={Questao2} error={error}/>
        }
        else if(user.pergunta03 == ""){
            return <Pergunta3 Feed={Questao3} error={error}/>
        }
        else if(user.pergunta04 == ""){
            return <Pergunta4 Feed={Questao4} error={error}/>
        }
        else{
            
            //PEGUE OS DADOS DO "user" QUANDO CHEGAR AQUI         <---------------------------------------------------
            
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
  