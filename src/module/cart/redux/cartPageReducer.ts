import {Action} from "../../../general/redux/Action";
import {ADD_TO_CART, DEC_CART_COUNT, INC_CART_COUNT, REMOVE_FROM_CART} from "./asyncActions";
import Product from "../../product_page/domain/model/Product";

export const cartPageReducer = (
    state = {cartItems: [
        {cartItem: {
                idProduct: "7114",
                image: "/src/images/t-shirt-7114.png",
                title: "Basic t-shirt",
                color: "Purple",
                size: "L / 14 US",
                price: 55
            }, count: 1},
         {cartItem: {
                idProduct: "7142",
                image: "/src/images/t-shirt-7142.png",
                title: "Basic t-shirt",
                color: "Black with print",
                size: "L / 14 US",
                price: 35
            }, count: 1},

        ],
        idCart: "0000"},
    action: Action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            let cartProducts = state.cartItems
            const productIndex: number = cartProducts.findIndex(idProduct => idProduct.cartItem.idProduct == action.payload.idProduct);
            let newCartItems  = cartProducts
                if (productIndex !== -1) {
                    newCartItems[productIndex].count += 1;
                    return {...state, cartItems: newCartItems}
                } else {
                   return state.cartItems.push({...action.payload, amount: 1})
                }
        case REMOVE_FROM_CART:
            let cartGoods = state.cartItems
            const cartProdIndex: number = cartGoods.findIndex(product => product.cartItem.idProduct === action.payload)
            let newCartGoods  = cartGoods
            if (newCartGoods[cartProdIndex].count > 1) {
                newCartGoods[cartProdIndex].count -= 1;
                return {...state, cartItems: newCartGoods}
            } else {
                newCartGoods = cartGoods.filter(product => product.cartItem.idProduct !== action.payload)
                return {...state, cartItems: newCartGoods}
            }
        case INC_CART_COUNT:
            let incGoods = state.cartItems
            const incIndex: number = incGoods.findIndex(product => product.cartItem.idProduct === action.payload)
            incGoods[incIndex].count += 1
            return {...state, cartItems: incGoods}
        case DEC_CART_COUNT:
            let decGoods = state.cartItems
            const decIndex: number = decGoods.findIndex(product => product.cartItem.idProduct === action.payload)
            decGoods[decIndex].count -= 1
            return {...state, cartItems: decGoods}
        default:
            return state;
    }
};

//export const getCartProducts = (state: st) => state.cart

