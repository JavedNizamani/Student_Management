const db = require('../Models/index');                              // imort Models
var dbGetAll = db.Students;                                         // import Students Model
const {validationResult} = require('express-validator');            // module for Data Sanitization
const bcrypt = require('bcrypt');                                   // module for password hash

const getAllStudents = async(req, res)=>{                           // show all students from database
    try{
            await dbGetAll.findAll({
            attributes: ['firstName','lastName','phoneNumber','email']
            }).then((result)=>{
            return res.status(200).json({"List of All Students": result});
            });
    }catch(error){
        return res.status(404).json({Msg: `Error: ${error}`});
    }
}
const getStudentById = async(req, res)=>{                           // show single student
    try{
        await dbGetAll.findOne({
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
        return res.status(404).json({Msg: `Error : ${error}`});
    }
}

const updateStudentsById = async(req, res)=>{           // update sindle student
    try{
        const errors = validationResult(req);           // Sanitizer used before updating                                   
        if(!errors.isEmpty()){                                                     
            res.status(404).json({Message: errors});
            return;
        }
        const {firstName, lastName, phoneNumber, email, userName, password, confirmPassword} = req.body;
            await dbGetAll.update({
                firstName: firstName,
                lastName: lastName,
                phoneNumber:phoneNumber,
                email: email,
                userName: userName,
                password: await bcrypt.hash(password, 5),
                confirmPassword: await bcrypt.hash(confirmPassword, 5)
            },{
            where:{
                id: req.params.studentID
                }
            }).then(()=>{
                return res.status(201).json({"Student": "Successfully Updated"});
            }); 
    }catch(error){
                return res.status(404).json({Msg: `Error: ${error}`});
    }
}
const deleteStudentById = async(req, res)=>{                    // delete single student
    try{

            const studentExists = await dbGetAll.findOne({          // find either students exists or not
                where:{
                    id: req.params.studentID
                }
            });

            if(studentExists){
                await dbGetAll.destroy({
                    where:{
                        id: req.params.studentID
                    }
                }).then(()=>{
                    res.status(400).json({"Student": "Successfully Deleted"});
                });
            }else{
                return res.status(404).json({'Student':'Not Found'});
            }
    }catch(error){
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