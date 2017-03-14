'use strict';

const express = require('express');
const redis = require('redis');

const PORT = process.env.PORT || 8080;
console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
//      process.env.REDIS_PORT_6379_TCP_PORT,
//      process.env.REDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
let client = redis.createClient('6379', 'redis');

// App
const app = express();

app.get('/', function(req, res, next) {
  console.log('route /');
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send('views  ' + counter + ' times!');
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
