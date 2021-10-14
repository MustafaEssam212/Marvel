const mongoose = require('mongoose');

const ChatsSchema = mongoose.Schema({
    member : {type: String, require: true},
    messages : []
});


module.exports = mongoose.model('Chats', ChatsSchema);