import { CREATE_ORDER_REQUEST } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    console.log("req data ", reqData)
    try {
        dispatch({type: CREATE_ORDER_REQUEST})

        const config = {
            headers: 
        }
    } catch (error) {
        
    }
}