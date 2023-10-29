const {body} = require('express-validator');        // package for sanitizing Data

const sanitizeStudentsRegisteration = [                 // Array containing Data for Sanitization 
    body('email').notEmpty().trim().isEmail().toLowerCase().withMessage('Email must be valid'),
    body('firstName').notEmpty().isAlpha().isLength({min:3}).toLowerCase().trim(),
    body('lastName').notEmpty().isAlpha().isLength({min:3}).toLowerCase().trim(),
    body('phoneNumber').notEmpty().trim().isMobilePhone().isLength({min: 11, max:11}),
    body('userName').notEmpty().isAlphanumeric().trim().isLength({min:4}).toLowerCase(),
    body('password').notEmpty().trim().isLength({min:4}),
    body('confirmPassword').notEmpty().trim().isLength({min:4})
]
const sanitizeCourseRegistration = [                
    body('courseName').isAlphanumeric().trim().toLowerCase().isLength({min:4}).notEmpty(),
    body('credits').isNumeric().trim().isLength({min:1,max:2}).notEmpty(),
    body('subjects').isNumeric().trim().isLength({min:1, max:2}).toLowerCase().notEmpty()
]
const sanitizeForeignKeyValues = [                     
    body('StudentId').isNumeric().trim().isLength({min:1, max:2}).notEmpty(),
    body('CourseId').isNumeric().trim().isLength({min:1, max:2}).notEmpty()
]

module.exports = {
    sanitizeStudentsRegisteration,
    sanitizeCourseRegistration,
    sanitizeForeignKeyValues
            // all arrays be exported for usage in endpoints
}