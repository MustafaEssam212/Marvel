const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    ProductName : {type: String, require: true},
    Size : {type: String, require: true},
    Quantity : {type: String, require: true},
    Color : {type: String, require: true},
    Seen: {type: String, require: true},
    Status: {type: String, require: true},
    Name: {type: String, require: true},
    UserEmail: {type: String, require: true},
    Price: {type: String, require: true},
    Mobile: {type: String, require: true},
    SecondMobile: {type: String},
    Address: {type: String, require: true},
    City: {type: String, require: true},
    Date: {type: String, require: true},
});

module.exports = mongoose.model('Orders', OrderSchema);