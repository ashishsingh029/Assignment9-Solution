const express = require('express')
const { 
    addStudentAcademicInfo, 
    getAllStudentsAcademicInfo,
    getSingleStudentAcademicInfoByRoll,
    updateStudentAcademicInfoByRoll,
    deleteStudentAcademicInfoByRoll
} = require('../controllers/studentAcademicInfo.controller')

const studentAcademicInfoRouter = express.Router()
studentAcademicInfoRouter.post("/", addStudentAcademicInfo)
studentAcademicInfoRouter.get("/",getAllStudentsAcademicInfo)
studentAcademicInfoRouter.get("/:roll",getSingleStudentAcademicInfoByRoll)
studentAcademicInfoRouter.put("/:roll",updateStudentAcademicInfoByRoll)
studentAcademicInfoRouter.delete("/:roll",deleteStudentAcademicInfoByRoll)

module.exports = studentAcademicInfoRouter