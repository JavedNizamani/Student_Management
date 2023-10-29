const express = require('express');                                 // express module
require('dotenv').config();                                         // environment variables module
const app = express();
const PORT = process.env.PORT || 3000;                              // Port where we launch Application
require('./Models/index');                                          // import schemas
const bodyParser = require('body-parser');                          // Body parser module used to parse body requests

const studentRegisterationRoute = require('./Routes/students-routes');
const courseRegisterationRoute = require('./Routes/courses.route');
const StudentCourseForeignKeyRoute = require('./Routes/Students_Courses.route');
                                                                // Routes exported from routes module imported for further operations

app.use((req, res, next)=>{
    console.log("HTTP Method - " + req.method + " , URL - " + req.url);
    next();
});
                
app.use(bodyParser.json());
app.use('/una',studentRegisterationRoute,courseRegisterationRoute,StudentCourseForeignKeyRoute);
                                                // All routing endpoints 
app.listen(PORT, (error)=>{                     // PORT Listening
    if(error){
        console.log(`Error - ${error}`);
    }
    else{
        console.log(`Server has started at ${PORT}`);
    }
});