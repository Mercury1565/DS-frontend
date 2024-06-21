import { apiClientSecure } from "./server";

export async function createAnnouncement(title, description, date, time) {
    try {
        const response = await apiClientSecure.post("/school/announcemet/", {title, description, date, time});
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}