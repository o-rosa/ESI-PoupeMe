import React, { useEffect, useState } from 'react';
import '../stylesheet/pages/Perfil.css';

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';
import imagem from '../image/pessoaGenerica.png';
import { useNavigate } from 'react-router-dom';
import {VerificaPerfil} from '../utils/validacao';

import firebase from 'firebase/compat/app';
import firebaseConfig from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore/lite';
import { addDoc } from 'firebase/firestore/lite';
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { wait } from '@testing-library/user-event/dist/utils';


const firebaseApp = firebase.initializeApp(firebaseConfig);

async function getUserByEmail(email) {
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "users"), where("email", "==", email));
    let userData;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      userData = doc.data();
    });

    return userData;
}

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
            userTeste.texto = 'Voc?? prefere investir em op????es que oferecem baixo risco. Isso acaba influenciando seus objetivos, que normalmente est??o focados em n??o perder nada e, assim, preservar seu patrim??nio.';
            break;
        case 'Moderado': 
            userTeste.texto = 'Voc?? ?? um meio termo entre quem ?? muito conservador e quem ?? muito arrojado. O investidor moderado ?? uma pessoa que ainda mant??m forte interesse pela seguran??a, mas est?? disposta a abrir m??o de parte dela ??s vezes para ter retornos melhores.';
            break;
        case 'Agressivo':
            userTeste.texto = 'Voc?? costuma ser mais experiente e n??o se abala facilmente por eventuais perdas, porque entende que uma certa exposi????o ao risco pode ser compensada com melhores ganhos no final.';
            break;
    }

    return (   
        <div>

            <div className='imgNome'>
                <img src={imagem} className='imgpessoa' id='img'/>   
                <label htmlFor="img" className='nomePessoa'> {userTeste.foto} </label>
                <p className='frase'>O seu perfil de investimento ??:</p>

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
  
