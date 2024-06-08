/**
 * Create a mw will check if the request body is proper and correct
 */
const mongoose = require("mongoose")

const verifyCreateTweetBody =  async (req, res, next)=>{

    try{

        const {userId, text} = req.body
        // Check for the userId
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({
                message : "Failed ! Invalid user ID"
            })
        }

        // Check for the text
        if(!text || typeof text !== "string" || text.trim() === ""){
            return res.status(400).send({
                message : "Failed ! Tweet is required"
            })
        }

        next()

    }catch(err){
        console.log("Error while validating the request object", err)
        res.status(500).send({
            message : "Error while validating the request body"
        })
    }
}


const verifyFindTweetBody =  async (req, res, next)=>{

    try{

        const {userId} = req.body
        // Check for the userId
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({
                message : "Failed ! Invalid user ID"
            })
        }

        next()

    }catch(err){
        console.log("Error while validating the request object", err)
        res.status(500).send({
            message : "Error while validating the request body"
        })
    }
}

module.exports = {
    verifyCreateTweetBody : verifyCreateTweetBody,
    verifyFindTweetBody : verifyFindTweetBody
}