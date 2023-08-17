import Order from "../domain/model/Order";
import {CLEAR_CART} from "../../cart/redux/asyncActions";
import {Dispatch} from "react";
import api_client from "../../../general/data/api_client";

export const CREATE_ORDER = "create_order";

export const createOrderAction = (data:Order) => ({
    type: CREATE_ORDER,
    payload: data
});

export const createOrder = (data:Order):any => async (dispatch:Dispatch<any>) => {
    fetch(`${api_client}order_add`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: CREATE_ORDER, payload: data });
            localStorage.removeItem("cartItems");
            dispatch({ type: CLEAR_CART });})
        .catch(error => console.log('error in fetch order_add', error));
};