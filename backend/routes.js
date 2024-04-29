const studentInfoRouter = require('./routes/studentInfo.routes')
const studentAcademicInfoRouter = require('./routes/studentAcademicInfo.routes')
const combinedRouter = require('./routes/combined.routes')
module.exports = {
    studentInfoRouter,
    studentAcademicInfoRouter,
    combinedRouter
}