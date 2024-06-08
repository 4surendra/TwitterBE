const express = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")
const user_model = require("./models/user.model")
const bcrypt = require("bcryptjs")

app.use(express.json())



// Connection with mongodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log("Error while connecting to the mongoDB")
})

db.once("open", ()=>{
    console.log("Connected to MongoDB")
})

/**
 * Stich the route to the server
 */

require("./routes/auth.rout")(app)
require("./routes/tweet.rout")(app)

/**
 * Start the server
 */
app.listen(server_config.PORT, ()=>{
    console.log("Server started at port num : ", server_config.PORT)
})

