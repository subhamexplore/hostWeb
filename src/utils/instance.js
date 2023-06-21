import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:300",
});

instance.interceptors.request.use(
  async (request) => {
    const token = await localStorage.getItem("token");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    request.headers["Content-Type"] = "application/json";
    request.headers["Access-Control-Allow-Methods"] =
      "GET, PUT, POST, DELETE, OPTIONS";
  },
  (error) => {
    console.log("Instance error", error);
    return Promise.reject(error);
  }
);
