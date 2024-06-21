import { apiClientSecure } from "./server";


export async function addCourse(department, name, year, semester, credits, prequistes) {
    try {
        console.log(localStorage.getItem("accessToken"));
        const response = await apiClientSecure.post(`/school/departments/${department}/courses/`, {
            name: name,
            credit_hour: credits,
            year: year,
            semester: semester,
            required_courses: [],
            }
        );
        console.log(response.data);
        alert("Course Created Successfully");
        return response.data;
    }
    catch (error) {
        alert("Can not create course");
        throw error;
    }
}