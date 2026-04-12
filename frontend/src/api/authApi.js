import api from "./axios";

export const loginUser = async (data) => {

 const res = await api.post("/auth/login", data);

 localStorage.setItem("token", res.data.token);

 return res.data;

};