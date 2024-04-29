const StudentInfoModel = require('../models/studentInfo.model')
const StudentAcademicInfoModel = require('../models/studentAcademicInfo.model')

const addToBothCollections = async (req, res) => {
    const {
        name,
        rollno,
        mobile,
        email,
        address:{
            city,
            state,
            pin
        },
        program,
        branch,
        cgpa
    } = req.body
    try {
        const studentInfoResponse = await StudentInfoModel.create({
            name:name,
            rollno:rollno,
            mobile:mobile,
            email:email,
            address:{
                city:city,
                state:state,
                pin:pin
            }
        })
        const studentAcademicInfoResponse = await StudentAcademicInfoModel.create({
            rollno:rollno,
            program:program,
            branch:branch,
            cgpa:cgpa
        })
        res.status(201).json({ studentInfoResponse, studentAcademicInfoResponse })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getFromBothCollectionsByRoll = async (req, res) => {
    const { roll } = req.params
    try {
        const mathedstudentInfo = await StudentInfoModel.aggregate([
            {
                $lookup: {
                    from: "studentacademicinfos",
                    localField: "rollno",
                    foreignField: "rollno",
                    as: "studentacademicinfos"
                }
            },
            {
                $match: {
                    rollno : Number(roll)
                }
            },
            {
                $unwind: "$studentacademicinfos"
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    mobile: 1,
                    email: 1,
                    address: {
                        city: "$address.city",
                        state: "$address.state",
                        pin: "$address.pin"
                    },
                    program: "$studentacademicinfos.program",
                    branch: "$studentacademicinfos.branch",
                    cgpa: "$studentacademicinfos.cgpa"
                }
            }
        ])
        if(mathedstudentInfo != null){
            res.status(200).json(mathedstudentInfo)
        } else {
            res.status(404).json({"message": "No relevant records found"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { 
    addToBothCollections,
    getFromBothCollectionsByRoll 
}