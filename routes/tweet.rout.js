const tweet_controller = require("../controllers/tweet.controller")
auth_mw = require("../middlewares/auth.mw")
tweet_mw = require("../middlewares/tweet.mw")

module.exports = (app)=>{
    app.post("/api/tweets", [tweet_mw.verifyCreateTweetBody ,auth_mw.verifyToken], tweet_controller.createNewTweet)

    app.get("/api/users/:userId/timeline", [tweet_mw.verifyFindTweetBody, auth_mw.verifyToken], tweet_controller.findTweetsByUserId)
}