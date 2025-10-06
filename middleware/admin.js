const {Admin} = require("../db/index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;  //deepsinha535@gmail.com.
    const password = req.headers.password;  //1234.

    Admin.findOne({   //need to find the users.
        username:username,
        password:password
    })

    .then(function(value){
        if(value){
            next(); //go to the next middleware.
        }else{
            res.status(403).send({
                msg:"Admin does not exist"
            })
        }
    })
}

module.exports = adminMiddleware;