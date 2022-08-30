import {Action} from "../../../general/redux/Action";
import {ADD_TO_CART, DEC_CART_COUNT, INC_CART_COUNT, REMOVE_FROM_CART} from "./asyncActions";
import Product from "../../product_page/domain/model/Product";
import cartPage from "../presentation/CartPage";
import CartProduct from "../domain/model/CartProduct";

export const cartPageReducer = (
    state = {cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")}, //
    action: Action
) => {
    switch (action.type) {
        case ADD_TO_CART:

            console.log(JSON.stringify(state.cartItems));
            const cartProducts: Array<CartProduct> = state.cartItems
            const productIndex: number = cartProducts.findIndex((item => item.idProduct == action.payload.idProduct))
            let newCartItems  = cartProducts
            if (productIndex !== -1) {
                newCartItems[productIndex].count += 1;
                console.log("Cart REDUCER count : " + newCartItems[productIndex].count)
                return {...state, cartItems: newCartItems}
            } else {
                return state.cartItems.push({...action.payload, count: 1})
            }
        case REMOVE_FROM_CART:
            let cartGoods: Array<CartProduct> = state.cartItems
            const cartProdIndex: number = cartGoods.findIndex(((item: { idProduct: string; }) => item.idProduct === action.payload))
            let newCartGoods  = cartGoods
            if (newCartGoods[cartProdIndex].count > 1) {
                newCartGoods[cartProdIndex].count -= 1;
                return {...state, cartItems: newCartGoods}
            } else {
                newCartGoods = cartGoods.filter((product: {idProduct: string; }) => product.idProduct !== action.payload)
                return {...state, cartItems: newCartGoods}
            }
        case INC_CART_COUNT:
            let incGoods = state.cartItems
            const incIndex: number = incGoods.findIndex((product: { idProduct: string;}) => product.idProduct === action.payload)
            incGoods[incIndex].count += 1
            return {...state, cartItems: incGoods}
        case DEC_CART_COUNT:
            let decGoods = state.cartItems
            const decIndex: number = decGoods.findIndex((product: { idProduct: string; }) => product.idProduct === action.payload)
            decGoods[decIndex].count -= 1
            return {...state, cartItems: decGoods}
        default:
            return state;
    }
};

//const cartItems = store.getState().cartPage.cartItems.slice();
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


//export const getCartProducts = (state: st) => state.cart

// {      [idProduct: "7114",
//         image: "/src/images/t-shirt-7114.png",
//         title: "Basic t-shirt",
//         color: "Purple",
//         size: "L / 14 US",
//         price: 55,
//         count: 1],
//        [
//         idProduct: "7142",
//         image: "/src/images/t-shirt-7142.png",
//         title: "Basic t-shirt",
//         color: "Black with print",
//         size: "L / 14 US",
//         price: 35,
//         count: 1
//            ]}

