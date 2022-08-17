import Product from "../../product_page/domain/model/Product";
import store from "../../../general/redux/store";
import {CartPageStore, CartProduct} from "./typesCartPage";
import cartPage from "../presentation/CartPage";
import {Action} from "../../../general/redux/Action";

export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const INC_CART_COUNT = "inc_cart_count"
export const DEC_CART_COUNT = "dec_cart_count"

export const addToCartAction = (cartItems:Product) => ({
    type: ADD_TO_CART,
    payload: cartItems
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


