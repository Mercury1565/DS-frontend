import { apiClientSecure } from "./server";


export async function courseResult() {
    try {
        console.log(localStorage.getItem("accessToken"));
        const response = await apiClientSecure.get("/school/result");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}