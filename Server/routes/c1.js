const express = require('express');
const crouter = express.Router();
const ChatController = require('../controller/chat-controller');

crouter.post('/checkchat', ChatController.CheckChat)
crouter.post('/sendmessage', ChatController.SendMessage)
crouter.get('/getchats', ChatController.GetChats)
crouter.post('/findspecificchat', ChatController.FindSpecificChat)
crouter.post('/sendmarvelmessage', ChatController.SendMarvelMessage)
crouter.post('/getmychat', ChatController.GetMyChat)

module.exports = crouter;