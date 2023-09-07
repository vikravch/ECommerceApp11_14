import Order from "../../../checkout/domain/model/Order";


export function makeArrayOrders(json: any): Array<Order>{
    let orderFromGet = JSON.parse(json);
    // let res = [];

    console.log("this is res" + orderFromGet);
    return [];
}

// password from 8 to 16 symbols, 1 [a-z], 1 [A-Z], 1 [0-9], no whitespace!

export const profile1 = {
    "address": "",
    "country": "",
    "email": "dwight.schrute@gmail.com",
    "name": "Dwight",
    "phone": "",
    "surname": "Schrute",
    "zipCode": ""
    };

export const profile2 = {
    "address": "2464 Royal Ln. Mesa, New Jersey",
    "country": "US",
    "email": "debbie.baker@gmail.com",
    "name": "Debbie",
    "phone": "6035550123",
    "surname": "Baker",
    "zipCode": "45463"
    };

export const profile3 = {
    "address": "Thornridge Cir. Syracuse, Connecticut, 21",
    "country": "England",
    "email": "bill.sanders@gmail.com",
    "name": "Bill",
    "phone": "2395550108",
    "surname": "Sanders",
    "zipCode": "123456"
    };

//=================================================================
/* TO-DO list for backend

* 3 requests for adding fields in profile: (or one?!)
first. phone
second. address and zipCode
third. country

* edit request for all fields
*/