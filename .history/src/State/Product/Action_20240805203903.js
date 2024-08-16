import { type } from "@testing-library/user-event/dist/type";

export const findProducts = (reqData) => async (dispatch) => {
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
        dispatch({type: find})

    } catch (error) {

    }
}