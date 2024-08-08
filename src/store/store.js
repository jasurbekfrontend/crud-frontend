import { createStore } from "redux";

const initialState = {
    isLoading: true,
    error: null,
    data: []
}
const reducer = (state = initialState, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
            data: action.payload
        }
    }
    else if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    else if (action.type === "SET_ERROR") {
        return {
            ...state,
            isLoading: action.payload
        }
    } else {
        return state;
    }

}
const store = createStore(reducer)

export default store;