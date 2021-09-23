const Sequelize = require('sequelize');

const sequelize  = new Sequelize(
    "sqlite",
    "sqlite",
    "deepaksingh",
    {
        host: "localhost",
        dialect: "sqlite",

    }
);

sequelize.sync();
(async() =>{
    try{
        await sequelize.authenticate();
        console.log("Connection established with DB");
    }catch{
        console.error("Unalbe to connect to database");
    }
})


module.exports = sequelize;

