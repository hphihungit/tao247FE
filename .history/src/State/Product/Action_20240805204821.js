import { type } from "@testing-library/user-event/dist/type";
import { FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
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
        const {data} = api.get(`/api/products/capacity=${capacity}&color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
    }
}

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})

    const {productId} = reqData;

    try {
        const {data} = api.get(`/api/products/id/${productId}`)

        dispatch({type: FIN, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
    }
}