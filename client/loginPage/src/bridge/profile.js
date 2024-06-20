import { apiClientSecure } from "./server";


export async function studentProfileFetch() {
    try {
        const response = await apiClientSecure.get("/school/students/me/");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}