import React, {useEffect} from 'react';
import '../Styles/ChatIcon.css'
import {Link} from 'react-router-dom'
function ChatIcon(){
    const Token = localStorage.getItem('Token')
    
    return(

        <div className={Token === null ? "NoSuccess" : "ChatIcon"}>
            <div className="ChatIconI">
            <p>Chat With Us <div id="triangle-down"></div></p>
            <Link to="/Chat"><i className="fas fa-comments"></i></Link>
            
            </div>
        </div>
    )
}

export default ChatIcon;