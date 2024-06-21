import { apiClientSecure } from "./server";


export async function submitGrade(studentId, enrollmentId, result) {
    try {
        console.log(localStorage.getItem("accessToken"));
        console.log(`/students/${studentId}/enrollments/${enrollmentId}/`);
        const response = await apiClientSecure.put(`/school/students/${studentId}/enrollments/${enrollmentId}/`, {result: result});

        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}