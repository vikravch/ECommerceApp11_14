import React from 'react';
import './../presentation/profileStyle.css';

const LoginPage = () => {
    return (
        <div className={"fw-500 fs-1"}>Please login or signup :D</div>
    );
};

export default LoginPage;
// let userJson = {
//     "user": {
//         "createdAt": "1659222937281",
//         "defaultAddress": {
//             "address": "2464 Royal Ln. Mesa, New Jersey",
//             "country": "US",
//             "zipCode": "45463"
//         },
//         "email": "debbie.baker@gmail.com",
//         "id": "12345",
//         "name": "Debbie",
//         //"password": srting
//         "payment": {
//             "id": "1234123412342154",
//             "numberForView": "2154"
//             "type": "masterCard"
//         },
//         "phone": "6035550123",
//         "subscribe": "true",
//         "surname": "Baker",
//         "updatedAt": "1659223999234",
//     }
// }
//
// let getOrdersRequestWithUID = {
//     "orders": {
//         "0": {
//             "createdAt": "16592229340002", // sort by date
//             "deliveryDate": "1659234937281",
//             "financialStatus": "paid",
//             "fulfillmentStatus": "delivered",
//             "orderLines": {
//                 "0": {
//                     "article": "7142",
//                     "color": "Black with print",
//                     "idPos": "1234512",
//                     "images": {
//                         "thumb": "5noda61589575158.jpg"
//                     },
//                     "quantity": "1",
//                     "size": "L",
//                     "sizeUS": "14",
//                     "subcategory": "Basic T-shirt"
//                 },
//                 "1": {
//                     "article": "7142",
//                     "color": "Black with print",
//                     "idPos": "1234512",
//                     "images": {
//                         "thumb": "5noda61589575158.jpg"
//                     },
//                     "quantity": "1",
//                     "size": "L",
//                     "sizeUS": "14",
//                     "subcategory": "Basic T-shirt"
//                 },
//             },
//             "payment":{
//                 "paymentMethod": "visa",
//             },
//             "totalPrice": "230.2",
//         }
//     },
// }
// // or I must make three requests to get data - get uid -> get orders -> get products??
//
// let orderJson = {
//     "order": {
//         "acceptedAt": "16592229342289",
//         "comment": "I wish pay less and get more. My house is red.",
//         "createdAt": "16592229340002",
//         "deliveryDate": "1659234937281",
//         "discount": "24.80",
//         "financialStatus": "paid", //pending
//         "fulfillmentStatus": "new", //accepted/approved/dispatched/delivered/declined/returned
//         "margin": "1.00", // payment visa
//         "orderId": "5678",
//         "orderLines": {
//             0: {
//                 "color": "Black with print",
//                 "idPos": "1234512",
//                 "price": "50.00",
//                 "quantity": "1",
//                 "salePrice": "39.99",
//                 "size": "L",
//                 "sizeUS": "14",
//                 "subcategory": "Basic T-shirt",
//                 "totalPrice": "39.99",
//                 "weight": "217.0"
//             },
//             1: {
//                 "color": "Purple",
//                 "idPos": "1234512",
//                 "price": "50.00",
//                 "quantity": "1",
//                 "salePrice": "39.99",
//                 "size": "L",
//                 "sizeUS": "14",
//                 "subcategory": "Basic T-shirt",
//                 "totalPrice": "39.99",
//                 "weight": "217.0"
//             }
//         },
//         "paidAt": "16592229347452",
//         "payment":{
//             "paymentMethod": "visa",
//             "numberForView": "1564"
//         },
//         "promocode": "CXDPsale",
//         "promocodeSale": "10.00",
//         "shippingAddress": {
//             "address": "2464 Royal Ln. Mesa, New Jersey",
//             "contacts": {
//                 "email": "debbie.baker@gmail.com",
//                 "name": "Debbie",
//                 "phone": "6035550123",
//                 "surname": "Baker",
//             },
//             "country": "US",
//             "wishes": "I wish pay less and get more. My house is red.",
//             "zipCode": "45463"
//         },
//         "shippingMethod": "Standard",
//         "shippingPrice": "7.00",
//         "subtotalPrice": "248.00",
//         "totalPrice": "230.2",
//         "uid": "12345",
//         "updatedAt": "16592229347452"
//     }
// }
//
// let productJson = {
//     "article": "7142", //the same another color
//     "brand": "Levi's",
//     "category": "T-shirts",
//     "collection": "New Arrivals",
//     "color": "Yellow",
//     "createdAt": "16592229340002",
//     "details": {
//         "description": "Standard fit for a relaxed, easy feel",
//         "fabric": "100% cotton",
//         "manufacture": "Imported",
//         "shown": "Cactus Flower",
//         "style": "CU8914-564",
//         "washType": "Machine wash"
//     },
//     "idPos": "1234512",
//     "images": {
//         "img1": "5noda61589575638.jpg",
//         "img2": "5noda61589579376.jpg",
//         "img3": "5noda61589579007.jpg",
//         "imgGeneral": "5noda6158958790.jpg",
//         "thumb": "5noda61589575158.jpg",
//     },
//     "gender": "Men",
//     "price": "50.00",
//     "rates": "2.45",
//     "salePercent": "15",
//     "salePrice": "39.99",
//     "season": "Demi-season",
//     "shippingAndReturns": "10 days after receiving", //?
//     "size": "L",
//     "sizeUS": "14",
//     "style": "A-line",
//     "subcategory": "Basic T-shirt",
//     "title": "The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",
//     "updatedAt": "16592229347452",
//     "weight": "217.0"
// }