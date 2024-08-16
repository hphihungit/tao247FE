import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null }
        
        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                case GET_USER_SUCCESS:
                    
        default:
            return state;
    }
} 