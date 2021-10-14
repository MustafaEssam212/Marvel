const mongoose = require('mongoose')
const Chats = require('../model/chat-model')
const ChatController = {};
const moment = require('moment');

ChatController.CheckChat = (req, res, next) =>{
    
    const Email = req.body.Email;
    Chats.find({member: {$in : [Email]}}, (err, result) =>{
        if(result){
            res.send({
                message: 'There is a Chat'
            })
        }else{
            res.send({
                message: 'No Chat'
            })
        }
    })
}

ChatController.SendMessage = (req, res, next) => {
    const Message = req.body.Message;
    const Name = req.body.UserName;
    const Date = moment().calendar(); 
    const Email = req.body.Email;
   
    const message = {
        Name,
        Message,
        Date
    }
    Chats.updateOne({member: Email}, {$push : {messages: message}}, (err, result)=>{
        if(result){
            res.send('Done')
        }else{
            res.send(err)
        }
    })

}


ChatController.GetChats = (req, res, next) => {
    var arr = []
   Chats.find((err, result)=>{
       if(result){
           
           result.map((item)=>{
            if(item.messages.length > 0){
                arr.push(item)
            }
           })
           setTimeout(()=>{
               arr.reverse()
            res.send(arr)
           }, 500)
       }else{
           res.send(err)
       }
   })
}

ChatController.FindSpecificChat = (req, res, next) => {
    const ChatMember = req.body.ChatMember;
    Chats.findOne({member: ChatMember}, {_id: false, messages: true}, (err, result)=>{
        if(result){
            res.send(result.messages)
        }else{
            res.send(err)
        }
    })
}

ChatController.SendMarvelMessage = (req, res, next) => {
    const Member = req.body.ChatMember;
    const Name = req.body.MyName;
    const Message = req.body.Message;
    const Date = moment().calendar(); 
    const message = {
        Name,
        Message,
        Date
    }
    Chats.updateOne({member: Member}, {$push: {messages: message}}, (err, result)=>{
        if(result){
            res.send('Done')
        }else{
            res.send(err)
        }
    })
}


ChatController.GetMyChat = (req, res, next) => {
    const Member = req.body.Email;
    Chats.findOne({member: Member}, {_id: false, messages: true}, (err, result)=>{
        if(result){
            res.send(result.messages)
        }else{
            res.send(err)
        }
    })
}

module.exports = ChatController;