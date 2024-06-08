const tweet_model = require("../models/tweet.model")


exports.createNewTweet = async (req, res)=>{

    // Read the req body
    // Create the tweet object
    const tweet_data = {
        userId : req.body.userId,
        text : req.body.text,
    }

    try{
        // Insert into mongodb
    const tweet =  await tweet_model.create(tweet_data)
    return res.status(201).send(tweet)
    }catch(err){
        console.log("Error while creating the tweet", err)
        res.status(500).send({
            message : "Error while creating the tweet"
        })
    }

}

exports.findTweetsByUserId = async (req, res)=>{
    try{
        const userId = req.body.userId
        
        const tweets = await tweet_model.find({userId}).populate("userId", "username").sort({createdAT: -1})

        if (!tweets || tweets.length === 0) {
            return res.status(404).send({ message: 'No tweets found for this user' });
        }

    }catch (error) {
        console.error('Error while finding tweets by userId:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
