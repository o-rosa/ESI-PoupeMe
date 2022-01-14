import React, { useState } from 'react';
import '../stylesheet/pages/Cadastro.css';
import LoginForm from '../component/CadastroForm';

import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite';
import { addDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useUserPointsContext } from '../contexts/UserPointsContext';

const firebaseApp = firebase.initializeApp(firebaseConfig);

let isEmailValid = true;

async function writeUserData(name, email, password) {
    const db = getFirestore(firebaseApp);

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            isEmailValid = true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if(errorCode === "auth/email-already-in-use") {
                isEmailValid = false;
            }
        });
}

function generateUserID() {
    return (Date.now().toString(36) + Math.random().toString(36).substring(2)
    );
}
const Login = (props) => {

    let navigate = useNavigate();


    //const [user, setUser] = useState({ name: "", email: "", password: "" });
    const {user, setUser} = useUserPointsContext();
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.name !== "" && details.email !== "" && details.password !== "") {
            if (details.termos === "") {
                console.log("Termos nao aceitos!");
                setError("Termos nao aceitos!");
            }
            else if (details.password.length >= 6) {
                console.log("Logged in")

                writeUserData(details.name, details.email, details.password).then(result => {
                    if(isEmailValid) {
                        setUser({
                            ...user,
                            name: details.name,
                            email: details.email,
                            //password: details.password
                        }); 
                    }
                    else {
                        setError("E-mail já cadastrado");
                    }
                })
            } else {
                setError("A senha deve conter no mínimo 6 caracteres");
            }


        } else {
            console.log("Complete todos os campos!");
            setError("Complete todos os campos!");
        }
    }

    const Logout = () => {
        setUser({ name: "", email: "", password: "" });
    }

    return (
        <div>
            {(user.email !== "") ? (

                //PEGUE OS DADOS DO "user" QUANDO CHEGAR AQUI         <---------------------------------------------------

                navigate("/feed")
            ) : (
                <LoginForm Login={Login} error={error} />
            )}

        </div>

    );
}

export default Login;
