const Tweet = require("../models/Tweet");
module.exports = {
  async index(req, res) {
    let tweets = await Tweet.find().sort("-createdAt");
    return res.json(tweets);
  },
  async store(req, res) {
    let tweet = await Tweet.create(req.body);
    req.io.emit("tweet", tweet);
    return res.json(tweet);
  }
};
