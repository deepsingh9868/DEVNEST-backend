const redis = require('redis');
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
    host: "localhost",
    port: 6379
});


redisClient.on('error', function(err){
    console.error("Couldn't connect to redis");
})

redisClient.on('connect', function(){
    console.log("connected to redis");
})

module.exports = {
    redisClient,
    RedisStore,
    session
}