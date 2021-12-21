import React, { useEffect, useState } from 'react';
import '../stylesheet/pages/Perfil.css';

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';
import imagem from '../image/Ellipse 1.png';



const Perfil = (props) => {
    const { user } = useUserPointsContext()
    const [perfil, setPerfil] = useState('')

    useEffect(() => {
        const userPoints = parseInt(user.pergunta01) + parseInt(user.pergunta02) + parseInt(user.pergunta03) + parseInt(user.pergunta04)
        if (userPoints <= 4) setPerfil('Conservador')
        else if (userPoints <= 7) setPerfil('Moderado')
        else if (userPoints <= 12) setPerfil('Agressivo')
    }, [setPerfil, user])

    return (
        <div>
            <div className='imgNome'>
                <img src={imagem} className='imgpessoa' id='img' />
                <label htmlFor="img" className='nomecorno'> {user.foto} </label>
                <p className='frase'>O seu perfil de investimento é:</p>

                <label className='tipo'> {perfil} </label>

                <p className='frase texto'>  {user.texto}     </p>

                <input type="submit" value="VER INVESTIMENTOS" id='botao' className='botaoEstilo btnPerfil' />

            </div>
            <div className='fundo'></div>



        </div>

    );
}

export default Perfil;
