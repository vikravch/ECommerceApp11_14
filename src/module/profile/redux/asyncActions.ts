import getProfileDetails from "../domain/use_cases/getProfileDetails";
import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";

export const getProfileDetailsAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startProfileLoadAction());
        getProfileDetails(token).then((data) => {
            console.log(JSON.stringify(data));
            dispatch(setProfileDataAction(data));
        })
    }
}

export const getOrdersDetailsAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startOrdersLoadAction());
        getProfileDetails(token).then((data) => {
            console.log(JSON.stringify(data));
            dispatch(setProfileDataAction(data));
        })
    }
}

export const START_PROFILE_LOAD = 'start_profile_load';
export const SET_PROFILE_DATA = 'set_profile_data';
export const  START_ORDERS_LOAD = 'start_orders_load';
export const SET_ORDERS_DATA = 'set_orders_data';

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
    type: SET_ORDERS_DATA
});


