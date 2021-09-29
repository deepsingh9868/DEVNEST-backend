const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    // "postgres",
    // "postgres",
    // "134523",
    {
        host: "localhost",
        dialect : "sqlite"
    }
);

sequelize.sync();

(async()=>{
        try{
            await sequelize.authenticate();
            console.log("Connection established with database");

        }catch(err) {
            console.log("Unable to connect to database");
        }
})();


module.exports = sequelize;