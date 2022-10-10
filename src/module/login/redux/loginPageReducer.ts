import {Action} from "../../../general/redux/Action";
import {LOGIN_FAIL, LOGIN_SUCCESS} from "./asyncActions";
import User from "../domain/model/typesUserPage";

const user: User = JSON.parse(sessionStorage.getItem("user") || "[]");

const initialState = (user) ? {isLoggedIn: false, user: user, message: ''} : {isLoggedIn: false, user: null};

export const loginPageReducer = (
    state = initialState, action: Action
) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            sessionStorage.setItem("user", JSON.stringify(action.payload))
            return {...state, isLoggedIn: true, user: action.payload, message: ''}
        case LOGIN_FAIL:
            sessionStorage.removeItem('user');
            return {...state, isLoggedIn: false, user: null, message: 'User not found'}
        default:
            return state;
    }
}