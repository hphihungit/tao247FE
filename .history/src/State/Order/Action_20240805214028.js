import { CREATE_ORDER_REQUEST } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",

            }
        }
    } catch (error) {
        
    }
}