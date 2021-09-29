const email_validator= require('email-validator');
const password_validator = require('password-validator');
var schema = new password_validator();

const checkusername = (username)  =>{
    schema
    .is().min(5)
    .is().max(30)
    .has().lowercase()

    console.log(schema.validate(username));
    return schema.validate(username);

}

const checkemail = (email)=>{
    console.log(email_validator.validate(email));
    return email_validator.validate(email);
}


const checkpassword = (password) =>{
    schema
    .is().min(5)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces() 
    
    console.log(schema.validate(password));
    return schema.validate(password);
}

module.exports = {checkusername, checkemail, checkpassword}