require('dotenv').config();                 // environment variables module
const bcrypt = require('bcrypt');           // bcrypt module for password Hashings          
const jwt = require('jsonwebtoken');        // JWT - Web Token module
const db = require('../Models/index');
var RegisterStudents = db.Students;
// Students Model from Models Folder
require('../Middleware/verifyRegisteredStudent'); 
// function built to Verify Students before sending into Database
const {validationResult} = require('express-validator');    // Express Validator module for Data Sanitization


const registerStudents = async (req, res)=>{
                // This Function Registers Students || Putting students data into Database
    try{
        const errors = validationResult(req);
        // express-validator is used to Sanitize requests before sending them into database       
        if(!errors.isEmpty()){
            // Sanitizing Errors catched here
            res.status(404).json({Message: errors});
            return;
        }
        const {firstName, lastName, phoneNumber, email, userName, password, confirmPassword} = req.body;
        await RegisterStudents.create({
                    // function used to insert data into database 
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            userName: userName,
            password: await bcrypt.hash(password, 5),
            confirmPassword: await bcrypt.hash(confirmPassword, 5)
        }).then(()=>{
            res.status(201).json({Message: `Registration Successful`});
        })
    }catch(error){
        // Error in try Block will catch here
        res.status(404).json({"404":`Error: ${error}`});
    }
}

const login = async(req, res)=>{
            // This Function is built for Login
    try{
        const email = req.body.email;
        if(email){                  
            // Check Email in request body
            // Note : User Login is built Here in two ways by checking Eamil in body or by userName
            const student = await RegisterStudents.findOne({
                // Finds email in Database!
                where:{email: req.body.email}
            });
                if(!(student)){
                    // If Email Do not match the email in database
                    return res.status(404).json({Message: `Incorrect email- ${email}`});
                }
           const passwordCheck = await bcrypt.compare(req.body.password, student.password)
                    // bcrypt module Used Here for Password Hash
                if(!passwordCheck){
                    return res.status(404).json({Message: "Incorrect Password"})
                }else{
                    const token = jwt.sign({id: student.id, userName: student.userName},process.env.JWT_SECRET);
                    res.status(200).json({
                        accessToken: token
                    });
                }
        }else{
            const userName = req.body.userName;
            const student = await RegisterStudents.findOne({
                // Finds userName in Database 
                where:{userName: userName}
            });
            if(!(student)){
                // If userName do not match the userName in Database
                return res.status(404).json({Message: `Wrong User- ${userName}`});
            }
       const passCheck = await bcrypt.compare(req.body.password, student.password)
            if(!passCheck){
                return res.status(404).json({Message: "Incorrect Password"})
            }else{
                const token = jwt.sign({id: student.id, userName: student.userName},process.env.JWT_SECRET);
                res.status(200).json({
                    accessToken: token
                });
            }
        }      
    }catch(error){
        // Error in try Block will catch here
        res.status(404).json({Msg: `Error ${error}`});
    }
}

module.exports = {
    registerStudents,           
    login,
            // Both functions exported for routing
}