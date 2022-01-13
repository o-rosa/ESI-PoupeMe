import React, { useState } from 'react';
import '../stylesheet/pages/Cadastro.css';
import LoginForm from '../component/CadastroForm';

import { useNavigate } from 'react-router-dom';

import {VerificaCampo} from '../utils/validacao';

const Login = (props) => {
    
    let navigate = useNavigate();


    const [user, setUser] = useState({name:"", email:"", password:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

        if (VerificaCampo(details.name) && VerificaCampo(details.email) && VerificaCampo(details.password)){
            if(details.termos !== ""){
                console.log("Logged in")

                setUser({
                    name: details.name,
                    email: details.email,
                    password: details.password
                });
            }else{
                console.log("Termos nao aceitos!");
                setError("Termos nao aceitos!");
            }
            
            
        }else{
            console.log("Complete todos os campos!");
            setError("Complete todos os campos!");
        }
    }

    const Logout = () => {
        setUser({name:"", email:"", password:""});
    }






    return (   
        <div>
            {(user.email !== "")? (
                
                //PEGUE OS DADOS DO "user" QUANDO CHEGAR AQUI         <---------------------------------------------------

                navigate("/feed")
            ):(
                <LoginForm Login={Login} error={error}/>
            )}
            
        </div>
  
    );
  }
  
  export default Login;
  