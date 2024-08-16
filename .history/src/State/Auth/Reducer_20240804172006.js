import { REGISTER_REQUEST } from "./ActionType"

const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST
    }
} 