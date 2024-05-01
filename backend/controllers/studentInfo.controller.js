const StudentInfoModel = require('../models/studentInfo.model')

const addStudentInfo = async (req, res) => {
    try {
        let response = await StudentInfoModel.create(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllStudentsInfo = async (req, res) => {
    const students = await StudentInfoModel.find()
    if(students.length > 0) {
        res.status(200).json(students)
    } else {
        res.status(400).json({"Message" : "No records found"})
    }
}

const getSingleStudentInfoByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentInfoModel.findOne({rollno : roll})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(404).json({"Message" : "No student Found"})
    }
}

const updateStudentByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentInfoModel.findOneAndUpdate({rollno : roll}, req.body, {new : true})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(400).json({"Message" : "No student Found"})
    }
}

const deleteStudentByRoll = async (req, res) => {
    const { roll } = req.params
    const student = await StudentInfoModel.findOneAndDelete({rollno : roll})
    if(student != null) {
        res.status(200).json(student)
    } else {
        res.status(400).json({"Message" : "No student Found"})
    }
}

module.exports = { 
    addStudentInfo, 
    getAllStudentsInfo,
    getSingleStudentInfoByRoll,
    updateStudentByRoll,
    deleteStudentByRoll
}