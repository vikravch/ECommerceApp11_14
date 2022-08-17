import Order from "../domain/model/Order";

export const CREATE_ORDER = "create_order";

export const createOrderAction = (data:Order) => ({
    type: CREATE_ORDER,
    payload: data
});