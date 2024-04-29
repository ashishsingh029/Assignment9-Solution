const mongoose = require('mongoose')

const studentAcademicInfoSchema = new mongoose.Schema({
    rollno : {
        type: Number,
        required: true,
        unique: true
    },
    program : {
        type: String,
        required: true
    },
    branch : {
        type: String,
        required: true
    },
    cgpa : {
        type: String,
        required: true 
    }
})

const StudentAcademicInfo = mongoose.model('studentAcademicInfo', studentAcademicInfoSchema)
module.exports = StudentAcademicInfo