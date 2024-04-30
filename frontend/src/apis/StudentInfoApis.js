import axios from 'axios'
class StudentInfoApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    addStudentInfo = async newStudentInfo => {
        try {
            console.log(`${this.api}/studentinfo/`)
            const res = await axios.post(`${this.api}/studentinfo/`, newStudentInfo)
            console.log(res.data)
            return { data: res, status: true }
        } catch (error) {
            console.log('Error: ' + error.message);
            return { status: false }
        }
    }
    getAllStudentInfo = async () => {
        try {
            console.log(`${this.api}/studentinfo/`)
            const res = await axios.get(`${this.api}/studentinfo/`)
            console.log(res.data)
            return { data: res, status: true }
        } catch (error) {
            console.log('Error: ' + error.message);
            return { status: false }
        }
    }
}
const studentInfoApis = new StudentInfoApis()
export default studentInfoApis