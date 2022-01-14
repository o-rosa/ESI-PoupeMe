import React, { useState } from 'react';
import '../stylesheet/pages/Login.css';
import LoginForm from '../component/LoginForm';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from '../firebaseConfig';
import {VerificaCampo} from '../utils/validacao';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserPointsContext } from '../contexts/UserPointsContext';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const Login = (props) => {
    
    let navigate = useNavigate();

    const adminUser = {
        email: "adm@adm.com",
        password: "adm123"
    }

    const {user, setUser} = useUserPointsContext();
    const [error, setError] = useState("");
    
    
    const Login = details => {
        if(VerificaCampo(details.email) && VerificaCampo(details.password)){
            firebase.auth().signInWithEmailAndPassword(details.email,details.password).then(function(result) {
                setUser({
                    ...user,
                    email: details.email,
                    password: details.password
                });
            }).catch(function (error) {
                setError("E-mail ou senha incorretos!");
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            console.log('details',details);
        }
        else{
            setError("Preencha todos os campos!");
        }
    }

    const Logout = () => {
        setUser({email:"", password:""});
    }


    return (   
        <div>
            {(user.email != "")? (

                //PEGUE OS DADOS DO "user" QUANDO CHEGAR AQUI         <---------------------------------------------------

                navigate("/perfil")

            ):(
                <LoginForm Login={Login} error={error}/>
            )}
            
        </div>
  
    );
  }
  
  export default Login;
  