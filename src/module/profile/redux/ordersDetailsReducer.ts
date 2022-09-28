import {OrdersDetailsStore} from "./typesOrdersPage";
import Order from "../domain/model/Order";
import {Action} from "../../../general/redux/Action";
import {SET_FILTER_TYPE, SET_ORDERS_DATA, START_ORDERS_LOAD} from "./asyncActions";

export function ordersDetailsReducer(
    state: OrdersDetailsStore = {
        orders: new Array<Order>(),
        isLoading: false,
        filterType: "All",
        filteredOrders: new Array<Order>()},
    action: Action) {

    switch (action.type) {
        case START_ORDERS_LOAD: return {...state, isLoading: true};
        case SET_ORDERS_DATA: return {...state, //TODO new direction
            orders:action.payload, filteredOrders: action.payload, isLoading: false};
        case SET_FILTER_TYPE: {
            let res =
                state.orders.filter((order)=>{return Number(order.createdAt) > action.payload;});
            return {...state, filterType: action.payload, filteredOrders: res};
        }
        default: return state;
    }
}