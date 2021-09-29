// first make a database using sequelize
// then define the database structure
//now use here

const User= require('../models/user');
const bcrypt  = require('bcrypt');

const Register = async(req,res) =>{

    const {username, email, password} = req.body;
    try{
        const usernamealreadyExits = await User.findOne({where: {username}});
        const emailalreadyExits = await User.findOne({where: {email}});

        if(usernamealreadyExits){
            res.status(401).send("username already exits");
        }
        if(emailalreadyExits){
            res.status(401).send("email already exists");
        }

        const hashedpassword = bcrypt.hashSync(password, 10);
        console.log(hashedpassword);

        const newUser = new User({ username: username, email: email , password:hashedpassword});
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    
    }catch(err){
        console.log(err);
        res.status(500).send("Something went user");
    }
}

module.exports = Register;