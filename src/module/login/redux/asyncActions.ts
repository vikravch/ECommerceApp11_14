import {Dispatch} from "react";
import api_client from "../../../general/data/api_client";

export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';
export const SIGN_UP_SUCCESS = 'sign_up_success';
export const SIGN_UP_FAIL = 'sign_up_fail';
export const SET_MESSAGE = 'set_message'

export const signIn = (email:string, password:string): any => async (dispatch:Dispatch<any>) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjFAbWFpbC5jb206dGVzdA==");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email,
        "password": password
    });

    fetch("https://spring-security-app-ecommerce.herokuapp.com/auth/login", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'})
        .then((response) => response.json())
        .then(data => dispatch({type: LOGIN_SUCCESS, payload: data}))
        .catch(error => dispatch({type: LOGIN_FAIL}));
}
export const signUp = (email:string, password:string, dateOfBirth: string): any => async (dispatch:Dispatch<any>) => {
    const myHeaders = new Headers();
    myHeaders.append("User-Password", `Basic ` + email + password );

    const raw = JSON.stringify({
        "email": email,
        "password": password,
        "dateOfBirth": dateOfBirth
    });

    fetch(api_client + `/auth/registration`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'})
        .then((response) => response.json())
        .then(result => {dispatch({type: SIGN_UP_SUCCESS});
                         dispatch({type: SET_MESSAGE, payload: result.message})})
        .catch(error => dispatch({type: SIGN_UP_FAIL, payload: error}));
}
