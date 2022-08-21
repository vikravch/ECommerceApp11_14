import CartProduct from "../../cart/domain/model/CartProduct";

export interface Order {
    idOrder : string;
    customerId: string;
    cartItems: Array<CartProduct>
    orderDate: string;
    deliveryAddr: string;
}