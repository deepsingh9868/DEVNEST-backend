const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session"); //middleware

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", function (err) {
  console.error("could not connect to redis", err);
});

redisClient.on("connect", function () {
  console.log("connect to redis");
});

module.exports = {
  redisClient,
  RedisStore,
  session,
};
