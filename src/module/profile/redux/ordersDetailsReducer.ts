import {OrdersDetailsStore} from "./typesOrdersPage";
import Order, {orders} from "../domain/model/Order";
import {Action} from "../../../general/redux/Action";
import {SET_ORDERS_DATA, START_ORDERS_LOAD} from "./asyncActions";

export function ordersDetailsReducer(
    state: OrdersDetailsStore = {
        orders: new Array<Order>(JSON.parse(orders)),
        isLoading: false},
    action: Action) {

    switch (action.type) {
        case START_ORDERS_LOAD: return {...state, isLoading: true};

        case SET_ORDERS_DATA: return {...state,
            orders:action.payload, isLoading: false};

        default: return state;
    }
}