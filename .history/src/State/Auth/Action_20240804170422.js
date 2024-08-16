import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { type } from "@testing-library/user-event/dist/type"

const registerRequest= () => ({type})

export const register = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;

        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }

    } catch (err) {
        
    }
}