const db = require('../Models/index');
const dbStudents_Courses = db.Students_Courses;                 // Students_Courses Table in Database
const {validationResult} = require('express-validator');

const addForeignKeyValues = async(req, res)=>{
            // Function to add StudentId and CourseId in Database Students_Courses Table
   try{
            const errors = validationResult(req);
                if(!errors.isEmpty()){
                    res.status(404).json({Msg: errors});
                    return
                }
    const {StudentId, CourseId} = req.body;
        const data = await dbStudents_Courses.create({
            StudentId: StudentId,
            CourseId: CourseId
        });
        return res.status(201).json({data});
   }catch(error){
    // Error in try Block will be catch here
    return res.status(404).json({"Error": `${ error}`});
   }
}
module.exports = {
    addForeignKeyValues
}