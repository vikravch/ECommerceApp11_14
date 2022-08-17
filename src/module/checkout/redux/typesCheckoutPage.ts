import {CartProduct} from "../../cart/redux/typesCartPage";

export interface Order {
    idOrder : string;
    customerId: string;
    cartItems: Array<CartProduct>
    orderDate: string;
    deliveryAddr: string;
}