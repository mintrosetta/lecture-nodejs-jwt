const User = require('../models/user');

function viewSignUp(req, res) {
    res.render('signup');
}

function viewLogin(req, res) {
    res.render('login');
}

async function signUp(req, res) {
    const { email, password } = req.body;
    
    try {
        const user = await User.create({
            email: email,
            password: password
        });

        res.status(201).json(user);
    } catch (e) {
        console.log(e);

        res.status(400).send('user not created!');
    }
}

async function login(req, res) {
    res.send('user login');
}


module.exports = {
    viewSignUp,
    viewLogin,
    signUp,
    login
}

// https://www.youtube.com/watch?v=nukNITdis9g&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&index=5