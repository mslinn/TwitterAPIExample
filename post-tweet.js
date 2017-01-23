var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var tweet = {
  status: 'Test tweet'
}

T.post('statuses/update', tweet, function tweeted(err, data, response) {
  if (err)
    console.log("Error: " + err);
  else
    console.log(data);
});
