require('dotenv').config();                                             // environment variables module
const bcrypt = require('bcrypt');                                       // bcrypt module for password Hashings          
const jwt = require('jsonwebtoken');                                    // JWT - Web Token module
const db = require('../Models/index');
var RegisterStudents = db.Students;                                     // Students Model from Models Folder                                                          
require('../Middleware/verifyRegisteredStudent'); 
const {validationResult} = require('express-validator');    // Express Validator module for Data Sanitization


const registerStudents = async (req, res)=>{                // Insert students in database after validataion and sanitization
    try{
        const errors = validationResult(req);                                 
        if(!errors.isEmpty()){  
            res.status(404).json({Message: errors});
            return;
        }
        const {firstName, lastName, phoneNumber, email, userName, password, confirmPassword} = req.body;
        await RegisterStudents.create({ 
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
        res.status(404).json({"404":`Error: ${error}`});
    }
}

const login = async(req, res)=>{
    try{
        const email = req.body.email;
        if(email){                      // Email Check   
                                        // Note : User Login is built Here in two ways by checking Eamil in body or by userName
            const student = await RegisterStudents.findOne({
                where:{email: req.body.email}
            });
                if(!(student)){
                    return res.status(404).json({Message: `Incorrect email- ${email}`});
                }
                    const passwordCheck = await bcrypt.compare(req.body.password, student.password)
                    // bcrypt module Used Here for Password Hash
                if(!passwordCheck){
                    return res.status(404).json({Message: "Incorrect Password"})
                }else{
                    const token = jwt.sign({id: student.id, userName: student.userName},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRATION});
                    res.status(200).json({
                        accessToken: token
                    });
                }
        }else{                          // userName check
            const userName = req.body.userName;
            const student = await RegisterStudents.findOne({ 
                where:{userName: userName}
            });
            if(!(student)){
                return res.status(404).json({Message: `Wrong User- ${userName}`});
            }
                const passCheck = await bcrypt.compare(req.body.password, student.password)
            if(!passCheck){
                return res.status(404).json({Message: "Incorrect Password"})
            }else{
                const token = jwt.sign({id: student.id, userName: student.userName},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRATION});
                res.status(200).json({
                    accessToken: token
                });
            }
        }      
    }catch(error){
            res.status(404).json({Msg: `Error ${error}`});
    }
}

module.exports = {
    registerStudents,           
    login,
            // Both functions exported for routing
}