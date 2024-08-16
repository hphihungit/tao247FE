import axios from "axios"

export const API_BASE_URL = "http://localhost:5454"
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Thêm JWT vào mỗi yêu cầu
api.interceptors.request.use(
    config => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            config.headers["Authorization"] = `Bearer ${jwt}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Xử lý lỗi phản hồi
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            // JWT có thể hết hạn hoặc không hợp lệ
            console.error("Unauthorized access - possibly due to an invalid or expired token");
            // Bạn có thể chuyển hướng người dùng đến trang đăng nhập hoặc thông báo lỗi
        }
        return Promise.reject(error);
    }
);