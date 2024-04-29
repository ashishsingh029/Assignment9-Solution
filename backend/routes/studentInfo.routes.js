const express = require('express')
const { 
    addStudentInfo,
    getAllStudentsInfo,
    getSingleStudentInfoByRoll,
    updateStudentByRoll,
    deleteStudentByRoll
} = require('../controllers/studentInfo.controller')

const studentInfoRouter = express.Router()
studentInfoRouter.post("/", addStudentInfo)
studentInfoRouter.get("/",getAllStudentsInfo)
studentInfoRouter.get("/:roll",getSingleStudentInfoByRoll)
studentInfoRouter.put("/:roll",updateStudentByRoll)
studentInfoRouter.delete("/:roll",deleteStudentByRoll)
module.exports = studentInfoRouter