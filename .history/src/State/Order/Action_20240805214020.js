import { CREATE_ORDER_REQUEST } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    console.log("req data ", reqData)
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",

            }
        }
    } catch (error) {
        
    }
}