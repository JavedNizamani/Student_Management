const db = require('../Models/index');                                  // import Models
const dbStudents_Courses = db.Students_Courses;                         // import Students_Courses Model
const {validationResult} = require('express-validator');                // module for data sanitization

const addForeignKeyValues = async(req, res)=>{          // Function to add StudentId and CourseId in Database Students_Courses Table  
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
    return res.status(404).json({"Error": `${ error}`});
   }
}
module.exports = {
    addForeignKeyValues                             // Export function for further use
}