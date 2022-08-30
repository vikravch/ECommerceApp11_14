import {Action} from "../../../general/redux/Action";
import {ADD_TO_CART, CHANGE_COUNT, CHANGE_SIZE, REMOVE_FROM_CART} from "./asyncActions";
import CartProduct from "../domain/model/CartProduct";

// export const calcTotalPrice = (items: CartProduct[]) => {
//     return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
// };

export const cartPageReducer = (
    state = {cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")}, //
    action: Action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartProducts: Array<CartProduct> = state.cartItems
            const productIndex: number = cartProducts.findIndex((item => item.idProduct == action.payload.idProduct))
            let newCartItems  = cartProducts
            if (productIndex !== -1) {
                newCartItems[productIndex].count += 1;
                return {...state, cartItems: newCartItems}
            } else {
                return state.cartItems.push({...action.payload, count: 1})
            }
        case REMOVE_FROM_CART:
            let cartGoods: Array<CartProduct> = state.cartItems
            const cartProdIndex: number = cartGoods.findIndex(((item: { idProduct: string; }) => item.idProduct === action.payload))
            // let newCartGoods  = cartGoods
            // if (newCartGoods[cartProdIndex].count > 1) {
            //     newCartGoods[cartProdIndex].count -= 1;
            //     return {...state, cartItems: newCartGoods}
            // } else {
                cartGoods = cartGoods.filter((product: {idProduct: string; }) => product.idProduct !== action.payload)
                return {...state, cartItems: cartGoods}
            //}
        case CHANGE_COUNT:
                let newGoods =  state.cartItems
                const changeIndex: number = newGoods.findIndex((product: { idProduct: string; }) => product.idProduct === action.payload.idProduct)
                newGoods[changeIndex].count = action.payload.count
                //const totalPrice = calcTotalPrice(newGoods)
                //return {...state, totalPrice: totalPrice, cartItems: newGoods}
                return {...state, cartItems: newGoods}
        case CHANGE_SIZE:
            let sGoods =  state.cartItems
            const sizeIndex: number = sGoods.findIndex((product: { idProduct: string; }) => product.idProduct === action.payload.idProduct)
            sGoods[sizeIndex].size = action.payload.size
            return {...state, cartItems: sGoods}
        default:
            return state;
    }
};



