/**
 *  POST 0.0.0.0:3001/api/users/register
 * 
 * I need to intercept this
 */
const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/api/users/register" ,[authMW.verifyRegisterBody], authController.register )

    /**
     * route for
     *  POST 0.0.0.0:3001/api/users/login
     */

    app.post("/api/users/login",[authMW.verifyLoginBody], authController.login)
}

