const db = require('../Models/index');
var dbGetAll = db.Students;
const {validationResult} = require('express-validator');    // Express Validator module for Data Sanitization
const bcrypt = require('bcrypt');

const getAllStudents = async(req, res)=>{
    try{
            await dbGetAll.findAll({
                // function to get data from Database
            attributes: ['firstName','lastName','phoneNumber','email']
            }).then((result)=>{
            return res.status(200).json({"List of All Students": result});
            });
    }catch(error){
        // Error in try Block will catch here
        return res.status(404).json({Msg: `Error: ${error}`});
    }
}
const getStudentById = async(req, res)=>{
    try{
        await dbGetAll.findOne({
            // Find Id in Database to get Student Data
            where:{
                id: req.params.studentID
            },
            attributes:['firstName','lastName','phoneNumber','email']
        }).then((result)=>{
            return res.status(200).json({
                "Single Student" : result
            });
        });
    }catch(error){
        // Error in try Block will catch here
        return res.status(404).json({Msg: `Error : ${error}`});
    }
}

const updateStudentsById = async(req, res)=>{
    try{
        const errors = validationResult(req);           // Sanitizer used before updating                                   
        if(!errors.isEmpty()){                          // Sanitizing Errors catched here                           
            res.status(404).json({Message: errors});
            return;
        }
        const {firstName, lastName, phoneNumber, email, userName, password, confirmPassword} = req.body;
            await dbGetAll.update({
                // Update Data by their respective values
                firstName: firstName,
                lastName: lastName,
                phoneNumber:phoneNumber,
                email: email,
                userName: userName,
                password: await bcrypt.hash(password, 5),
                confirmPassword: await bcrypt.hash(confirmPassword, 5)
            },{
            where:{
                // Get Id to upadate Student
                id: req.params.studentID
                }
            }).then(()=>{
                return res.status(201).json({"Student": "Successfully Updated"});
            }); 
    }catch(error){
        // Error in try Block will catch here
        return res.status(404).json({Msg: `Error: ${error}`});
    }
}
const deleteStudentById = async(req, res)=>{
    try{
        await dbGetAll.destroy({
            // Delete Student in Database by respective Id
            where:{
                id: req.params.studentID
            }
        }).then(()=>{
            res.status(400).json({"Student": "Successfully Deleted"});
        });
    }catch(error){
        // Error in try Block will catch here
        return res.status(404).json({Msg: `Error: ${error}`})
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    updateStudentsById,
    deleteStudentById
                // All of these function exported for Routing
}