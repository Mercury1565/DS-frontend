import { apiClientSecure } from "./server";


export async function filterStudent(course, year, semester) {
    try {
        console.log(localStorage.getItem("accessToken"));
        const response = await apiClientSecure.get("/school/enrollments/", {params: {course, year, semester}});
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}