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

    fetch(api_client + '/auth/login', {
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

//////////////////////////////
    var axios = require('axios');
    var data = '{\r\n    "birthDate": "1999-01-01",\r\n    "name": "Name",\r\n    "surname": "Surname"\r\n}';

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: api_client + 'auth/registration',
        headers: {
            'User-Password': 'Basic dXNlckBnbWFpbC5jb206UGFzc3dvcmQx'
        },
        data : data
    };

    axios(config)
        .then(function (response: any) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
            console.log(error);
        });


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
