
# Student Management

RESTful API endpoints to manage university students. By Registering Students and alloting Courses to Students.

## All Functional REST API endpoints

[Register Student: POST Method]
http://localhost:3000/una/registerStudent

[Login Student: POST Method]
http://localhost:3000/una/login

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

[Show Single Course: GET Method]
http://localhost:3000/una/courses/:courseID

[Show Courses Alloted to Single Student: GET Method]
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

