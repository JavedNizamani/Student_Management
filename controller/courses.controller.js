const db = require('../Models/index');                                      // import Models
const {validationResult} = require('express-validator');                    // Module for Data Sanitization
const Course = db.Courses;                                                  // Course Model
const Student = db.Students;                                                // Student Model

const addCourse = async(req, res)=>{
    try{
        const errors = validationResult(req);                               // Sanitizing course entries
        if(!errors.isEmpty()){
            res.status(404).json({Msg: errors});
            return 
        }
            const {courseName, credits, subjects} = req.body                     // Add Course into Database
            await Course.create({
            courseName: courseName,
            credits: credits,
            subjects: subjects
        }).then(()=>{
            return res.status(201).json({"Course": 'Successfully Saved'});
        });
    }catch(error){
        res.status(404).json({"Error": `${error}`});
    }   
}

const getCourseById = async(req, res)=>{
    try{
            await Course.findOne({                                          // find course by id
            where:{
                id: req.params.courseID
            },
            attributes: ['courseName','credits','subjects']
        }).then((result)=>{
            return res.status(200).json({"Single Course": result});
        });
    }catch(error){
        res.status(404).json({"Error": `${error}`});
    }
}

const getCourseByStudentId = async(req, res)=>{         // Enter student id and get all courses allotted to that student
    try{
        const id = req.params.StudentID;
            await Student.findOne({
            where:{
                id: id
            },
            attributes: ['firstName','lastName','phoneNumber'],
            include:[{model: Course,
                attributes:['courseName','credits','subjects']
            }]
        }).then((data)=>{
            return res.status(200).json({"Course by Student": data});
        });
    }catch(error){
            return res.status(404).json({"Error": `${error}`});
    }
}

const getAllCourses = async(req, res)=>{                        // find all course in database
    try{
            await Course.findAll({attributes:['courseName','credits','subjects']}).then((result)=>{
            return res.status(200).json({"List of All Courses": result});
            });
    }catch(error){
            res.status(404).json({"Error":error});
    }
}
module.exports = {
    addCourse,
    getCourseById,
    getCourseByStudentId,
    getAllCourses
                        // All functions exported for Routing
}