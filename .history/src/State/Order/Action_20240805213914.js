export const createOrder = (reqData) => async (dispatch) => {
    console.log("req data ", reqData)
    try {
        dispatch({type: CREATE})
    } catch (error) {
        
    }
}