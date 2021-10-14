import React, {useState, useEffect, useContext} from "react";
import '../Styles/Chat.css'
import axios from 'axios';
import {UserContext} from './User-Context'
import {Link, useHistory} from 'react-router-dom'


function ChatRoom(){
    const [Contacts, setContacts] = useState([]);
    const [ChatMember, setChatMember] = useState('')
    const [Message, setMessage] = useState('');
    const [Messages, setMessages] = useState([]);
    const UsContext = useContext(UserContext);
    const MyName = UsContext.User.firstname + ' ' + UsContext.User.lastname;
    const history = useHistory();
    const [vari, setVari] = useState(Math.random());
    let _ = require('underscore');
    



    function handleSendMarvelMessage(s){
        s.preventDefault();
        axios.post('http://localhost:5000/api/c1/sendmarvelmessage', {ChatMember, MyName, Message})
        .then(res => setVari(Math.random()))
        document.getElementById('textinput').value = ''
        
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/c1/getchats')
        .then(res => setContacts(res.data))
        window.scrollTo(0, 0)
       
    }, [])

  
    useEffect(()=>{
        const Scrolled = document.getElementById('MessagesId');
        if(!Scrolled){
            return
        }else{
            Scrolled.scrollTop = Scrolled.scrollHeight;
        }
    })
    
    
    useEffect(()=>{
        axios.post('http://localhost:5000/api/c1/findspecificchat', {ChatMember})
        .then(res => setMessages(res.data))
    }, [ChatMember])

    useEffect(()=>{
        axios.post('http://localhost:5000/api/c1/findspecificchat', {ChatMember})
        .then(res => setMessages(res.data))
    }, [vari])

    const [Time, setTime] = useState(true);

    setTimeout(()=>{
        setTime(!Time)
    }, 30000)

    useEffect(()=>{
        axios.post('http://localhost:5000/api/c1/findspecificchat', {ChatMember})
        .then(res => setMessages(res.data))
    }, [Time])

            
    return(

        <div className="ChatRoomContainer">

                <div className="Contacts">
                
                    {
                        Contacts.map((item)=>{
                            return <div className="DivOfContacts">
                                <span className="Clicka" onClick={()=> {setChatMember(item.member)}}>
                                <p className="letter">{item.member.charAt(0).toUpperCase()}</p>
                                <p className="Contact">{item.member}</p>
                                <p className="lastmessage">{_.last(item.messages).Message.length > 15 ? <span>{ '... ' + _.last(item.messages).Message.slice(0, 15)}</span> : <span>{_.last(item.messages).Message.slice(0, 15)}</span>}</p>
                                </span>
                                <hr></hr>
                            </div>
                        })
                    }

                </div>

                <div className="ExistChat">

                    {
                        ChatMember === "" ? <div></div> :  <div className="OldChatContainer">
                        <div className="OldChat">
                            <div id="MessagesContainer">
                            {
                                Messages.length === 0 ? <div></div> : <div  className="Messages" id="MessagesId">
                                    {
                                    Messages.map((element)=>{
                                        return <>
                                            {
                                                element.Name === MyName ? <p className="MyMessage">{element.Message} <span className="Date">{element.Date}</span></p> :  <p className="AnotherMessage">{element.Message} <span className="ADate">{element.Date}</span></p>
                                                
                                            }   
                                        </>
                                    })
                                }
                                </div>
                            }
                                
                            </div>
                            <div className="Buttns">
                                <form onSubmit={handleSendMarvelMessage}>
                                    <input type="text" autoComplete="off" id="textinput" onChange={(s)=>setMessage(s.target.value)} placeholder="Type your message"></input>
                                    <button type="submit"><i className="fas fa-location-arrow"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> 

                    }

                </div>
        </div>

    )
}

export default ChatRoom;