import apiClient from "./server";

export async function  login(username, password) {
    try {
        const response = await apiClient.post("/auth/jwt/create", {username: username, password: password});
        localStorage.setItem("accessToken", response.data.access);
        return response.data;
    } catch (error) {
        alert(error.response.data.detail);
        throw error;
    }
}

