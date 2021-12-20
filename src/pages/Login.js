import React, { useState } from 'react';
import '../stylesheet/pages/Login.css';
import LoginForm from '../component/LoginForm';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    
    // a var "props" esta recebendo "details" do LoginForms, use ela para jogar os dado no FireBase

    let navigate = useNavigate();

    const adminUser = {
        email: "adm@adm.com",
        password: "adm123"
    }

    const [user, setUser] = useState({email:"", password:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in")

            setUser({
                email: details.email,
                password: details.password
            });
            
        }else{
            console.log("Details do not match!");
            setError("E-mail ou senha incorretos!");
        }
    }

    const Logout = () => {
        setUser({email:"", password:""});
    }






    return (   
        <div>
            {(user.email != "")? (
                navigate("/perfil")

            ):(
                <LoginForm Login={Login} error={error}/>
            )}
            
        </div>
  
    );
  }
  
  export default Login;
  