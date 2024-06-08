const bcrypt = require("bcryptjs")
const user_model = require("../models/user.model")
const jwt = require("jsonwebtoken")
const secret = require("../configs/auth.config")

exports.register = async (req, res)=>{
    /**
     * Logic to create the user
     */

    // 1. Read the request body 
    const request_body = req.body // it is int the form of javaScript object


    // 2. Insert the data in the User collection in MongoDB
    const userObj = {
        username : request_body.username,
        password : bcrypt.hashSync(request_body.password, 8)
    }

    // 3. Return the response back to the user
    try{
        
        const user_created = await user_model.create(userObj)
        /**
         * Return this user
         */

        res.status(201).send(user_created)

    }catch(err){
        console.log("Error while registering the user", err)
        res.status(500).send({
            message : "Some error happend while registering the user"
        })
    }  
}

exports.login = async (req, res)=>{

    // Check if the user id is present in the system
    const user = await user_model.findOne({username : req.body.username})

    if(user == null){
        return res.status(400).send({
            message : "username passed is not a valid username"
        })
    }

    // Password is correct
    const isPasswordValid =  bcrypt.compareSync(req.body.password, user.password)

    if(!isPasswordValid){
        return res.status(401).send({
            message : "Wrong password passed"
        })
    }

    // using jwt we will create the access token with a given TTL and return 
    const token = jwt.sign({id : user.username}, secret.secret, {expiresIn : 1800})

    res.status(200).send({
        username : user.username,
        accessToken : token
    })

}