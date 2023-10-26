module.exports = (sequelize, Sequelize, Model)=>{           // function to export Courses Model
    class Courses extends Model{}

    Courses.init({                                  // Creating Courses Table in Database
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        courseName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        credits:{
            type: Sequelize.STRING,
            allowNull: false
        },
        subjects:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'Courses',
        timestamps: false
    });
    return Courses;                                         
}