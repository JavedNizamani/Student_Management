        // imports
const express = require('express');             
const route = express.Router(); 
const {sanitizeForeignKeyValues} = require('../Middleware/sanitizer.middleware');                
const {addForeignKeyValues} = require('../controller/Students_Courses.controller');
const {auth} = require('../Middleware/login-auth');                        
    // route to add foreign keys
route.post('/addForeignKey',auth,sanitizeForeignKeyValues,addForeignKeyValues);           

module.exports = route                  // export route  