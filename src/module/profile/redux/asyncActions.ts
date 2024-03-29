import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";
import getOrders from "../domain/use_cases/getOrders";
import getProfileDetails from "../domain/use_cases/getProfileDetails";
import updateProfile from "../domain/use_cases/updateProfile";
import {routes} from "../../../general/navigation/routes";
import User from "../../login/domain/model/typesUserPage";
import {cleanLoginData} from "../../login/redux/asyncActions";
import {clearCartAction} from "../../cart/redux/asyncActions";

// TODO rate products

export const getProfileDetailsAction = (user: User, navigate: Function): any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        if(Object.keys(user).length === 0 || !user.token || !user.refreshToken) {
            dispatch(stopLoadAction());
            navigate(`/${routes.login}`);
            return null;
        }

        getProfileDetails(user.token, user.refreshToken)
            .then((data) => dispatch(setProfileDataAction(data)))
            .catch((error) => {
                console.log(error)
                if(error.message === "Access token is expired") {
                    alertError("Your session expired. Please login.", '');
                    navigate(`/${routes.login}`);
                } else {
                    navigate(
                        `/${routes.error}/${error.code}/${encodeURIComponent(error.message)}`);
                }
                dispatch(stopLoadAction());
            });
    }
}

export const logoutAction = (): any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        // case LOGOUT: {
//     sessionStorage.removeItem('RefreshToken'); // TODO check names
//     sessionStorage.removeItem('AccessToken');
//     return {profile: new Profile(initialProfile), orders: [], isLoading: false};
// }
        dispatch(cleanLoginData());
        dispatch(clearCartAction());
        dispatch(cleanDataAction());
    }
}

export const updateProfileAction = (updatedProfile: Profile): any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        updateProfile(updatedProfile)
            .then(() => dispatch(setProfileDataAction(updatedProfile)))
            .catch((error) => alertError("Update profile error", error));
    }
}

export const getOrdersAction = (user: User, navigate: Function): any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        if(Object.keys(user).length === 0 || !user.token || !user.refreshToken) {
            dispatch(setOrdersDataAction([]));
            return null;
        }

        getOrders(user.token, user.refreshToken)
            .then((data) => dispatch(setOrdersDataAction(data)))
            .catch((error) => {
                // error.response.data.message, error.response.data.status // TODO refresh token ?
                if(error.message === "Access token is expired") {
                    alertError("Your session expired. Please login.", '');
                    navigate(`/${routes.login}`);
                } else {
                    navigate(
                        `/${routes.error}/${error.code}/${encodeURIComponent(error.message)}`);
                }
                dispatch(stopLoadAction());
            });
    }
}

export const START_LOAD = 'start_load';
export const STOP_LOAD = 'stop_load';
export const SET_PROFILE = 'set_profile_data';
export const UPDATE_PROFILE = 'update_profile_data';
export const ADD_PHONE = 'add_phone';
export const ADD_ADDRESS = 'add_address';
export const ADD_COUNTRY = 'add_country';
export const LOGOUT = 'logout';
export const CLEAN_DATA = 'clean_data';

export const GET_ORDERS = 'get_orders_data';
export const SET_ORDERS = 'set_orders_data';

export const startLoadAction = () => ({
    type: START_LOAD
});

export const stopLoadAction = () => ({
   type: STOP_LOAD
});

export const setProfileDataAction = (data: Profile) => ({
    type: SET_PROFILE,
    payload: data
});

export const cleanDataAction = () => ({
    type: CLEAN_DATA
});

export const setOrdersDataAction = (data: Array<Order>) => ({
    type: SET_ORDERS,
    payload: data
});

function alertError(msg: string, error: any): void {
    console.error(msg, error);
    const errorMsg = error.response && error.response.data ?
        error.response.data.message : 'An error occurred.';
    window.alert(error? errorMsg : msg);
}