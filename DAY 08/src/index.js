const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const users = [];

app.get('/users',  (req,res)=>{
    res.json(users);
})


app.post('/users', async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(); // handle user with same password  then its'going to add a a unique hash in front of the password makes it hard to exploit by hackers
        const hashPassword = await bcrypt.hash(req.body.password,10);
        console.log(salt);
        console.log(hashPassword);
        
        const user = {name: req.body.name, password: hashPassword}
        users.push(user);
        res.status(201).send();      
    }
    catch{
        res.status(500).send("Internal server error");
    }
})


app.post('/users/login',async (req,res)=>{
    const user = users.find(user => user.name==req.body.name);
    if(user==null){
        return res.status(400).send("User doesn't exits");
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send("Success");
        }
        else{
            res.send("Wrong password");
        }
    }
    catch{
        res.send(500).send("Internal server error");
    }
})


app.listen('5000', ()=>{
    console.log("Listening to port 5000");
})