import { type } from "@testing-library/user-event/dist/type";
import { FIND_PRODUCT_BY_ID_FALIURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";

// export const findProducts = (reqData) => async (dispatch) => {
//     dispatch({type: FIND_PRODUCTS_REQUEST})

//     const {
//         capacity, 
//         color, 
//         minPrice, 
//         maxPrice, 
//         minDiscount, 
//         category, 
//         stock, 
//         sort, 
//         pageNumber, 
//         pageSize 
//     } = reqData;

//     try {
//         const {data} = await api.get(`/api/products?capacity=${capacity}&color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
//         console.log("product data ", data)

//         dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
//     } catch (error) {
//         dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
//     }
// }

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const {
        capacity,
        minPrice,
        maxPrice,
        category,
        stock,
        sort,
        pageNumber,
        pageSize
    } = reqData;

    try {
        // Tạo URL mà chỉ bao gồm các tham số có giá trị hợp lệ
        const params = new URLSearchParams();

        if (capacity) params.append('capacity', capacity);
        if (minPrice !== undefined) params.append('minPrice', minPrice);
        if (maxPrice !== undefined) params.append('maxPrice', maxPrice);
        if (category) params.append('category', category);
        if (stock) params.append('stock', stock);
        if (sort) params.append('sort', sort);
        if (pageNumber !== undefined) params.append('pageNumber', pageNumber);
        if (pageSize !== undefined) params.append('pageSize', pageSize);

        const { data } = await api.get(`/api/products?${params.toString()}`);
        console.log("product data ", data);

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})

    const {productId} = reqData;

    try {
        const {data} = api.get(`/api/products/id/${productId}`)

        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type: FIND_PRODUCT_BY_ID_FALIURE, payload:error.message})
    }
}