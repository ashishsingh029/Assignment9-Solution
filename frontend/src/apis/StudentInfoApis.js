import axios from 'axios'
class StudentInfoApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    addStudentInfo = async newStudentInfo => {
        try {
            await axios.post(`${this.api}/studentinfo`, newStudentInfo)
            return { status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    updateStudentInfo = async updatedStudentInfo => {
        try {
            let res = await axios.put(`${this.api}/studentinfo/${updatedStudentInfo.rollno}`, updatedStudentInfo)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    getAllStudentInfo = async () => {
        try {
            let res = await axios.get(`${this.api}/studentinfo`)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    getStudentInfoByRoll = async roll => {
        try {
            let res = await axios.get(`${this.api}/studentinfo/${roll}`)
            return { data: res.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
    deleteStudentInfoByRoll = async roll => {
        try {
            await axios.delete(`${this.api}/studentinfo/${roll}`)
            return { status: true }
        } catch (error) {
            return { status: false }
        }
    }
}
const studentInfoApis = new StudentInfoApis()
export default studentInfoApis