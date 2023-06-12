import Order from "../../../checkout/domain/model/Order";


export function makeArrayOrders(json: any): Array<Order>{
    let orderFromGet = JSON.parse(json);
    let res = [];

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
// few orders one by one
export const getOrder1Str = {
    "createdAt": "1600176495836",
    "deliveryDate": "1655645937281",
    "orderId": "12345-001",
    "orderLines": [
        {"color": "Black with print",
        "count": "1",
        "idProduct": "1234512",
        "product_thumb": "", // image base64?
        "product_title": "Basic T-shirt",
        "size": "L"}
    ],
    "orderStatus": "Canceled", //Accepted/Approved/Canceled/Dispatched/Done/Returned
    "paymentMethod": "visa",
    "paymentStatus": "paid", //pending
    "totalPrice": "230.2",
    "updatedAt": "16592229347452"};

export const getOrder2Str = {
    "createdAt": "1639578919200",
    "deliveryDate": "1653334937281",
    "orderId": "12345-002",
    "orderLines": [
        {"color": "White",
        "count": "1",
        "idProduct": "1111111",
        "product_thumb": "",
        "product_title": "Pants",
        "size": "L"},
        {"color": "Purple",
        "count": "1",
        "idProduct": "2222222",
        "product_thumb": "",
        "product_title": "Panties",
        "size": "L"},
        {"color": "Purple",
        "count": "1",
        "idProduct": "2222223",
        "product_thumb": "",
        "product_title": "Panties",
        "size": "L"},
        {"color": "Purple",
        "count": "1",
        "idProduct": "2222224",
        "product_thumb": "",
        "product_title": "Panties",
        "size": "L"}
    ],
    "orderStatus": "Canceled",
    "paymentMethod": "mastercard",
    "paymentStatus": "paid",
    "totalPrice": "150.1",
    "updatedAt": "16592229347452"};

export const getOrder3Str = {
    "createdAt": "1655300478631",
    "deliveryDate": "1657009997281",
    "orderId": "12345-003",
    "orderLines": [
        {"color": "Black",
        "count": "1",
        "idProduct": "32132122",
        "product_thumb": "",
        "product_title": "Strings",
        "size": "L"},
        {"color": "Purple",
        "count": "1",
        "idProduct": "2223344",
        "product_thumb": "",
        "product_title": "Toilet paper",
        "size": "L"}
    ],
    "orderStatus": "Done",
    "paymentMethod": "paypal",
    "paymentStatus": "paid",
    "totalPrice": "100.",
    "updatedAt": "16592229347452"}

export const getOrder4Str = {
    "createdAt": "1664632065518",
    "deliveryDate": "1694234931111",
    "orderId": "12345-004",
    "orderLines": [
        {"color": "Black or white",
        "count": "1",
        "idProduct": "1234567",
        "product_thumb": "",
        "product_title": "Basic T-shirt",
        "size": "L"},
        {"color": "Deep Purple",
        "count": "1",
        "idProduct": "4332345",
        "product_thumb": "",
        "product_title": "Sunglasses",
        "size": "L"}
    ],
    "orderStatus": "On the way",
    "paymentMethod": "visa",
    "paymentStatus": "paid",
    "totalPrice": "99.0",
    "updatedAt": "16592229347452"};

//=================================================================
// this how I get orders by token
export const ordersForProfile1 = [getOrder1Str, getOrder2Str, getOrder3Str, getOrder4Str];
export const ordersForProfile2 = [getOrder4Str];
export const ordersForProfile3 = [];

//=================================================================
/* TODO list for backend
* get profiles, orders with token requests.
* why for get orders we need to make one more request if it store in one space?
* add for registration required fields - name, surname.

* validation of password - from 8 to 16 symbols, 1 [a-z], 1 [A-Z], 1 [0-9],
no whitespace!, in sign in, sign up, restore requests.

* what is date of birth for registration?

* 3 requests for adding fields in profile: (or one?!)
first. phone
second. address and zipCode
third. country

* edit request for all fields

* restore password request*/

/*
    "email":"user1@mail.com",
    "password":"test"
*/