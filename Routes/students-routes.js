const express = require('express');                 // express module
const route = express.Router();                     // create router object
const {verifyRegisteredStudents} = require('../Middleware/verifyRegisteredStudent');
const {auth} = require('../Middleware/login-auth');
const {registerStudents, login} = require('../controller/students.controller');
const {getAllStudents, getStudentById, updateStudentsById, deleteStudentById} = require('../controller/all-students');
const {sanitizeStudentsRegisteration} = require('../Middleware/sanitizer.middleware');
                // functions exported from different folderes used for endpoints 

route.post('/registerStudent',sanitizeStudentsRegisteration,verifyRegisteredStudents,registerStudents);
                        // route used for Entering Student into Database
route.post('/login',login);                     // Router for login
route.get('/students',auth,getAllStudents);      // Router to show All Students from Database
route.get('/students/:studentID',auth,getStudentById);  // Router to show Single Student from Database
route.put('/student/:studentID',auth,sanitizeStudentsRegisteration,verifyRegisteredStudents,updateStudentsById);
                        // Router used for Updating Single Student in Database
route.delete('/student/:studentID',auth,deleteStudentById);
                        // Router for Deleting Student in Database

module.exports = route;             // route module exported and to be functional at /una endpoint 