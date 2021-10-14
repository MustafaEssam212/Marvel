import React, {useState, useContext, useEffect} from "react";
import {Helmet} from 'react-helmet';
import Logo from '../Pics/logo.png'
import {Link} from 'react-router-dom'
import {useHistory, useLocation} from 'react-router-dom';

import { UserContext } from "./User-Context";
import axios from "axios";
function LoggedHeader(){

    const [Clicked, setClicked] = useState(false);
    const history = useHistory();
    const UsContext = useContext(UserContext);
    const [Notification, setNotification] = useState([]); 
    const location = useLocation();
    function handleLogout(){
        localStorage.removeItem('Token');
        localStorage.clear();
        history.push('/')
        window.location.reload();
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/o1/notification')
        .then(res => setNotification(res.data))
        
    }, [])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/o1/notification')
        .then(res => setNotification(res.data))
        
    }, [location.pathname])

    return(

        <div className="HeaderContent">

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

                <div className="LoggedHeaderReg">
                   
                    <Link to={UsContext.User.email === "marvel@marvel" ? "/Manage" : "/MyProfile"} title="My Profile"><i className="fas fa-male"></i> </Link>
                    <Link to={UsContext.User.email === "marvel@marvel" ? "/AdminCart" : "/Cart"} title="Cart"><i className="fas fa-shopping-cart"></i> <span className={UsContext.User.email === "marvel@marvel" && Notification.length !== 0 ? "Notification" : "NoSuccess"}>{Notification.length}</span></Link>
                    <button id="Btnn" className="LogOut" onClick={handleLogout} title="Log Out"><i className="fas fa-sign-out-alt"></i></button>

                </div>

                <div className="Bars" onClick={()=> setClicked(!Clicked)}>
                    <i className={Clicked === false ? "fas fa-bars" : "fas fa-times-circle"}></i>
                </div>

        </div>
    )
}

export default LoggedHeader;