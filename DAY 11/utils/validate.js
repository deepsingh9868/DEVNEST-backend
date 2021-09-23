const email_checker = require('email-validator');
const password_validtor = require('password-validator');

const Checkemail = (email) =>{
    return email_checker.validate(email);
}

const Checkpassword = (password) =>{
    var schema = new password_validtor();
    schema
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(1)
    .has().not().spaces()

    return schema.validate(password);
}

module.exports = {Checkemail, Checkpassword}