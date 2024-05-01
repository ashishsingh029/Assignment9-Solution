const mongoose = require('mongoose')
const addressSubSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    }
})
const studentInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: addressSubSchema,
        required: true
    }
})
const StudentInfo = mongoose.model('studentInfo', studentInfoSchema)
module.exports = StudentInfo