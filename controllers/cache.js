// require ('newrelic');
var redis = require("redis")
var REDIS_PORT = process.env.REDISCLOUD_URL || process.env.REDIS_PORT;
var client = redis.createClient(REDIS_PORT);

client.on("error", function (err, res) {
    console.log("Error " + err);
    console.log(res)

});


// TODO: Fix
module.exports.set = async (req, res, next) => {
  var key= req.body.params['cacheKey']
  var value= req.body.params['cacheData']
  client.set(key, value, function(err, data){
    if(err) {
      res.send(err)
      next();
    } else {
      res.json({key: JSON.stringify(value)})
      console.log("set")
    }
  })
};
// TODO: test deleteting when key is valid
module.exports.delete=async(req, res, next) => {
  var key= req.params.key
  client.del(key, function(err, response) {
    if (response == 1) {
      console.log("Succesful")
      res.redirect("/")
    } else{
      console.log("Unsuccesful")
      res.redirect("/")
    }
  });
}

// TODO: find out returning the data in response
module.exports.get=async (req, res, next)=> {
  var key= req.params.key
  client.get(key, function (err, data) {
    if(err) {
      res.send(err)
    } else if(data==null) {
      console.log("Not Exists")
      res.json(null)
      // next()
    } else {
      console.log("Exists")
      res.json(JSON.parse(JSON.stringify(data)))
      // next()
    }
  })
}
