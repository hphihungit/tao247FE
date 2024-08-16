import axios from "axios";

// Địa chỉ base URL của backend
export const API_BASE_URL = "http://localhost:5454";
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
    error => Promise.reject(error)
);

// Xử lý lỗi phản hồi
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            console.error("Truy cập không được phép - có thể do token không hợp lệ hoặc đã hết hạn");
        }
        return Promise.reject(error);
    }
);