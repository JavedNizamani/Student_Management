**STUDENT MANAGEMENT**

**Portfolio Project – I**

Express Framework using REST (Representational State Transfer) API, endpoints to manage university students, By Registering Students and allotting Courses to Students.

In this project I have used following architectural design to build folder structure.

![Student_Management_Chart.png](Aspose.Words.f662bf7a-2c1d-40e3-8955-de0678aed7ce.001.png)

**Prerequisite:**

Create Root Folder as Student\_Mangagement in VS Code Editor then go to terminal and write npm init (npm – node package manager) this command will create package.json file for holding all packages. Then install the packages required for the project as below

- express 		- (npm i express) – this will install express framework.
- express-validator	- (npm i express-validator) – this is used for data sanitization
- body-parser 		-(npm i body-parser) – this is used for parsing request body
- bcrypt			-(npm i bcrypt) – for password hash (encrypt the password)
- dotenv		-(npm i dotenv) – used for environment variables, to hide data
- jsonwebtoken	-(npm i jsonwebtoken) – used to share security b/w two parties
- pg 			-(npm i pg) – modules for interfacing with postgreSQL
- postgres 		-(npm i postgres) – A relational database management system
- sequelize		-(npm i sequelize) – Sequelize ORM- object relational Mapping

[**Acknowledgement Technical Requirements**](https://github.com/JavedNizamani/Student_Management#acknowledgement-technical-requirements)

- API endpoints are built using Express JS framework.
- API endpoints use JSON payload as input and output.
- One Student can have multiple Courses.
- Implemented Promises for Asynchronous Tasks.
- Comments to code are included.
- JWT (jsonwebtoken) token is implemented for User Authorization.
- Postgres SQL is used to store Data.
- Validation and Authentication checks are used.
- Sanitization used before entering Data into Database.

[**All Functional REST API endpoints**](https://github.com/JavedNizamani/Student_Management#all-functional-rest-api-endpoints)

[Register Student: POST Method] <http://localhost:3000/una/registerStudent>

[Login Student: POST Method] <http://localhost:3000/una/login>

[Show All Students: GET Method] <http://localhost:3000/una/students>

[Show Single Student: GET Method] <http://localhost:3000/una/students/:studentID>

[Update Single Student: PUT Method] <http://localhost:3000/una/student/:studentID>

[Delete Single Student: DELETE Method] <http://localhost:3000/una/student/:studentID>

[Add Course: POST Method] <http://localhost:3000/una/addCourse/>

[Show Single Course: GET Method] <http://localhost:3000/una/courses/:courseID>

[Show Courses Allotted to Single Student: GET Method] <http://localhost:3000/una/coursesByStudent/:studentID>

[Show All Courses: GET Method] <http://localhost:3000/una/courses>

[**Author**](https://github.com/JavedNizamani/Student_Management#author)

- Javed Ahmed Nizamani


