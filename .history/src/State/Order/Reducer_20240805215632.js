import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./ActionType"

const initialState = {
    orders: [],
    order: null,
    error: null,
    loading: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                loading: true
            }

        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        case C
    }
}