const dbConfig = require('../config/db.config');            // import configuration for database connection
const {Sequelize, Model} = require('sequelize');            // sequelize module

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
                            // this creates database connection
    dialect: dbConfig.USER,
    host: dbConfig.HOST,
    logging: false
});

const db = {};                  // Creating database Object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Students = require('./students.model')(sequelize, Sequelize, Model);
db.Courses = require('./courses-model')(sequelize, Sequelize, Model);
db.Students_Courses = require('./students_courses.model')(sequelize, Sequelize, Model)
                                            // Importing models/tables 

db.Students.belongsToMany(db.Courses,{ through: 'Students_Courses'});
db.Courses.belongsToMany(db.Students,{ through: "Students_Courses"});
                // Database Tables relations        
                //Many to Many Relation 1 students can have many courses || 1 Course can have many Students

db.sequelize.sync({force: false});          // Synchronize Tables for Interacting with express and postgres


module.exports = db;                // database exports