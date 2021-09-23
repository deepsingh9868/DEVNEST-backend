
/**
 * check is username and email already exists
 * password hashing 
 * 
 *  
 */

//database stuff goes here and as well as in models

const User = require('../models/user');
const bcrypt = require('bcrypt');


const register = async(req,res) =>{
    const {username, email, password} = req.body;
    try{
        const alreadyExitsuser = await User.findOne({where : { username}});
        const alreadyExitsemail  = await User.findOne({where: {email}});
        if(alreadyExitsemail){
            res.status(401).send("Email already exists");
        }
        if(alreadyExitsuser){
            res.status(401).send("Username already exits");
        }
        //password
        const hashedpassword = await bcrypt.hash(password,10);
        const newUser = new User({email: email.toLower(), password: hashedpassword, username: "deepak"});
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);

    }catch{
        console.error(err);
        res.status(500).send("Something went wrong")

    }
}


module.exports =register;