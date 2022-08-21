import Cart from "../../../cart/domain/model/Cart";
import {CartProduct} from "../../../cart/redux/typesCartPage";

export default class Order {
    orderId : string;
    customerId: string;
    cartItems: CartProduct;
    orderDate: string;
    deliveryAddr: string;
    deliveryDate: string;
    shippingCost: number;
    paymentStatus: string;
    orderStatus: string


    constructor(orderId:string, customerId: string, cartItems:CartProduct, orderDate: string, deliveryAddr:string, deliveryDate: string, shippingCost: number, paymentStatus: string, orderStatus: string) {
        this.orderId = orderId
        this.customerId = customerId
        this.cartItems = cartItems;
        this.orderDate = orderDate
        this.deliveryAddr = deliveryAddr
        this.deliveryDate = deliveryDate
        this.shippingCost = shippingCost
        this.paymentStatus = paymentStatus
        this.orderStatus = orderStatus
    }
}