const User = require('../models/user')

exports.handleLogin = (req, res ,next) => {
    console.log(req.body)
    const { email, password } = req.body
    User.findOne( { email: email, password: password} )

    .then( user => {
        if(user) {
            console.log('thanh cong');
            req.user = user ;
            res.json( user );
        } else {
            console.log('that bai')
            res.statusMessage = 'Khong dung email hay password';
            res.status(401).end();
        }
    } )
    .catch(err => {
        console.log(err);
    })
}

exports.handleSignup = (req, res, next ) => {
    console.log(req.body);
    const newuser = new User ({
        username : req.body.username,
        password: req.body.password,
        fullName:req.body.fullname,
        phoneNumber: req.body.phonenumber,
        email: req.body.email,
        isAdmin: false
    })
    newuser.save()
    .then(result => {
        console.log('Added 1 user!')
    })
    .catch(err => {
        console.log(err)
    })
}