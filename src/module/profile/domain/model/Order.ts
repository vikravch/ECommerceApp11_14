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

function formatDateToISO(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}

let dateNow = new Date();
let dateAll = new Date();
dateAll.setMonth(dateNow.getMonth() - 25);
export const getOrder1Str = `{"created_at": "${formatDateToISO(dateAll)}",` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "10",' +
    '"order_lines": [' +
        '{"color": "Kelly Green",' +
        '"quantity": "1",' +
        '"product_id": "12",' +
        '"product_thumb": "https://i.imgur.com/6Rv6tkJ.jpg",' +
        '"product_title": "Water-resistant Track Jacket",' +
        '"size": "7"}' +
    '],' +
    '"order_status": "CANCELED",' + // "CANCELED", "PAID", "ASSEMBLY", "ON_THE_WAY", "DONE"
    '"payment_method": "VISA",' +
    '"shipping_method": "STANDARD",' + //PREMIUM
    '"total_price": "230.2"}';

let dateLastYear = new Date();
dateLastYear.setMonth(dateNow.getMonth() - 10);
export const getOrder2Str = `{"created_at": "${formatDateToISO(dateLastYear)}",` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "90",' +
    '"order_lines": [' +
        '{"color": "Platinum",' +
        '"quantity": "1",' +
        '"product_id": "11",' +
        '"product_thumb": "https://i.imgur.com/jxh7Vv6.jpg",' +
        '"product_title": "Performance Windbreaker Jacket",' +
        '"size": "L"},' +
        '{"color": "Peach",' +
        '"quantity": "1",' +
        '"product_id": "22",' +
        '"product_thumb": "https://i.imgur.com/SmNQkQe.jpg",' +
        '"product_title": "Dri-fit Training Tee",' +
        '"size": "XXL"},' +
        '{"color": "Burgundy",' +
        '"quantity": "1",' +
        '"product_id": "23",' +
        '"product_thumb": "https://i.imgur.com/yOIl63G.jpg",' +
        '"product_title": "Dri-fit Training Tee",' +
        '"size": "M"},' +
        '{"color": "Copper",' +
        '"quantity": "1",' +
        '"product_id": "174",' +
        '"product_thumb": "https://i.imgur.com/GPc1aYy.jpg",' +
        '"product_title": "Graphic Print Performance Tee",' +
        '"size": "8"}' +
    '],' +
    '"order_status": "ASSEMBLY",' +
    '"payment_method": "MASTERCARD",' +
    '"shipping_method": "PREMIUM",' +
    '"total_price": "150.1"}';

let dateLast6Month = new Date();
dateLast6Month.setMonth(dateNow.getMonth() - 4);
export const getOrder3Str = `{"created_at": "${formatDateToISO(dateLast6Month)}",` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "120",' +
    '"order_lines": [' +
        '{"color": "Mint Green",' +
        '"quantity": "1",' +
        '"product_id": "21",' +
        '"product_thumb": "https://i.imgur.com/ceJIM09.jpg",' +
        '"product_title": "Soccer Training Jersey",' +
        '"size": "5"},' +
        '{"color": "Yellow",' +
        '"quantity": "1",' +
        '"product_id": "44",' +
        '"product_thumb": "https://i.imgur.com/Cn9sKOm.jpg",' +
        '"product_title": "Basketball One-piece Uniform",' +
        '"size": "XS"}' +
    '],' +
    '"order_status": "DONE",' +
    '"payment_method": "PAY_PAL",' +
    '"shipping_method": "STANDARD",' +
    '"total_price": "100."}';

let dateLastMonth = new Date();
dateLastMonth.setDate(dateNow.getDate() - 14);
export const getOrder4Str = `{"created_at": "${formatDateToISO(dateLastMonth)}",` +
    '"delivery_date": "2023-06-27T16:58:37.274200044",' +
    '"order_id": "123",' +
    '"order_lines": [' +
        '{"color": "Off-White",' +
        '"quantity": "2",' +
        '"product_id": "67",' +
        '"product_thumb": "https://i.imgur.com/k1wYWRr.jpg",' +
        '"product_title": "Basketball Training Shorts",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"quantity": "1",' +
        '"product_id": "45",' +
        '"product_thumb": "https://i.imgur.com/xOdWJdH.jpg",' +
        '"product_title": "Tennis Skirted Bodysuit",' +
        '"size": "4"}' +
    '],' +
    '"order_status": "ON_THE_WAY",' +
    '"payment_method": "VISA",' +
    '"shipping_method": "PREMIUM",' +
    '"total_price": "99.0"}';

export const orders = `[${getOrder1Str}, ${getOrder2Str}, ${getOrder3Str}, ${getOrder4Str}]`;
export const orders2 = `[${getOrder1Str}]`;