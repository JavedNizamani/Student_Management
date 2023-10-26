module.exports = (sequelize, Sequelize, Model)=>{              // function to export Students_Courses Model
    class Students_Courses extends Model{}

    Students_Courses.init({                // Creating Students_Courses Table in Database
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'Students_Courses',
        timestamps: false
    });
    return Students_Courses;
}