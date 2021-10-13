const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", () => {
  console.error("Couldn't connect to Redis");
});

redisClient.on("connect", () => console.log("Connected to Redis"));

module.exports = {
  redisClient,
  RedisStore,
  session,
};
