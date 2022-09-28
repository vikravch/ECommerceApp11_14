import CartProduct from "../domain/model/CartProduct";

export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const CHANGE_COUNT = "change_count"
export const CHANGE_SIZE = "change_size"
export const CLEAR_CART = "clear_cart"

export const addToCartAction = (cartItem: CartProduct) => ({
    type: ADD_TO_CART,
    payload: cartItem
});

export const changeCountAction = (idProduct: string, count: number) => ({
    type: CHANGE_COUNT,
    payload: {idProduct, count}
});

export const changeSizeAction = (idProduct: string, size: string) => ({
    type: CHANGE_SIZE,
    payload: {idProduct, size}
});

export const removeFromCartAction = (idProduct:string) => ({
    type: REMOVE_FROM_CART,
    payload: idProduct
});

export const clearCartAction = () => ({
    type: CLEAR_CART
})
