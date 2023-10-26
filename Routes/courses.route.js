const express = require('express');         // express module
const route = express.Router();             // create router object

const {auth} = require('../Middleware/login-auth');
const {sanitizeCourseRegistration} = require('../Middleware/sanitizer.middleware');
const {verifyRegisteredCourses} = require('../Middleware/verifyRegisteredCourse');
const {addCourse, getCourseById, getCourseByStudentId,getAllCourses} = require('../controller/courses.controller');
            // functions exported from MiddleWare and Controller modules are imported for Routing

route.post('/addCourse',auth,sanitizeCourseRegistration,verifyRegisteredCourses,addCourse);        
                    // This Route Add Course in Database
route.get('/courses/:courseID',auth,getCourseById);         // route to show single course
route.get('/coursesByStudent/:StudentID',auth,getCourseByStudentId);
                    //show all courses assigned to single Student    
route.get('/courses',auth,getAllCourses);                   // route to show all courses from Database


module.exports = route;             // route module exported and to be functional at /una endpoint