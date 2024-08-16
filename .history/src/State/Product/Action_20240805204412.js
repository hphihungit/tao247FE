import { type } from "@testing-library/user-event/dist/type";
import { FIND_PRODUCTS_REQUEST } from "./ActionType";
import { api } from "../../config/apiConfig";

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
        const {data} = api.get(`/api/products/capacity=${capacity}&color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&`)
    } catch (error) {

    }
}