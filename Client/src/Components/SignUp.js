import React, {useEffect, useState} from "react";
import '../Styles/SignUp.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'
import {useHistory} from 'react-router-dom';

function SignUp(){

    useEffect(()=>{
        const ExistToken = localStorage.getItem('Token');
        if(ExistToken){
            history.push('/')
        }
        window.scrollTo(0, 0)
    }, [])

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [secondmobile, setSecondMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [Messages, setMessages] = useState([]);
    const [Success, setSuccess] = useState('');
    const history = useHistory();
    

    async function handleRegister(e){
        e.preventDefault();
     
        
            axios.post('http://localhost:5000/api/v1/register', {firstname, lastname, email, password, confirmpassword, mobile, secondmobile, address, city})
        .then(res => {
            if(res.data.message === 'Email Already Taken'){
                setMessages([{msg: res.data.message}])
            }else if(res.data.message === 'Register Successfully'){
                setSuccess(res.data.message)
            }else{
                setMessages(res.data)
            }
        })
        
    }
    
    return(

        <div className="SignUpContainer">

            <Helmet>

                <title> {'Sign Up - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>

                <h3>Create a New Account and Enjoy The Best Discounts on <span>Marvel Egypt</span></h3>

                <div className="FormInside">
                    
                <form className="SignUpForm">
                    <p className="Notice">All information are required except second mobile number is optional <span>*</span></p>
                    <div className="AlertBox">
                        <ul>
                            {
                                Messages.map((item)=>{
                                    return <li>{item.msg}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={Success === '' ? 'NoSuccess' : "SuccessBox"}>
                        <ul>
                            <li>{Success}, <Link to="/SignIn" className="SucessA">Click Here To Log In</Link></li>
                        </ul>
                    </div>
                    <div className="NameRegister">
                        <input onChange={(e)=>setFirstName(e.target.value)} type="text" className="form-control" placeholder="First Name"/>
                        <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="AnotherInputs">
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"/>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Password"/>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="form-control" placeholder="Confirm Password"/>
                    <input onChange={(e)=>setMobile(e.target.value)} type="number" className="form-control" placeholder="Mobile Number"/>
                    <input onChange={(e)=>setSecondMobile(e.target.value)} type="number" className="form-control" placeholder="Mobile Number (Optional)"/>
                    <input onChange={(e)=>setAddress(e.target.value)} type="text" className="form-control" placeholder="Address"/>
                    <select Value="City" className="form-select Select" id="SelectUp" onChange={(e)=>{setCity(e.target.value)}}>
                        <option selected disabled>City</option>
                        <option  value="Cairo">Cairo</option>
                        <option  value="Giza">Giza</option>
                        <option  value="Alexandria">Alexandria</option>
                        <option  value="Port Said">Port Said</option>
                        <option  value="Suez">Suez</option>
                        <option  value="Al Mahallah al Kubra">Al Mahallah al Kubra</option>
                        <option  value="Qalubia">Qalubia</option>
                        <option  value="Al Mansurah">Al Mansurah</option>
                        <option  value="Tanta">Tanta</option>
                    </select>
                    </div>
                    <div className="RegisterBtn">
                    <button type="button" onClick={handleRegister} className="btn btn-success btn-lg btn-block ">Register</button>
                    </div>
                </form>
                
                </div>
                <div  className="HaveAccount">
                <Link to="SignIn">Have an Account ? Click Here To Log In</Link>
                </div>
        </div>

    )
}

export default SignUp;