const express = require('express');             // express module
const route = express.Router();                 // create router object

const {addForeignKeyValues} = require('../controller/Students_Courses.controller');
                        // function exported from controller to be used in endpoint

route.post('/addForeignKey',addForeignKeyValues);           // router for adding Foreign Keys in tables

module.exports = route                  // route module to be exported 