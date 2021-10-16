import React from 'react';
import '../Styles/ChatIcon.css'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
function ChatIcon(){
    const Token = localStorage.getItem('Token')
    const location = useLocation();
    return(

        <div className={Token === null || location.pathname === "/Chat" ? "NoSuccess" : "ChatIcon"}>
            <div className="ChatIconI">
            <p>Chat With Us <div id="triangle-down"></div></p>
            <Link to="/Chat"><i className="fas fa-comments"></i></Link>
            
            </div>
        </div>
    )
}

export default ChatIcon;