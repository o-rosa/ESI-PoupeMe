import React, { useState } from 'react';
import '../stylesheet/component/LoginForm.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { BtnDefaultIcons } from '../component/ButtonStyled';
// import GTranslateIcon from '@material-ui/icons/GTranslate';
import Api from '../Api.js';



function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();
        console.log('result', result);
        if (result) {
            setDetails({
                email: result.user.email,
                password: 'A'
            })
        }else {
            alert('error');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner corpo'>
                <h2>Login</h2>
                {(error != "") ? (<p className="textinho error">{error}</p>) : (<p className="textinho">Bem vindo ao Poupe me!</p>)}

                <label htmlFor="email">E-mail: </label>
                <input type="email" name='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                <label htmlFor="password">Senha: </label>
                <input type="password" name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />



                <div className='botao'>
                    <input type="submit" value="LOGIN"  className='botaoEstilo'/> <br />
                    <label htmlFor="cadastro">Nao tem uma conta? <Link to="/cadastro" className='cad'>Cadastre-se</Link></label>

                </div>

                <BtnDefaultIcons onClick={actionLoginGoogle}>
                    {/* <GTranslateIcon /> */}
                    Faça Login com Google
                </BtnDefaultIcons>


            </div>
        </form>


    );
}

export default LoginForm;