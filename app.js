const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');
const hotelRoute = require('./routes/hotel');
const roomRoute = require('./routes/room');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use('/', (req, res, next) => {
//     res.send('<p>Hello</p>')
// })

app.use( userRoute );  
app.use( hotelRoute );
app.use( roomRoute );

mongoose
    .connect('mongodb+srv://Loc_nguyen:mDEMfSQT_Dr5est@cluster0.xrlivxz.mongodb.net/asm02?retryWrites=true&w=majority')
    .then(result => {
        // console.log(result);
        app.listen(5001);
    })
    .catch(err => {
        console.log(err)
    })

