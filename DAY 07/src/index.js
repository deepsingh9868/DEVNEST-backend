// const express = require('express');
// const path  = require('path');
// const app = express();
// const hbs = require('hbs');

// app.set("views", path.join(__dirname,"../templates"))
// app.set("view engine","hbs");
// hbs.registerPartials(path.join(__dirname,"../templates","partials"));
// // app.use(express.static(path.join(__dirname,'../public')));

// app.get('/', (req,res)=>{
//     res.render('index.hbs')
// })
// app.get('/', (req,res)=>{
//     res.send('hello world');
// })

// app.listen(8000, ()=>{
//     console.log("listening to port 8000");
// })

const express = require('express');
const path  =require('path');
const app = express();

app.get('/hello', (req,res)=>{
    let name  = "Guest";
    if(req.query.name) { name = req.query.name}
    res.send(`Good morning ${name}`);
})





app.use('/search',express.static(path.join(__dirname, '../public')));



app.listen(5000, ()=>{
    console.log("listening at port 5000");
})

