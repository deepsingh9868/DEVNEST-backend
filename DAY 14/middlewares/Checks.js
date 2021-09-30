
const {checkusername, checkemail,checkpassword} = require('../utils/Validetails');


const Checks = (req,res,next) =>{
    const {username, email, password, confirmpassword} = req.body;
    if(checkusername(username) && checkemail(email) && checkpassword(password) && password==confirmpassword){
        next();
    }
    else{
        res.status(401).send("Invalid credentials");
    }
}

module.exports = Checks;