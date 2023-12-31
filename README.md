
# STUDENT MANAGEMENT (Portfolio Project – I)

Using the Express Framework REST (Representational State Transfer) API, endpoints to manage university students, By Registering Students and allotting Courses to Students.
## Chart

![chart](https://github.com/JavedNizamani/Student_Management/blob/main/chart.jpg)




## Deployment/Prerequisite for Project

To deploy this project, Go to terminal and write npm init (npm – node package manager) this command will create package.json file for holding all packages. Then install the packages required for the project as below

- express -(npm i express) – this will install  express framework
- express-validator- (npm i express-validator) – this is used for data sanitization
- body-parser -(npm i body-parser) – this is used for parsing request body
- bcrypt -(npm i bcrypt) – for password hash (encrypt the password)
- dotenv -(npm i dotenv) – used for environment variables, to hide data
- jsonwebtoken -(npm i jsonwebtoken) – used to share security b/w two parties
- pg -(npm i pg) – modules for interfacing with postgreSQL
- postgres -(npm i postgres) – A relational database management system
- sequelize -(npm i sequelize) – Sequelize ORM- object relational Mapping



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`PGHOST`
`PGDATABASE`
`PGUSER`
`PGPASSWORD`
`JWT_SECRET`
`JWT_EXPIRATION`


## All Functional REST API endpoints

[Register Student: POST Method]
http://localhost:3000/una/registerStudent
[firstName, lastName, phoneNumber, email, userName, password, confirmPassword]

[Login Student: POST Method]
http://localhost:3000/una/login
[Note: login via email OR userName AND password]

[Show All Student: GET Method]
http://localhost:3000/una/students

[Show Single Student: GET Method]
http://localhost:3000/una/students/:studentID

[Update Single Student: PUT Method]
http://localhost:3000/una/student/:studentID

[Delete Single Student: DELETE Method]
http://localhost:3000/una/student/:studentID

[Add Course: POST Method]
http://localhost:3000/una/addCourse/
[courseName, credits, subjects]

[Show Single Course: GET Method]
http://localhost:3000/una/courses/:courseID

[Add Foreign Keys: POST Method]
http://localhost:3000/una/addForeignKey
[StudentId, CourseId]

[Show Courses Alloted to Single Student: GET Method]
[Note: before running this endpoint, you must first run to Add Foreign Keys endpoint(given above)]
http://localhost:3000/una/coursesByStudent/:studentID

[Show All Courses: GET Method]
http://localhost:3000/una/courses


## Acknowledgement Technical Requirements

- API endpoints are built using Express JS framework.
- API endpoints use JSON payload as input and output.
- One Student Can have multiple Courses.
- Implemented Promises for Asynchronous Tasks.
- comments to code are included.
- JWT(jsonwebtoken) token is implemented for User Authorization.
- Postgres SQL is used to store Data.
- Validation and Authentication checks are used.
- Sanitization used before entering Data into Database.

## Author
- Javed Ahmed Nizamani

