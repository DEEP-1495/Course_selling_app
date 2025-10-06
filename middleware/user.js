const {User} = require("../db/index");
    
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

     const username = req.headers.username;  //deepsinha535@gmail.com.
    const password = req.headers.password;  //1234.

    User.findOne({   //need to find the users.
        username:username,
        password:password
    })

    .then(function(value){
        if(value){
            next(); //go to the next middleware.
        }else{
            res.status(403).send({
                msg:"user does not exist"
            })
        }
    })
}

module.exports = userMiddleware;