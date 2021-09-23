const {DataTypes} = require('sequelize');
const sequelize = require('../database');

// this define how our database should look like
const User = sequelize.define('User', { // table name is User
    username: {
        type: DataTypes.STRING,
        allowNull: false //database level checks
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports  = User;