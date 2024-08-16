import { ADD_ITEM_TO_CART_REQUEST } from "./ActionType"

const addItemToCart = (reqData) => (dispatch) => {
    dispatch(ADD_ITEM_TO_CART_REQUEST)
}