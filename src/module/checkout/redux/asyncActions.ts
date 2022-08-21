import Order from "../domain/model/Order";

export const CREATE_ORDER = "create_order";
export const FETCH_ORDERS = "fetch_orders"

export const createOrderAction = (data:Order) => ({
    type: CREATE_ORDER,
    payload: data
});

export const fetchOrdersAction = (data:Order) => ({
    type: FETCH_ORDERS,
    payload: data
});