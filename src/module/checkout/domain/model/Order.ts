import Cart from "../../../cart/domain/model/Cart";
import CartProduct from "../../../cart/domain/model/CartProduct"
// Output / request body
export default class Order {
    orderId : string;
    customerId: string;
    cartItems: CartProduct;
    createdAt: string;
    deliveryAddr: string;
    deliveryDate: string;
    shippingCost: number;
    paymentStatus: string;
    orderStatus: string;
// orderCost:number

    constructor(orderId:string, customerId: string, cartItems:CartProduct, createdAt: string, deliveryAddr:string, deliveryDate: string,
                shippingCost: number, paymentStatus: string, orderStatus: string) {
        this.orderId = orderId
        this.customerId = customerId
        this.cartItems = cartItems;
        this.createdAt = createdAt
        this.deliveryAddr = deliveryAddr
        this.deliveryDate = deliveryDate
        this.shippingCost = shippingCost
        this.paymentStatus = paymentStatus
        this.orderStatus = orderStatus
    }
}