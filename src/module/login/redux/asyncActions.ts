import {Dispatch} from "react";
import api_client from "../../../general/data/api_client";
import AuthRepository from "../data/authRepository";
import {CLEAN_DATA} from "../../profile/redux/asyncActions";

export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';
export const SIGN_UP_SUCCESS = 'sign_up_success';
export const SIGN_UP_FAIL = 'sign_up_fail';
export const SET_MESSAGE = 'set_message'
export const CLEAN_LOGIN_DATA = 'clean_login_data';

export const signInAction = (email:string, password:string): any => async (dispatch:Dispatch<any>) => {

    new AuthRepository().signIn(email, password).then(res => dispatch({type: LOGIN_SUCCESS, payload: res}))
}
export const signUpAction = (email: string, pass: string, dateOfBirth: string, name: string, surname: string): any => async (dispatch:Dispatch<any>) => {

    new AuthRepository().signUp(email, pass, dateOfBirth, name, surname)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res})
            dispatch({type: SET_MESSAGE, payload: res.message})
        })
}

export const cleanLoginData = () => ({
    type: CLEAN_LOGIN_DATA
});
