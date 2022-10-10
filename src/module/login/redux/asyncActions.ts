import {Dispatch} from "react";

export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';

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