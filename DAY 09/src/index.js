const express = require('express');
const  urlencoded  = require('express')
const path =require('path');
// const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

const {db, Users} = require('./db')

app.set("views", path.join(__dirname,"../views")) // because we change the  location of index.js file that's why 
app.set('view engine', 'hbs'); // to show hbs files on browser

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public'))); // to enable css on hbs files 


app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'random'
}))



// signup section
app.get('/signup', (req,res)=>{
    res.render('signup');
})

app.post('/signup', async(req,res)=>{
   // try{
        // const hashPassword = await bcrypt.hash(req.body.password,10);//second argumentis salt which handle the case of same user with same password
        const user = await Users.create({
            name: req.body.name,
            password: req.body.password //hashPassword
       })
        res.status(201).send(`User ${user.id} created`);
    //}
    // catch{
    //     res.status(500).send("Internal server error");
    // }
})




// login section
app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', async(req,res)=>{
    const user  = await Users.findOne({where: {name: req.body.name}})
    if(user==null){
        return res.status(404).send("User doesn't exits");
    }
    if(user.password!==req.body.password){
        return res.status(401).render('login', {error: 'Incorrect Password'})
    }
    req.session.userId =  user.id;
    res.redirect('/profile');
})




//profile section

app.get('/profile', async (req,res)=>{
    if(!req.session.userId){
        res.redirect('/login');
    }
    const user = await Users.findByPk(req.session.userId);
    res.render(('show_profile', {user}));
})



//logout

app.get('/logout', (req,res)=>{
    req.session.userId = null;
    res.redirect('/login');
})




db.sync()
   .then(()=>{
       app.listen('5000', ()=>{
           console.log('Listening to port 5000');
       })
   }).catch((err)=>{
       console.log(err);
   });

