import { api } from "../../config/apiConfig"
import { CREATE_ORDER_REQUEST } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST})

    try {
        const {data} = await api.post(`/api/orders/`, reqData.address)

        if (data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}` });
        }
        console.log("created order - ", data)

        dispatch({
            
        })
    } catch (error) {
        
    }
}