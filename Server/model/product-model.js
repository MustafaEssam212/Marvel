const mongoose = require('mongoose');

const PrdocutSchema = mongoose.Schema({
    productname : {type: String, require: true},
    description : {type: String, require: true},
    price : {type: String, require: true},
    type : {type: String, require: true},
    thumbnail: {type: String, require: true},
    threepics: [],
    keywords: [],
    colors: [String, {require: true}],
    sizes: [String, {require: true}],
    comments: [],
    
});

module.exports = mongoose.model('Product', PrdocutSchema);