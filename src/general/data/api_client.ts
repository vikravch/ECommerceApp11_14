import axios from "axios";
import AuthRepository from "../../module/login/data/authRepository";

// export default axios.create({
//     baseURL: 'https://ecommerce3-sport-production.up.railway.app'
//     // baseURL: 'http://localhost:8181'
// })



const axiosInstance = axios.create({
    baseURL: 'https://ecommerce3-sport-production.up.railway.app',
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Do something with the response
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

       // Check if the error is due to an expired token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log("Interseptors 1")
            // Refresh the token
            const newToken = await new AuthRepository().refreshAccessToken();

            if (newToken) {
                // Retry the original request with the new token
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            }
        }
        // if (error.response.status === 500 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     console.log("Interseptors2")
        //     // Refresh the token
        //     const newToken = await new AuthRepository().refreshAccessToken();
        //
        //     if (newToken) {
        //         // Retry the original request with the new token
        //         originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        //         return axiosInstance(originalRequest);
        //     }
        // }

        return Promise.reject(error);
    }
);

export default axiosInstance;

 export const AccessToken = 'eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJFY29tbWVyY2VKV1QiLCJzdWIiOiJKV1QtQWNjZXNzIiwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRob3JpdGllcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE2OTE2MDAwOTIsImV4cCI6MTY5MTYwMDY5Mn0.BCjS-98f0L3hZSf_7MQ1HWu_602ozpYAA2aM5rJoQzWyvaBl35l6su4wNYVycupT'
 export const RefreshToken = 'eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJFY29tbWVyY2VKV1QiLCJzdWIiOiJKV1QtUmVmcmVzaCIsInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOIiwiaWF0IjoxNjkxNjAwMDkyLCJleHAiOjE2OTE2MDM2OTJ9.EE5xLW71Z6qt8dWaF_DPiFGaxLvMd0I73oJQdWYa2uSktYxphzUbbdJdTkjUUDZ5'
