        // All imports
const express = require('express');         
const route = express.Router();              
const {sanitizeCourseRegistration} = require('../Middleware/sanitizer.middleware');
const {auth} = require('../Middleware/login-auth');
const {verifyRegisteredCourses} = require('../Middleware/verifyRegisteredCourse');
const {addCourse, getCourseById, getCourseByStudentId,getAllCourses} = require('../controller/courses.controller');
            
    // Course Routes
route.post('/addCourse',auth,sanitizeCourseRegistration,verifyRegisteredCourses,addCourse);        
route.get('/courses/:courseID',auth,getCourseById);         
route.get('/coursesByStudent/:StudentID',auth,getCourseByStudentId);    
route.get('/courses',auth,getAllCourses);                   


module.exports = route;             // export route 