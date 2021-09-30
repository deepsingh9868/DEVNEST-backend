const {Sequelize} = require('sequelize');
const {
    sequelize_dialect,
    sequelize_host,
}  = require('../config/index');

const sequelize = new Sequelize(
    // "postgres",
    // "postgres",
    // "134523",
    {
        host: sequelize_host,
        dialect : sequelize_dialect,
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