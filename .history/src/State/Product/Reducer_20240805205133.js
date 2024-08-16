import { FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCTS_REQUEST } from "./ActionType"

const initialState = {
    products: [],
    products: null,
    loading: false,
    error:null
}

const customerProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_PRODUCTS_REQUEST:
            case FIND_PRODUCT_BY_ID_REQUEST:
                return {...state, loading: true, error}
    }
}