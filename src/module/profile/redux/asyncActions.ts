import Profile from "../domain/model/Profile";
import Order from "../domain/model/Order";
import getOrders from "../domain/use_cases/getOrders";
import getProfileDetails from "../domain/use_cases/getProfileDetails";
import updateProfile from "../domain/use_cases/updateProfile";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../general/navigation/routes";

// TODO rate products

export const getProfileDetailsAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        getProfileDetails(token)
            .then((data) => dispatch(setProfileDataAction(data)))
            .catch((error) => {
                showError(error, "Get profile error")
                const navigate = useNavigate();
                // const handleOnClick = (index: number) => () => {
                //     navigate(`/${routes.articlePage}/${headersList[index].id}`);
                // }
            });
    }
}

export const updateProfileAction = (updatedProfile: Profile) :any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        updateProfile(updatedProfile)
            .then(() => dispatch(setProfileDataAction(updatedProfile)))
            .catch((error) => showError(error, "Update profile error"));
    }
}

export const getOrdersAction = (token: string) :any => {
    return (dispatch: Function) => {
        dispatch(startLoadAction());
        getOrders(token).then((ordersArray) => {
            let res = new Array(ordersArray.length);
            for(let i = ordersArray.length-1, j = 0; i >= 0; i--, j++){
                res[j] = ordersArray[i];
            }
            dispatch(setOrdersDataAction(res));
        })
    }

    // const response = fetch(`${api_client}all_orders_get`);
    // console.log(response)
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
// case LOGOUT: {
//     sessionStorage.removeItem('RefreshToken'); // TODO check names
//     sessionStorage.removeItem('AccessToken');
//     return {profile: new Profile(initialProfile), orders: [], isLoading: false};
// }

function showError(error: any, msg: string): void {
    console.error(msg, error);
    const errorMsg = error.response && error.response.data ?
        error.response.data.message : 'An error occurred.';
    window.alert(errorMsg);
}

export const START_LOAD = 'start_load';
export const SET_PROFILE = 'set_profile_data';
export const UPDATE_PROFILE = 'update_profile_data';
export const ADD_PHONE = 'add_phone';
export const ADD_ADDRESS = 'add_address';
export const ADD_COUNTRY = 'add_country';
export const LOGOUT = 'logout';
export const CLEAN_DATA = 'clean_data';

export const GET_ORDERS = 'get_orders_data';
export const SET_ORDERS = 'set_orders_data';
export const SORT_ORDERS = 'sort_orders';

export const startLoadAction = () => ({
    type: START_LOAD
});

export const setProfileDataAction = (data: Profile) => ({
    type: SET_PROFILE,
    payload: data
});

export const logout = () => ({
    type: LOGOUT
});

export const cleanDataAction = () => ({
    type: CLEAN_DATA
});

export const setOrdersDataAction = (data: Array<Order>) => ({
    type: SET_ORDERS,
    payload: data
});

export const sortOrdersAction = (sort: string) => ({
    type: SORT_ORDERS
});