import { type } from "@testing-library/user-event/dist/type";
import { FIND_PRODUCTS_REQUEST } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCTS_REQUEST})

    const {
        capacity, 
        color, 
        minPrice, 
        maxPrice, 
        minDiscount, 
        category, 
        stock, 
        sort, 
        pageNumber, 
        pageSize 
    } = reqData;

    try {
        
    } catch (error) {

    }
}