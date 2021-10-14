import React, { useEffect, useState, useContext } from "react";
import '../Styles/Chat.css'

import {UserContext} from './User-Context';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import ChatRoom from "./ChatRoom";

function Chat(){
    const UsContext = useContext(UserContext);

    const [Message, setMessage] = useState('');
    const UserName = UsContext.User.firstname + ' ' + UsContext.User.lastname;
    const Email = UsContext.User.email;
    const [Messages, setMessages] = useState([]);
    const [vari, setVari] = useState(Math.random());

   useEffect(()=>{
    axios.post('http://localhost:5000/api/c1/getmychat', {Email})
    .then(res => setMessages(res.data))
    window.scrollTo(0, 0)
   }, [])

   useEffect(()=>{
    axios.post('http://localhost:5000/api/c1/getmychat', {Email})
    .then(res => setMessages(res.data))
}, [vari])


    function handleSendMessage(s){
        s.preventDefault();
        axios.post('http://localhost:5000/api/c1/sendmessage', {Message, UserName, Email})
        .then(res => setVari(Math.random()))
        document.getElementById('textinput').value = ''
    }

    useEffect(()=>{
        const Scrolled = document.getElementById('MessagesId');
        if(!Scrolled){
            return
        }else{
            Scrolled.scrollTop = Scrolled.scrollHeight;
        }
    })


    
    const [Time, setTime] = useState(true);

    setTimeout(()=>{
        setTime(!Time)
    }, 30000)

    useEffect(()=>{
        axios.post('http://localhost:5000/api/c1/getmychat', {Email})
        .then(res => setMessages(res.data))
    }, [Time])

    return(
        <div className="ChatContainer">

            {
                UsContext.User.email === "marvel@marvel" ? <ChatRoom /> : <div>


               
            

                <div>
                    <div className="OldChatContainer">
                            <div className="OldChat">
                                <div id="MessagesContainer" className="Messages">
                                {
                                    Messages.map((element)=>{
                                        return <>
                                            {
                                                element.Name === UserName ? <p className="MyMessage">{element.Message} <span className="Date">{element.Date}</span></p> :  <p className="AnotherMessage">{element.Message} <span className="ADate">{element.Date}</span></p>
                                                
                                            }   
                                        </>
                                    })
                                }
                                </div>
                                <div className="Buttns">
                                    <form onSubmit={handleSendMessage}>
                                        <input type="text" autoComplete="off" id="textinput" onChange={(s)=>setMessage(s.target.value)} placeholder="Type your message"></input>
                                        <button type="submit"><i className="fas fa-location-arrow"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div> 
                 
                </div>
                
            
            

                </div>
            }    
        </div>  
    )
}

export default Chat;