import {ProfilePageStore} from "./typesProfilePage";
import {Action} from "../../../general/redux/Action";
import Profile, {getProfilePreviewStr} from "../domain/model/Profile";
import {
    SET_FILTER_TYPE,
    SET_ORDERS_DATA,
    SET_PROFILE_DATA, START_LOAD,
} from "./asyncActions";
import Order from "../domain/model/Order";

export function profilePageReducer(
    state: ProfilePageStore = {profile: new Profile(JSON.parse(getProfilePreviewStr)), orders: new Array<Order>(),
        isLoading: false},
    action: Action){

    switch(action.type) {
        case START_LOAD:
            return {...state, isLoading: true};
        case SET_ORDERS_DATA:
            return {...state, //TODO new direction
            orders:action.payload, isLoading: false};
        case SET_FILTER_TYPE: {
            let res =
                state.orders.filter((order)=>{return Number(order.createdAt) > action.payload;});
            return {...state, filterType: action.payload, filteredOrders: res};
        }
        case SET_PROFILE_DATA:
            return {...state, isLoading: false};
        default:
            return state;
    }
}