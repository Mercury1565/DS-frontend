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

export async function adminProfileFetch() {
    try {
        const response = await apiClientSecure.get("/school/admin/me/");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function staffProfileFetch() {
    try {
        const response = await apiClientSecure.get("/school/staff/me/");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}