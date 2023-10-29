const db = require('../Models/index');                          // import Models
var dbCourse = db.Courses;                                      // Courses Model

const verifyRegisteredCourses = async (req, res, next)=>{
    try{
            const {courseName} = req.body;
            const courseExists = await dbCourse.findOne({
            where:{courseName}
        });
            if(courseExists){
                res.status(400).json({"Course": `${courseName} already exists`});
            }else{
                next();
            }
    }catch(error){
            res.status(404).json({"Error": `${error}`});
    }
}
module.exports = {
    verifyRegisteredCourses     // exported and to be used in endpoints
}