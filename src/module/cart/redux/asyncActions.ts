import Product from "../../product_page/domain/model/Product";
import CartProduct from "../domain/model/CartProduct";

export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const INC_CART_COUNT = "inc_cart_count"
export const DEC_CART_COUNT = "dec_cart_count"
export const CHANGE_COUNT = "change_count"
export const CHANGE_SIZE = "change_size"

export const addToCartAction = (cartItem:CartProduct) => ({
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

export const incrementCartCount = (idProduct: string) => ({
        type: INC_CART_COUNT,
        payload:idProduct
    }
);

export const decrementCartCount = (idProduct: string) => ({
    type: DEC_CART_COUNT,
    payload: idProduct
});

// export const addToCart = (product:Product) => {
//         // return (dispatch: Function) => {
//             const cartItems = store.getState().cartPage.cartItems.slice();
//             let alreadyExists = false;
//             cartItems.forEach((x: CartProduct) => {
//                 if (x.idProduct === product.idProduct) {
//                     alreadyExists = true;
//                     x.count++;
//                 }
//             });
//             if (!alreadyExists) {
//                 cartItems.push({...product, count: 1});
//             }
//             //putCartItems(cartItems);
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         // }
// };


