const db = require('../Models/index');
const {validationResult} = require('express-validator');
const Course = db.Courses;
const Student = db.Students;

const addCourse = async(req, res)=>{
    try{
        const errors = validationResult(req);
            // Sanitizing/Validating Data related to course
        if(!errors.isEmpty()){
            res.status(404).json({Msg: errors});
            return 
        }

        const {courseName, credits, subjects} = req.body
        await Course.create({
            // Add Course into Database
            courseName: courseName,
            credits: credits,
            subjects: subjects
        }).then(()=>{
            return res.status(201).json({"Course": 'Successfully Saved'});
        });
    }catch(error){
        // Error in try Block will catch here
        res.status(404).json({"Error": `${error}`});
    }   
}

const getCourseById = async(req, res)=>{
    try{
        await Course.findOne({
            // Find Course by Id and shown by their attributes
            where:{
                id: req.params.courseID
            },
            attributes: ['courseName','credits','subjects']
        }).then((result)=>{
            return res.status(200).json({"Single Course": result});
        });
    }catch(error){
        // Error in try Block will catch here
        res.status(404).json({"Error": `${error}`});
    }
}

const getCourseByStudentId = async(req, res)=>{
    try{
        const id = req.params.StudentID;
            await Student.findOne({
                // find student id and get all courses allotted to that student
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
        // Error in try Block will catch here
        return res.status(404).json({"Error": `${error}`});
    }
}

const getAllCourses = async(req, res)=>{
    try{
            await Course.findAll({attributes:['courseName','credits','subjects']}).then((result)=>{
                // find all courses and show them according to their attributes
            return res.status(200).json({"List of All Courses": result});
            });
    }catch(error){
        // Error in try Block will catch here
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