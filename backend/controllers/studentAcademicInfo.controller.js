const StudentAcademicInfoModel = require('../models/studentAcademicInfo.model')

const addStudentAcademicInfo = async (req, res) => {
    try {
        let response = await StudentAcademicInfoModel.create(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllStudentsAcademicInfo = async (req, res) => {
    const students = await StudentAcademicInfoModel.find()
    if(students.length > 0) {
        res.status(200).json(students)
    } else {
        res.status(400).json({"Message" : "No records found"})
    }
}

const getSingleStudentAcademicInfoByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentAcademicInfoModel.find({rollno : roll})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(400).json({"Message" : "No student Found"})
    }
}

const updateStudentAcademicInfoByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentAcademicInfoModel.findOneAndUpdate({rollno : roll}, req.body, {new : true})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(400).json({"Message" : "No student Found"})
    }
}

const deleteStudentAcademicInfoByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentAcademicInfoModel.findOneAndDelete({rollno : roll})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(400).json({"Message" : "No student Found"})
    }
}

module.exports = { 
    addStudentAcademicInfo, 
    getAllStudentsAcademicInfo,
    getSingleStudentAcademicInfoByRoll,
    updateStudentAcademicInfoByRoll,
    deleteStudentAcademicInfoByRoll
}