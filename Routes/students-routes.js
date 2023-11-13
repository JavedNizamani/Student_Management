            // All imports
const express = require('express');                 
const route = express.Router();                     
const {verifyRegisteredStudents} = require('../Middleware/verifyRegisteredStudent');
const {auth} = require('../Middleware/login-auth');
const {registerStudents, login} = require('../controller/students.controller');
const {getAllStudents, getStudentById, updateStudentsById, deleteStudentById} = require('../controller/all-students');
const {sanitizeStudentsRegisteration} = require('../Middleware/sanitizer.middleware');
                            
        // Routes                            
route.post('/registerStudent',sanitizeStudentsRegisteration,verifyRegisteredStudents,registerStudents);          
route.post('/login',sanitizeStudentsRegisteration,login);             // Sanitize Login Values                             
route.get('/students',auth,getAllStudents);      
route.get('/students/:studentID',auth,getStudentById);  
route.put('/student/:studentID',auth,sanitizeStudentsRegisteration,verifyRegisteredStudents,updateStudentsById);
route.delete('/student/:studentID',auth,deleteStudentById);
                        

module.exports = route;             // export route 