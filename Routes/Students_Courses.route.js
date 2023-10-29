        // imports
const express = require('express');             
const route = express.Router();                 
const {addForeignKeyValues} = require('../controller/Students_Courses.controller');
                        
    // route to add foreign keys
route.post('/addForeignKey',addForeignKeyValues);           

module.exports = route                  // export route  