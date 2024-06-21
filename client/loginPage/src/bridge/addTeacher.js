import { apiClientSecure } from "./server";
import apiClient from "./server";

export async function createTeacher(username, password, first_name, last_name, email, department) {
  try {
    console.log("rytuiofsdiyugjytefghjuyefhksuyfeihkjdssuifedk");
    const response = await apiClient.post("/auth/users/", 
        {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email,
            role: "T"
        }
    );
    console.log(response.data);
    
    const response2 = await apiClient.post("/auth/jwt/create/", {username: username, password: password});
    console.log(response2.data);
    const response3 = await apiClient.post("/school/staff/", {department: department, office_number: 21}, {headers: {Authorization: `JWT ${response2.data.access}`}});
    
    return response.data;
  } catch (error) {
    throw error;
  }
}


