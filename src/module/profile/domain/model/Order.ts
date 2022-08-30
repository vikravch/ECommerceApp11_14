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
export const getOrder1Str = '{"createdAt": "16592229340002",' +
    '"deliveryDate": "1659234937281",' +
    '"orderId": "12345-001",' + // need number
    '"orderLines": [' +
        '{"color": "Black with print",' +
        '"count": "1",' +
        '"idProduct": "1234512",' +
        '"product_thumb": "img_1111.jpg",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L-14 US"},' +
        '{"color": "Purple",' +
        '"count": "1",' +
        '"idProduct": "1234512",' +
        '"product_thumb": "img_1111.jpg",' +
        '"product_title": "Basic T-shirt",' +
        '"size": "L-14 US"}' +
    '],' +
    '"orderStatus": "new",' + //accepted/approved/canceled/dispatched/done/returned
    '"paymentMethod": "visa",' +
    '"paymentStatus": "paid",' + //pending
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}'; // for sorting

export const getOrder2Str = '{"createdAt": "16592229340002",' +
    '"deliveryDate": "1659234937281",' +
    '"orderId": "12345-002",' +
    '"orderLines": [' +
    '{"color": "Black with print",' +
    '"count": "1",' +
    '"idProduct": "1234512",' +
    '"product_thumb": "img_1111.jpg",' +
    '"product_title": "Basic T-shirt",' +
    '"size": "L-14 US"},' +
    '{"color": "Purple",' +
    '"count": "1",' +
    '"idProduct": "1234512",' +
    '"product_thumb": "img_1111.jpg",' +
    '"product_title": "Basic T-shirt",' +
    '"size": "L-14 US"}' +
    '],' +
    '"orderStatus": "new",' +
    '"paymentMethod": "visa",' +
    '"paymentStatus": "paid",' +
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}';

export const getOrder3Str = '{"createdAt": "16592229340002",' +
    '"deliveryDate": "1659234937281",' +
    '"orderId": "12345-003",' +
    '"orderLines": [' +
    '{"color": "Black with print",' +
    '"count": "1",' +
    '"idProduct": "1234512",' +
    '"product_thumb": "img_1111.jpg",' +
    '"product_title": "Basic T-shirt",' +
    '"size": "L-14 US"},' +
    '{"color": "Purple",' +
    '"count": "1",' +
    '"idProduct": "1234512",' +
    '"product_thumb": "img_1111.jpg",' +
    '"product_title": "Basic T-shirt",' +
    '"size": "L-14 US"}' +
    '],' +
    '"orderStatus": "new",' +
    '"paymentMethod": "visa",' +
    '"paymentStatus": "paid",' +
    '"totalPrice": "230.2",' +
    '"updatedAt": "16592229347452"}';

export const orders = `[${getOrder1Str}, ${getOrder2Str}, ${getOrder3Str}]`;

