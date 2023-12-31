require('dotenv').config();                                 // dotenv module 
const jwt = require('jsonwebtoken');                        // jsonwebtoken
const auth = (req, res, next)=>{
    try{
        let token = req.headers.authorization;              // set value of token in Headers for Authorization
            if(token){
                let student = jwt.verify(token, process.env.JWT_SECRET);            // verify token given in Headers
                // req.studentId = student.id;                      
                // console.log(student.id);                                         // Debugged either login id working properly?
            }else{
                return res.status(401).json({"Token Missing!": "Access Unauthorized !"});
            }
        next();             // next() used to forward if everything is ok
    }catch(error){
                res.status(404).json({"If Token Expires: Error":error});
                                                                        // Here if Token Expires Catch Block Works!
    }
}
module.exports ={
    auth                            // auth function exported and to be used in endpoints
}