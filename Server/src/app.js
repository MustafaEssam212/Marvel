const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')
const passport = require('passport')
const app = express();
const v1 = require('../routes/v1')
const p1 = require('../routes/p1')
const o1 = require('../routes/o1')
const c1 = require('../routes/c1')




//--------- DB Config --------//

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

    mongoose.connection.on('connected', ()=>{
        console.log('Connected to Database')
    });
    mongoose.connection.on('error', (err)=>{
        console.log('Failed to Connect to Database')
    });
    

// -------- Middlewares -------- //

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('../config/passport')(passport);
app.use(express.static(__dirname));


// -------- Routes -------- //

app.use('/api/v1', v1);
app.use('/api/p1', p1);
app.use('/api/o1', o1);
app.use('/api/c1', c1);

module.exports = app;