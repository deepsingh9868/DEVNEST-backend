const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, default: " "},
    email: {type: String, default: " "},
    password: {type: String, default: " "},
});

module.exports = User = mongoose.mode('User', UserSchema);