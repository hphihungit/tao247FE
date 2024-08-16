import { Search } from "@mui/icons-material"
import { api } from "../../config/apiConfig"
import { CREATE_ORDER_REQUEST } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST})

    try {
        const {data} = await api.post(`/api/orders/`, reqData.address)

        if (data.id) {
            reqData.navigate({ Search})
        }
    } catch (error) {
        
    }
}