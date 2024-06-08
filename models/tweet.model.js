const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
        required: true
    },

    cretedAt: {
        type: Date,
        default: Date.now
    }
},{versionKey: false})

module.exports = mongoose.model("Twitter", tweetSchema)
