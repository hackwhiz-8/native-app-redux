import { ADD_TO_CART, REMOVE_TO_CART, SET_USER_DATA } from "./Constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_TO_CART:
            let result = state.filter((item) => {
                return item.brand != action.data
            });
            return [...result]
        case SET_USER_DATA:
            return [
                action.data
            ]

        default:
            return state
    }
}