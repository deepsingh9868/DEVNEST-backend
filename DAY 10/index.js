const express = require('express');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, "views")); // first define the path of the views folder
app.set('view engine', 'hbs'); // then use it 


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'public','index.html'));
    // res.render('index', {title: 'handlebars'});
    res
        .status(201)
        .cookie("token", "token", {
            expire: new Date(Date.now() + 4 * 360000)
        })
        .cookie("test", "Test")

        .redirect(301, '/admin')
})


app.listen(5000, () => {
    console.log(`Listening to http://localhost:5000`);
})