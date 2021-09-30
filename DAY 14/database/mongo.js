var mongoose = require('mongoose');

var mongodb = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongodb,{useNewUrlParse: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console,"Mongodb connection erro"));