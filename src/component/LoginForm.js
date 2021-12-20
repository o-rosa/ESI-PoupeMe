import React, { useState } from 'react';
import '../stylesheet/component/LoginForm.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }



    return (   
        <form onSubmit={submitHandler}>
            <div className='form-inner corpo'>
                <h2>Login</h2>
                {(error != "")?(<p className="textinho error">{error}</p>): (<p className="textinho">Bem vindo ao Poupe me!</p>)}
                
                <label htmlFor="email">E-mail: </label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                <label htmlFor="password">Senha: </label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />

                <div className='botao'>
                    <input type="submit" value="LOGIN"/> <br />
                    <label htmlFor="cadastro">Nao tem uma conta? <Link to="/cadastro" className='cad'>Cadastre-se</Link></label>
                </div>
            </div>
        </form>

  
    );
  }
  
  export default LoginForm;
  