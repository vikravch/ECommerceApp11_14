import apiClient from "../../../general/data/api_client";
import User from "../domain/model/typesUserPage";

const inputString = "user@go.com:Pasword10";
const base64Encoded = btoa(inputString);


export default class AuthRepository {

    async signIn(email: string, pass: string): Promise<any> {

        const headers = {
            'AUTHORIZATION': `Basic ${btoa(`${email}:`+`${pass}`)}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await apiClient.post<any>('/auth/login', {}, {headers});
            console.log("signIn");
            console.log(response.data);
            console.log(response.headers);
            const AccessToken = response.headers.AccessToken
            console.log(AccessToken)
           // dispatch({type: LOGIN_SUCCESS, payload: data})
            // setter
            return new User(response.headers.accesstoken, response.headers.refreshtoken, response.data.email,
                response.data.role);
        }
        catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }
    }

    async signUp(email: string, pass: string, dateOfBirth: string, name: string, surname: string): Promise<any> {
        const data = JSON.stringify({
            "birthDate": dateOfBirth,
            "name": name,
            "surname": surname
        });

        const headers = {
            'User-Password': `Basic ${btoa(`${email}:`+`${pass}`)}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await apiClient.post<any>('/auth/registration', data, {headers});
            console.log("signUp");
            console.log(response);
            // setter
            return response.data;
        } catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }
    }

        //     const raw = JSON.stringify({
        //         "birthDate": "1999-01-01",
        //         "name": "Name",
        //         "surname": "Surname"
        //     });
        //
        //     var myHeaders = new Headers();
        //     myHeaders.append("User-Password", "Basic dXNlckBnb28uY29tOlBhc3N3b3JkMTA=");
        //     myHeaders.append("Content-Type", "application/json");
        //
        //     const requestOptions: RequestInit = {
        //         method: 'POST',
        //         headers: myHeaders,
        //         body: raw,
        //         redirect: 'follow' // Ensure 'redirect' has the correct type
        //     };
        //
        //     fetch("https://ecommerce2-sport-production.up.railway.app/auth/registration", requestOptions)
        //         .then(response => response.text())
        //         .then(result => console.log(result))
        //         .catch(error => console.log('error', error));
        //
        // }

    //     var axios = require('axios');
    //     var data = '{\r\n    "birthDate": "1999-01-01",\r\n    "name": "Name",\r\n    "surname": "Surname"\r\n}';
    //
    //     var config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'localhost:8181/auth/registration',
    //         headers: {
    //             'User-Password': 'Basic dXNlckBnbWFpbC5jb206UGFzc3dvcmQx'
    //         },
    //         data: data
    //     };
    //
    //     axios(config)
    //         .then(function (response: ApiResponseSignUp) {
    //             console.log(JSON.stringify(response.role));
    //         })
    //         .catch(function (error: Error) {
    //             console.log(error);
    //         });
    // }
}