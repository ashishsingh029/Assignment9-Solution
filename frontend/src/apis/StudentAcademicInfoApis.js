import axios from 'axios'
class StudentAcademicInfoApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    addStudentAcademicInfo = async newStudentAcademicInfo => {
        try {
            await axios.post(`${this.api}/studentacademicinfo`, newStudentAcademicInfo)
            return { status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    updateStudentAcademicInfo = async updatedStudentAcademicInfo => {
        try {
            let res = await axios.put(`${this.api}/studentacademicinfo/${updatedStudentAcademicInfo.rollno}`, updatedStudentAcademicInfo)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    getAllStudentAcademicInfo = async () => {
        try {
            let res = await axios.get(`${this.api}/studentacademicinfo`)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    getStudentAcademicInfoByRoll = async roll => {
        try {
            let res = await axios.get(`${this.api}/studentacademicinfo/${roll}`)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    deleteStudentAcademicInfoByRoll = async roll => {
        try {
            await axios.delete(`${this.api}/studentacademicinfo/${roll}`)
            return { status: true }
        } catch (error) {
            return { status: false }
        }
    }
}
let studentAcademicInfoApis = new StudentAcademicInfoApis()
export default studentAcademicInfoApis