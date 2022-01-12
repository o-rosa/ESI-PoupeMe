import React, { useState } from 'react';
import '../stylesheet/component/CadastroForm.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';



function CadastroForm({Login, error}) {
    
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        setDetails({...details, termos: !checked});
    };
    
    
    const [details, setDetails] = useState({name:"", email: "", password:"", termos:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }



    return (   
        <form onSubmit={submitHandler}>
            <div className='form-inner corpo'>
                <h2>Cadastre-se</h2>
                {(error != "")?(<p className="textinho error">{error}</p>): (<p className="textinho">Bem vindo ao Me Poupe!</p>)}

                <label htmlFor="email"></label>
                <input type="text" name='name' placeholder="Nome" id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                <label htmlFor="email"></label>
                <input type="email" name='email' placeholder="E-mail" id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                <label htmlFor="password"></label>
                <input type="password" name='password' placeholder="Senha" id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                <div className='termos'>
                    <input type="checkbox" name='checkbox' id='checkbox' checked={checked} onChange={handleChange}/>
                    <label htmlFor="checkbox">Concordo com todos os Termos e Condições </label>
                </div>
                <div className='botao'>
                    <input type="submit" value="CADASTRAR" className='botaoEstilo'/> <br />
                    <label htmlFor="cadastro">Ja tem uma conta? <Link to="/login" className='cad'>Login</Link></label>
                </div>
            </div>
        </form>

  
    );
  }
  
  export default CadastroForm;