const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const homeRoute = require('./routes/home')

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/signup', (req, res) => {
//     console.log('hello')
// })

app.use( userRoute );
app.use( homeRoute );

mongoose
    .connect('mongodb+srv://Loc_nguyen:mDEMfSQT_Dr5est@cluster0.xrlivxz.mongodb.net/asm02?retryWrites=true&w=majority')
    .then(result => {
        // console.log(result);
        app.listen(5001);
    })
    .catch(err => {
        console.log(err)
    })

