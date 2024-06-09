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

exports.findTweetsByUserId = async (req, res) => {
    try {
        const userId = req.body.userId;
        const { cursor, limit = 10 } = req.query;

        // query
        let query = { userId };
        if (cursor) {
            query._id = { $lt: mongoose.Types.ObjectId(cursor) }; // Fetch tweets with IDs less than the cursor
        }

        const tweets = await tweet_model.find(query)
            .populate("userId", "username")
            .sort({ _id: -1 })
            .limit(Number(limit) + 1); // Fetch one more tweet to check if there are more results

        if (!tweets || tweets.length === 0) {
            return res.status(404).send({ message: 'No tweets found for this user' });
        }

        const hasNextPage = tweets.length > limit;
        if (hasNextPage) {
            tweets.pop(); // Remove the extra tweet used for the check
        }

        const nextCursor = hasNextPage ? tweets[tweets.length - 1]._id : null;

        return res.status(200).send({
            tweets,
            nextCursor,
            hasNextPage
        });
    } catch (error) {
        console.error('Error while finding tweets by userId:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}