const db = require('../Models/index');                                  // import Models
var dbStudent = db.Students;                                            // Student Model

const verifyRegisteredStudents = async (req, res, next)=>{
            // function verify username, email and phone number  either exists in database or not
    try{
        const {phoneNumber, email, userName, password, confirmPassword} = req.body;
        const userNameExists = await dbStudent.findOne({
            where:{userName}
        });
            const phoneNumberExists = await dbStudent.findOne({
            where:{phoneNumber}
            });
                const emailExists = await dbStudent.findOne({
                where:{email}
                });
            if(userNameExists){
                return res.status(400).json({"User": ` ${userName} already exists`});
            }else if(phoneNumberExists){
                return res.status(400).json({"Phone #": `${phoneNumber} already exists`});
            }else if(emailExists){
                return res.status(400).json({"Email": `${email} already exists`});
            }else if(password !== confirmPassword){
                return res.status(400).json({"Password": "Password Mismatch"});
            }else{
                next();
            }
    }catch(error){
        return res.status(404).json({"Error": error});
    }
}
module.exports = {
    verifyRegisteredStudents
                        // Exported and to be used in endpoints
}