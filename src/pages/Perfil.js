import React, { useEffect, useState } from 'react';
import '../stylesheet/pages/Perfil.css';

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';



const Login = (props) => {
    const {user} = useUserPointsContext()
    const [perfil, setPerfil] = useState('')

    useEffect(() => {
        const userPoints = parseInt(user.pergunta01) + parseInt(user.pergunta02) + parseInt(user.pergunta03) + parseInt(user.pergunta04)
        if(userPoints <= 4) setPerfil('Conservador')
        else if(userPoints <= 7) setPerfil('Moderado')
        else if(userPoints <= 12) setPerfil('Agressivo')
    }, [setPerfil, user])

    return (   
        <div>
            <Link to="/">Seu perfil é: {perfil}</Link>
            
        </div>
  
    );
  }
  
  export default Login;
  