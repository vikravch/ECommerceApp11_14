import {Dispatch} from "react";
import api_client from "../../../general/data/api_client";
import AuthRepository from "../data/authRepository";

export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';
export const SIGN_UP_SUCCESS = 'sign_up_success';
export const SIGN_UP_FAIL = 'sign_up_fail';
export const SET_MESSAGE = 'set_message'

export const signInAction = (email:string, password:string): any => async (dispatch:Dispatch<any>) => {

    new AuthRepository().signIn(email, password).then(res => dispatch({type: LOGIN_SUCCESS, payload: res}))

    // fetch(api_client + '/auth/login', {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'})
    //     .then((response) => response.json())
    //     .then(data => dispatch({type: LOGIN_SUCCESS, payload: data}))
    //     .catch(error => dispatch({type: LOGIN_FAIL}));
}
export const signUpAction = (email: string, pass: string, dateOfBirth: string, name: string, surname: string): any => async (dispatch:Dispatch<any>) => {

    new AuthRepository().signUp(email, pass, dateOfBirth, name, surname)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res})
            dispatch({type: SET_MESSAGE, payload: res.message})
        })


    // fetch(api_client + `/auth/registration`, {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'})
    //     .then((response) => response.json())
    //     .then(result => {dispatch({type: SIGN_UP_SUCCESS});
    //                      dispatch({type: SET_MESSAGE, payload: result.message})})
    //     .catch(error => dispatch({type: SIGN_UP_FAIL, payload: error}));
}
