import {Action} from "../../../general/redux/Action";
import {CREATE_ORDER} from "./asyncActions";

export const checkoutPageReducer = (
    state = {Order: {}},
    action: Action
) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {...state, Order: action.payload}
        default:
            return state;
    }
};
