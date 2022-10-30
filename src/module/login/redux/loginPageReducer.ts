import {Action} from "../../../general/redux/Action";
import {LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE, SIGN_UP_FAIL, SIGN_UP_SUCCESS} from "./asyncActions";
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
            return {...state, isLoggedIn: false, user: null, message: 'Incorrect login or password'}
        case SIGN_UP_SUCCESS:
            return {...state, isLoggedIn: false}
        case SIGN_UP_FAIL:
            console.log(action.payload)
            return {...state, isLoggedIn: false, message: action.payload}
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
}