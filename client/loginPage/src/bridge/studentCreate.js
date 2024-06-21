
import { apiClientSecure } from "./server";
import apiClient from "./server";

export async function createStudent(username, password, first_name, last_name, email, department) {
  try {
    console.log("rytuiofsdiyugjytefghjuyefhksuyfeihkjdssuifedk");
    const response = await apiClient.post("/auth/users/", 
        {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email,
            role: "S"
        }
    );
    console.log(response.data);
    
    const response2 = await apiClient.post("/auth/jwt/create/", {username: username, password: password});
    console.log(response2.data);
    const response3 = await apiClient.post("/school/students/", {department: department}, {headers: {Authorization: `JWT ${response2.data.access}`}});
    alert("Student Created Successfully");
    return response.data;
  } catch (error) {
    alert("Can not create student");
    throw error;
  }
}


