/**
 * email validation check
 * password check
 * confirm password check 
 */
const {Checkemail, Checkpassword} = require('../utils/validate');

const registerInitialCheck = (req,res, next)=>{
    const {username, email, password,confirmpassword} = req.body;
    if(Checkemail(email) && Checkpassword(password) && confirmpassword===password){
        next();
    }else{
        res.status(401).send("Invalid details");
    }
}


module.exports = registerInitialCheck;