import CartProduct from "../../../cart/domain/model/CartProduct";
// Input - response body
export default class Order{
    createdAt: string;
    deliveryDate: string;
    orderId: string;
    orderLines: Array<CartProduct>;
    orderStatus: string;
    paymentMethod: string; //Alena add ("visa"/"mastercard"/"paypal")
    paymentStatus: string;
    totalPrice: string; //Alena add
    updatedAt: string;

    constructor(json: any) {
        this.createdAt = json.createdAt;
        this.deliveryDate = json.deliveryDate;
        this.orderId = json.orderId;
        this.orderLines = json.cartItems;
        this.orderStatus = json.orderStatus;
        this.paymentMethod = json.paymentMethod;
        this.paymentStatus = json.paymentStatus;
        this.totalPrice = json.totalPrice;
        this.updatedAt = json.updatedAt;
    }
}

let dateNow = new Date();
let dateAll = new Date();
dateAll.setMonth(dateNow.getMonth() - 25);
export const getOrder1Str = `{"createdAt": ${Number(dateAll).toString()},` +
    '"deliveryDate": "1655645937281",' +
    '"orderId": "12345-001",' + // need number
    '"orderLines": [' +
        '{"color": "Black with print",' +
        '"count": "1",' +
        '"idProduct": "1234512",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L"}' +
    '],' +
    '"orderStatus": "Canceled",' + //accepted/approved/canceled/dispatched/done/returned
    '"paymentMethod": "visa",' +
    '"paymentStatus": "paid",' + //pending
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}'; // for sorting

let dateLastYear = new Date();
dateLastYear.setMonth(dateNow.getMonth() - 10);
export const getOrder2Str = `{"createdAt": ${Number(dateLastYear).toString()},` +
    '"deliveryDate": "1653334937281",' +
    '"orderId": "12345-002",' +
    '"orderLines": [' +
        '{"color": "White",' +
        '"count": "1",' +
        '"idProduct": "1111111",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Pants",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"count": "1",' +
        '"idProduct": "2222222",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"count": "1",' +
        '"idProduct": "2222223",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"count": "1",' +
        '"idProduct": "2222224",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Panties",' +
        '"size": "L"}' +
    '],' +
    '"orderStatus": "Canceled",' +
    '"paymentMethod": "mastercard",' +
    '"paymentStatus": "paid",' +
    '"totalPrice": "150.1",' +
    '"updatedAt": "16592229347452"}';

let dateLast6Month = new Date();
dateLast6Month.setMonth(dateNow.getMonth() - 4);
export const getOrder3Str = `{"createdAt": ${Number(dateLast6Month).toString()},` +
    '"deliveryDate": "1650009997281",' +
    '"orderId": "12345-003",' +
    '"orderLines": [' +
        '{"color": "Black",' +
        '"count": "1",' +
        '"idProduct": "32132122",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Strings",' +
        '"size": "L"},' +
        '{"color": "Purple",' +
        '"count": "1",' +
        '"idProduct": "2223344",' +
        '"product_thumb": "./../../../images/t-shirt-7114.png",' +
        '"product_title": "Toilet paper",' +
        '"size": "L"}' +
    '],' +
    '"orderStatus": "Done",' +
    '"paymentMethod": "paypal",' +
    '"paymentStatus": "paid",' +
    '"totalPrice": "100.",' +
    '"updatedAt": "16592229347452"}';

let dateLastMonth = new Date();
dateLastMonth.setDate(dateNow.getDate() - 14);
export const getOrder4Str = `{"createdAt": ${Number(dateLastMonth).toString()},` +
    '"deliveryDate": "1659234931111",' +
    '"orderId": "12345-004",' +
    '"orderLines": [' +
        '{"color": "Black or white",' +
        '"count": "1",' +
        '"idProduct": "1234567",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L"},' +
        '{"color": "Deep Purple",' +
        '"count": "1",' +
        '"idProduct": "4332345",' +
        '"product_thumb": "./../../../images/t-shirt-7142.png",' +
        '"product_title": "Sunglasses",' +
        '"size": "L"}' +
    '],' +
    '"orderStatus": "On the way",' +
    '"paymentMethod": "visa",' +
    '"paymentStatus": "paid",' +
    '"totalPrice": "99.0",' +
    '"updatedAt": "16592229347452"}';

export const orders = `[${getOrder1Str}, ${getOrder2Str}, ${getOrder3Str}, ${getOrder4Str}]`;

//let date2 = new Date(Number(Date.now().toString()));
//let date3 = dateNow.toDateString();