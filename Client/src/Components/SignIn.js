import React, {useEffect, useState, useContext} from "react";
import '../Styles/SignIn.css'
import {Helmet} from 'react-helmet'
import axios from 'axios';
import { UserContext } from './User-Context';
import {useHistory} from 'react-router-dom';

function SignIn(){

    useEffect(()=>{
        const ExistToken = localStorage.getItem('Token');
        if(ExistToken){
            history.push('/')
        }
        window.scrollTo(0, 0)
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Message, setMessage] = useState('');
    const UserCont = useContext(UserContext);
    const history = useHistory();

    function handleLogin(){
        axios.post('http://localhost:5000/api/v1/login', {email, password})
        .then(res => {
            if(res.data.message){
                setMessage(res.data.message)
            }else{
               localStorage.setItem('Token', res.data.token)
               UserCont.setUser(res.data.user)
               localStorage.setItem('UserStorage', JSON.stringify(res.data.user))
               history.push('/')
               window.location.reload();
            }
        })    
      
    }

    return(

        <div className="SignInContainer">

            <Helmet>

                <title> {'Sign In - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>

                <h3 className="FirstH3SignIn">Welcome to <span>Marvel Egypt</span></h3>

            <div className="SignInFormInside" >
               

                <form className="SignInForm" >
                    
                <h3 className="SignInH3"><i className="fas fa-sign-in-alt"></i> Login</h3>
                <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                        <ul>
                            <li>{Message}</li>
                        </ul>
                    </div>
                    <div className="SignInInputs">
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control" placeholder="Email"/>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="SignInBtn">
                    <button onClick={handleLogin} type="button" className="btn btn-success btn-lg btn-block ">Log In</button>
                    </div>
                </form>

            </div>
                
        </div>
    )
}

export default SignIn;