import { CREATE_ORDER_REQUEST } from "./ActionType"

const initialState = {
    orders: [],
    order: null,
    error: null,
    loading: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            
    }
}