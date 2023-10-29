module.exports = (sequelize, Sequelize, Model)=>{               // function to export Students Model
    class Students extends Model{}

    Students.init({                                             // Creating Students Table in Database
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber:{
            type: Sequelize.STRING,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        confirmPassword:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'Students',
        timestamps: false
    });
    return Students;
}