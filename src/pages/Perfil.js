import React, { useEffect, useState } from 'react';
import '../stylesheet/pages/Perfil.css';

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';
import imagem from '../image/pessoaGenerica.png';
import { useNavigate } from 'react-router-dom';
import {VerificaPerfil} from '../utils/validacao';

const Perfil = (props) => {

    let navigate = useNavigate();

    const [userTeste, setUser] = useState({img:imagem, foto:"Fulano de Tal", tipo:"xxx", texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  <br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis"});

    const {user} = useUserPointsContext()
    const [perfil, setPerfil] = useState('')

    useEffect(() => {
        const userPoints = parseInt(user.pergunta01) + parseInt(user.pergunta02) + parseInt(user.pergunta03) + parseInt(user.pergunta04);
        setPerfil(VerificaPerfil(userPoints));
    }, [setPerfil, user])

    switch (perfil) {
        case 'Conservador':
            userTeste.texto = 'Você prefere investir em opções que oferecem baixo risco. Isso acaba influenciando seus objetivos, que normalmente estão focados em não perder nada e, assim, preservar seu patrimônio.';
            break;
        case 'Moderado': 
            userTeste.texto = 'Você é um meio termo entre quem é muito conservador e quem é muito arrojado. O investidor moderado é uma pessoa que ainda mantém forte interesse pela segurança, mas está disposta a abrir mão de parte dela às vezes para ter retornos melhores.';
            break;
        case 'Agressivo':
            userTeste.texto = 'Você costuma ser mais experiente e não se abala facilmente por eventuais perdas, porque entende que uma certa exposição ao risco pode ser compensada com melhores ganhos no final.';
            break;
    }

    return (   
        <div>

            <div className='imgNome'>
                <img src={imagem} className='imgpessoa' id='img'/>   
                <label htmlFor="img" className='nomePessoa'> {userTeste.foto} </label>
                <p className='frase'>O seu perfil de investimento é:</p>

                <label  className='tipo'> {perfil} </label>

                <p className='frase texto'>  {userTeste.texto}     </p>

                <button id='botao' className='botaoEstilo btnPerfil' onClick={()=>navigate("/home")}>
                VER INVESTIMENTOS
                </button>

            </div>
            <div className='fundo'></div>

            
        </div>
  
    );
  }
  
  export default Perfil;
  
