function viewSignUp(req, res) {
    res.render('signup');
}

function viewLogin(req, res) {
    res.render('login');
}

function signUp(req, res) {
    res.send('new signup');
}

function login(req, res) {
    res.send('user login');
}


module.exports = {
    viewSignUp,
    viewLogin,
    signUp,
    login
}