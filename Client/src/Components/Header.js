import React, {useEffect, useState, useContext} from 'react';
import '../Styles/Header.css'
import Logo from '../Pics/logo.png'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import LoggedHeader from './LoggedHeader';



function Header(){


    useEffect(async()=>{
        const ExistToken = localStorage.getItem('Token');
        if(ExistToken){
            setTokens(ExistToken)
        }
    })
 


    const [Clicked, setClicked] = useState(false);
    const [Tokens, setTokens] = useState('');

    return(

            <>
                {
                    Tokens === '' ? <div className="HeaderContent">

                    <Helmet>
        
                        
                        <link href="../css/fontawesome.css" rel="stylesheet" />
                        <link href="../css/brands.css" rel="stylesheet" />
                        <link href="../css/solid.css" rel="stylesheet" />
                       
        
                        </Helmet>
                    
        
                        <div className="HeaderLogo">
                            <Link to="/" title="Home"><img src={Logo} className="HeaderImgLogo" title="Marvel Egypt" alt="Marvel Egypt Logo"></img></Link>
                        </div>
        
                        <div className={Clicked === false ? "HeaderList" : "NewHeaderList"}>
                            <ul>
                                <li><Link to="/" title="Home">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Shop">Shop</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
        
                        <div className="HeaderReg">
                            <Link to="/SignUp"><i className="fas fa-user-plus"></i> Sign Up</Link>
                            <Link to="/SignIn"><i className="fas fa-user"></i> Sign In</Link>
                        </div>
        
                        <div className="Bars" onClick={()=> setClicked(!Clicked)}>
                            <i className={Clicked === false ? "fas fa-bars" : "fas fa-times-circle"}></i>
                        </div>
        
        
                </div> : <LoggedHeader />
                }
            </>


    )
}

export default Header;