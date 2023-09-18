import CartProduct from "../domain/model/CartProduct";
import CartPageFakeRepository from "../data/fake_api/CartPageFakeRepository";
import {CartData} from "../domain/model/Cart";
import {FillCartItems} from "./typesCartPage";

export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const CHANGE_COUNT = "change_count"
export const CHANGE_SIZE = "change_size"
export const CLEAR_CART = "clear_cart"
export const SET_CART = 'set_cart'

export const fillCartOnServer = (token: string, refreshToken: string,  items :Array<FillCartItems>):any => {
    return (dispatch : Function) => {
        console.log("FILL CART")
        const myHeaders = new Headers();
        myHeaders.append("AccessToken", token);
        myHeaders.append("RefreshToken", refreshToken);
        new CartPageFakeRepository().fillCartOnServer(items, token, refreshToken).then((data) => {
            dispatch(setCartData(data))
        })
    }

}
export const getCart = (token: string, refreshToken: string):any => {
    return (dispatch : Function) => {
        const myHeaders = new Headers();
        myHeaders.append("AccessToken", token);
        myHeaders.append("RefreshToken", refreshToken);
        new CartPageFakeRepository().getCartDetails(token, refreshToken).then((data) => {
            dispatch(setCartData(data))
        })
    }
}

export const deleteFromCart = (token: string, refreshToken: string, item: CartProduct):any => {
    return(dispatch : Function) => {
        const extractedData = {
            product_id: item.product_id,
            size: item.size,
            promo_code_value: null
        };
        const myHeaders = new Headers();
        myHeaders.append("AccessToken", token);
        myHeaders.append("RefreshToken", refreshToken);

        new CartPageFakeRepository().deleteCartItem(token, refreshToken, extractedData).then((data) => {
            dispatch(removeFromCartAction(data.product_id))
        })
    }
}

export const setCartData = (data: CartData) => ({
   type: SET_CART,
    payload: data
})
export const addToCartAction = (data: CartProduct) => ({
    type: ADD_TO_CART,
    payload: data
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
