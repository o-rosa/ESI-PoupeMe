import React, { useState } from 'react';
import '../stylesheet/pages/Perfil.css';


import imagem from '../image/Ellipse 1.png';

import { Link } from 'react-router-dom';



const Perfil = (props) => {
    
    //Use a variavel "user" para jogar no html
    //imagem ta ruim de passar
    const [user, setUser] = useState({img:imagem, foto:"Pedro Costa", tipo:"Moderado", texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  <br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum ultricies sit nulla etiam sagittis"});
    



    return (   
        <div>
            <div className='imgNome'>
                <img src={imagem} className='imgpessoa' id='img'/>   
                <label htmlFor="img" className='nomecorno'> {user.foto} </label>
                <p className='frase'>O seu perfil de investimento é:</p>

                <label  className='tipo'> {user.tipo} </label>

                <p className='frase texto'>  {user.texto}     </p>

                <input type="submit" value="VER INVESTIMENTOS" id='botao' className='botaoEstilo btnPerfil' />

            </div>
            <div className='fundo'></div>
            


        </div>
  
    );
  }
  
  export default Perfil;
  