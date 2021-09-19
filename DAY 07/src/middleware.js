const express = require('express');
const path = require('path');
const app  =express();

// middleware
// const m1 = (req,res,next)=>{
//     console.log("running middleware 1");
//     next();
// }
// const m2 = (req,res,next)=>{
//     console.log("running middleware 2");
//     next();
// }
// const m3 = (req,res,next)=>{
//     console.log("running middleware 3");
//     next();
// }

// app.get('/', m1, m2, m3, (req,res)=>{
//     res.send("running default");
// })



//Encoding
app.use('/encoding', express.static(path.join(__dirname,'../public')));
// app.get('/encoding', (req,res)=>{
//     res.send()
// })




app.listen(5000, ()=>{
    console.log("listening at port 5000");
})
