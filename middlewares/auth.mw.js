/**
 * Create a mw will check if the request body is proper and correct
 */

const user_model = require("../models/user.model")
const jwt = require("jsonwebtoken")
const auth_config = require("../configs/auth.config")

const verifyRegisterBody =  async (req, res, next)=>{

    try{

        // Check for the name
        if(!req.body.username){
            return res.status(400).send({
                message : "Failed ! username was not provided in request body"
            })
        }

        // Check for the userId
        if(!req.body.password){
            return res.status(400).send({
                message : "Failed ! password was not provided in request body"
            })
        }

        // Check if the user with same username is already present
        const user = await user_model.findOne({username : req.body.username})

        if(user){
            return res.status(400).send({
                message : "Failed ! user with same username is already present"
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

const verifyLoginBody = (req, res, next)=>{

    if(!req.body.username){
        return res.status(400).send({
            message : "username is not provided"
        })
    }

    if(!req.body.password){
        return res.status(400).send({
            message : "password is not provided"
        })
    }
    next()
}

const verifyToken = (req, res, next)=>{
    // Check if the token is present in the header
    const token = req.headers['x-access-token']

    if(!token){
        return res.status(403).send({
            message : "No token found : UnAuthorized"
        })
    }

    // If it is the valid token
    jwt.verify(token, auth_config.secret, async (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message : "UnAuthorized !" 
            })
        }
        const user = await user_model.findOne({username : decoded.id}) 
        if(!user){
            return res.status(400).send({
                message : "UnAuthorized, this user for this token doesn't exist"
            })
        }
        // Set the user info in the req body
        req.user = user
     next()
    })
   // Then move to the next step
}

const verifyCreateTweetBody =  async (req, res, next)=>{

    try{

        const {userId, text} = req.body
        // Check for the userId
        if(!mongoose.Type.ObjectId.isValid(userId)){
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

        const {userId, text} = req.body
        // Check for the userId
        if(!mongoose.Type.ObjectId.isValid(userId)){
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
    verifyRegisterBody : verifyRegisterBody,
    verifyLoginBody : verifyLoginBody,
    verifyToken : verifyToken,
    verifyCreateTweetBody : verifyCreateTweetBody,
    verifyFindTweetBody : verifyFindTweetBody
}