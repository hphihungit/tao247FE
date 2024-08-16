import axios from "axios"

export const register = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${API}`)
    } catch (err) {
        
    }
}