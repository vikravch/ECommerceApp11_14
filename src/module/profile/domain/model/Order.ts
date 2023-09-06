import OrderProduct from "./OrderProduct";

export default class Order{
    created_at: string;
    delivery_date: string;
    order_id: string;
    order_lines: Array<OrderProduct>;
    order_status: string;
    payment_method: string;
    shipping_method: string;
    total_price: string;

    constructor(json: Order) {
        this.created_at = json.created_at;
        this.delivery_date = json.delivery_date;
        this.order_id = json.order_id;
        this.order_lines = json.order_lines;
        this.order_status = json.order_status;
        this.payment_method = json.payment_method;
        this.shipping_method = json.shipping_method;
        this.total_price = json.total_price;
    }
}

let dateNow = new Date();
let dateAll = new Date();
dateAll.setMonth(dateNow.getMonth() - 25);
export const getOrder1Str = `{"created_at": ${Number(dateAll).toString()},` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "123451",' + // need number
    '"order_lines": [' +
        '{"color": "Black with print",' +
        '"quantity": "1",' +
        '"product_id": "1234512",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L"}' +
    '],' +
    '"order_status": "CANCELED",' + // "CANCELED", "PAID", "ASSEMBLY", "ON_THE_WAY", "DONE"
    '"payment_method": "VISA",' +
    '"shipping_method": "STANDARD",' + //PREMIUM
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}';

let dateLastYear = new Date();
dateLastYear.setMonth(dateNow.getMonth() - 10);
export const getOrder2Str = `{"created_at": ${Number(dateLastYear).toString()},` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "123452",' +
    '"order_lines": [' +
        '{"color": "White",' +
        '"quantity": "1",' +
        '"product_id": "1111111",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Pants",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"quantity": "1",' +
        '"product_id": "2222222",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"quantity": "1",' +
        '"product_id": "2222223",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"quantity": "1",' +
        '"product_id": "2222224",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"}' +
    '],' +
    '"order_status": "ASSEMBLY",' +
    '"payment_method": "MASTERCARD",' +
    '"shipping_method": "PREMIUM",' +
    '"total_price": "150.1"}';

let dateLast6Month = new Date();
dateLast6Month.setMonth(dateNow.getMonth() - 4);
export const getOrder3Str = `{"created_at": ${Number(dateLast6Month).toString()},` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "123453",' +
    '"order_lines": [' +
        '{"color": "Black",' +
        '"quantity": "1",' +
        '"product_id": "32132122",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Strings",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"quantity": "1",' +
        '"product_id": "2223344",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Toilet paper",' +
        '"size": "L"}' +
    '],' +
    '"order_status": "DONE",' +
    '"payment_method": "PAY_PAL",' +
    '"shipping_method": "STANDARD",' +
    '"total_price": "100."}';

let dateLastMonth = new Date();
dateLastMonth.setDate(dateNow.getDate() - 14);
export const getOrder4Str = `{"created_at": ${Number(dateLastMonth).toString()},` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "123454",' +
    '"order_lines": [' +
        '{"color": "Black or white",' +
        '"quantity": "1",' +
        '"product_id": "1234567",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L"},' +
        '{"color": "Deep Purple",' +
        '"quantity": "1",' +
        '"product_id": "4332345",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Sunglasses",' +
        '"size": "L"}' +
    '],' +
    '"order_status": "ON_THE_WAY",' +
    '"payment_method": "VISA",' +
    '"shipping_method": "PREMIUM",' +
    '"total_price": "99.0"}';

export const orders = `[${getOrder1Str}, ${getOrder2Str}, ${getOrder3Str}, ${getOrder4Str}]`;
export const orders2 = `[${getOrder1Str}]`;