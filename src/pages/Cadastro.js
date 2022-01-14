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

const firebaseApp = firebase.initializeApp(firebaseConfig);



async function writeUserData(userId, name, email) {
  const db = getFirestore(firebaseApp);

  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: name,
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function generateUserID() {
    return (Date.now().toString(36) + Math.random().toString(36).substring(2)
    );
  }
const Login = (props) => {

    let navigate = useNavigate();


    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.name !== "" && details.email !== "" && details.password !== "") {
            if (details.termos !== "") {
                console.log("Logged in")
                
                setUser({
                    name: details.name,
                    email: details.email,
                    password: details.password
                });
                writeUserData(generateUserID(),details.name,details.email)

            } else {
                console.log("Termos nao aceitos!");
                setError("Termos nao aceitos!");
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
