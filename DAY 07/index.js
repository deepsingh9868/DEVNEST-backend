const express = require('express');
const app   = express()


// app.get('/', (req,res) =>{
//     res.send("You are in the home page");
// })

// app.get('/about', (req,res) =>{
//     res.send("You are in the about page");
// })


const slash = (req,res) =>{
    res.send("content");
}

app.get('/',slash);
app.get('/about',slash);

app.listen(5000);