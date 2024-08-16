import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_REQUEST } from "./ActionType"

const addItemToCart = (reqData) => (dispatch) => {
    dispatch({type: ADD_ITEM_TO_CART_REQUEST})

    try {
        const {data} = api.put("/api/cart/add", reqData)
    } catch (error) {
        
    }
}