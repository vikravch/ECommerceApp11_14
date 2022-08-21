import {Action} from "../../../general/redux/Action";
import {CREATE_ORDER, FETCH_ORDERS} from "./asyncActions";

export const checkoutPageReducer = (
    state = {Order: {}},
    action: Action
) => {
    switch (action.type) {
        case CREATE_ORDER:
            return state;
        case FETCH_ORDERS:
            return {orders: action.payload}
        default:
            return state;
    }
};
