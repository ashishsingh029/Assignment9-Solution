import studentInfoApis from './StudentInfoApis'
import studentAcademicInfoApis from './StudentAcademicInfoApis'
class CombinedApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    addToBothCollections = async combinedData => {
        try {
            console.log(combinedData)
            let newStudentInfo = combinedData.studentInfo
            let newStudentAcademicInfo = combinedData.studentAcademicInfo
            await studentInfoApis.addStudentInfo(newStudentInfo)
            await studentAcademicInfoApis.addStudentAcademicInfo(newStudentAcademicInfo)
            return { status: true }
        } catch (error) {
            console.log("Error")
            return { status: false }
        }
    }
    getInfoFromBothCollectionsByRoll = async roll => {
        try {
            let studentInfo = await studentInfoApis.getStudentInfoByRoll(roll)
            let studentacademicinfo = await studentAcademicInfoApis.getStudentAcademicInfoByRoll(roll)
            return { info: studentInfo.data, academicInfo: studentacademicinfo.data, status: true }
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }
}
let combinedApis = new CombinedApis()
export default combinedApis