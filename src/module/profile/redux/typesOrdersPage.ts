import Order from "../domain/model/Order";

export interface OrdersDetailsStore{
    orders: Array<Order>,
    isLoading: boolean
}