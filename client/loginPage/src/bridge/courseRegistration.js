import { apiClientSecure } from "./server";


export async function courseResgistration(year, semester) {
    try {
        console.log(localStorage.getItem("accessToken"));
        const response = await apiClientSecure.get("/school/courses", {params: {year, semester}});
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function registartionCourse(course_id){
    try {
        console.log(localStorage.getItem("accessToken"));
        const response = await apiClientSecure.post("school/enrollments/", {input_course_id: course_id});
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}