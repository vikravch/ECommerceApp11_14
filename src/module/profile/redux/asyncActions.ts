import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";
import getProfileFake from "../domain/use_cases/getProfileFake";
import getOrdersFake from "../domain/use_cases/getOrdersFake";
import {DOMAIN_NAME} from "../../../general/data/server_setting";
import {CLEAR_CART} from "../../cart/redux/asyncActions";
import {CREATE_ORDER} from "../../checkout/redux/asyncActions";
import ArticleInfo from "../../blog_page/domain/model/ArticlesList";
import getOrders from "../domain/use_cases/getOrders";

export const getProfileDetailsAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startProfileLoadAction());
        getProfileFake(token).then((data) => {
            dispatch(setProfileDataAction(data));
        })
    }
}

export const getOrdersDetailsAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startOrdersLoadAction());
        getOrdersFake(token).then((ordersArray) => {
            let res = new Array(ordersArray.length);
            for(let i = ordersArray.length-1, j = 0; i >= 0; i--, j++){
                res[j] = ordersArray[i];
            }
            dispatch(setOrdersDataAction(res));
        })
    }
}

export const getOrdersAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startOrdersLoadAction());
        getOrders(token).then((ordersArray) => {
            let res = new Array(ordersArray.length);
            for(let i = ordersArray.length-1, j = 0; i >= 0; i--, j++){
                res[j] = ordersArray[i];
            }
            dispatch(setOrdersDataAction(res));
        })
    }

    const response = fetch(`${DOMAIN_NAME}all_orders_get`);
    console.log(response)
    // if(response.ok){
    //     console.log(response)
    //     const json = response.json();
    //     try{
    //         const ordersArr = JSON.parse(json) as Array<Order>;
    //         return Promise.resolve(ordersArr);
    //     } catch(err){
    //         return Promise.reject(err);
    //     }
    // } else {
    //     return Promise.reject(new Error("Response failed"));
    // }
}

export const START_PROFILE_LOAD = 'start_profile_load';
export const SET_PROFILE_DATA = 'set_profile_data';
export const  START_ORDERS_LOAD = 'start_orders_load';
export const SET_ORDERS_DATA = 'set_orders_data';
export const SET_FILTER_TYPE = 'set_filter_type';

export const startProfileLoadAction = () => ({
    type: START_PROFILE_LOAD
});

export const setProfileDataAction = (data: Profile) => ({
    type: SET_PROFILE_DATA,
    payload: data
});

export const startOrdersLoadAction = () => ({
    type: START_ORDERS_LOAD
});

export const setOrdersDataAction = (data: Array<Order>) => ({
    type: SET_ORDERS_DATA,
    payload: data
});

export const setFilterTypeAction = (data: string) => ({
    type: SET_FILTER_TYPE,
    payload: data
});