const bcrypt = require('bcrypt');
const saltRounds = 10;

function encriptarPassword(req) {
    let pwdUser = req.body.password;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(pwdUser, salt);
    pwdUser = hash;
    return pwdUser;

}

module.exports = encriptarPassword;