const db = require('../Models/index');
var dbCourse = db.Courses;

const verifyRegisteredCourses = async (req, res, next)=>{
                            // Function built to find the course in Database for verification purpose
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
        // Error in try Block will catch here
        res.status(404).json({"Error": `${error}`});
    }
}
module.exports = {
    verifyRegisteredCourses     // exported and to be used in endpoints
}