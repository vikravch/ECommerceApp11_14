import {Action} from "../../../general/redux/Action";
import {ADD_TO_CART, CHANGE_COUNT, CHANGE_SIZE, CLEAR_CART, REMOVE_FROM_CART, SET_CART} from "./asyncActions";
import CartProduct from "../domain/model/CartProduct";

export const calcTotalPrice = (items: CartProduct[]) => {
    return items.reduce((sum, obj) => +obj.price * obj.quantity + sum, 0).toFixed(2);
};

const oldCart: Array<CartProduct> = JSON.parse(localStorage.getItem("cartItems") || "[]");
const oldCount = oldCart.length;
const oldCartTotal = calcTotalPrice(oldCart);

export const cartPageReducer = (
    state = {cartItems: oldCart, cartCount: oldCount, cartTotal: oldCartTotal}, //
    action: Action
) => {
    switch (action.type) {
        case SET_CART:
            //TODO manage this return
            console.log(action.payload)
            return {...state, cartItems: action.payload.cart, cartCount: parseFloat(action.payload.subtotal_price), cartTotal:  parseFloat(action.payload.total_price)}

        case ADD_TO_CART:
            let cartProducts: Array<CartProduct> = [...state.cartItems]
            const productIndex: number = cartProducts.findIndex(
                (item => item.product_id === action.payload.product_id && item.size == action.payload.size))
            if (productIndex !== -1) {
                cartProducts[productIndex].quantity += 1;
                const totalSum = calcTotalPrice(cartProducts)
                localStorage.setItem("cartItems", JSON.stringify(cartProducts))
                return {...state, cartItems: cartProducts, cartTotal: totalSum}
            } else {
                cartProducts.push(action.payload)
                const totalSum = calcTotalPrice(cartProducts)
                localStorage.setItem("cartItems", JSON.stringify( cartProducts))
                return {...state, cartItems: cartProducts, cartCount: state.cartItems.length, cartTotal: totalSum}
            }
        case REMOVE_FROM_CART:
            let cartGoods: Array<CartProduct> = state.cartItems
            //const cartProdIndex: number = cartGoods.findIndex(((item: { idProduct: string; }) => item.idProduct === action.payload))
                cartGoods = cartGoods.filter((product: {product_id: string; }) => product.product_id !== action.payload)
                const total = calcTotalPrice(cartGoods)
                localStorage.setItem("cartItems", JSON.stringify(cartGoods))
                return {...state, cartItems: cartGoods, cartCount: state.cartItems.length, cartTotal: total}
        case CHANGE_COUNT:
                let newGoods =  state.cartItems
                const changeIndex: number = newGoods.findIndex((product: { product_id: string; }) => product.product_id === action.payload.idProduct)
                newGoods[changeIndex].quantity = action.payload.count
                const totalPrice = calcTotalPrice(newGoods)
                localStorage.setItem("cartItems", JSON.stringify(newGoods))
                return {...state, cartItems: newGoods, cartTotal: totalPrice}
        case CHANGE_SIZE:
                let sGoods =  state.cartItems
                const sizeIndex: number = sGoods.findIndex((product: { product_id: string; }) => product.product_id === action.payload.idProduct)
                sGoods[sizeIndex].size = action.payload.size
                localStorage.setItem("cartItems", JSON.stringify(sGoods))
                return {...state, cartItems: sGoods}
        case CLEAR_CART: {
            localStorage.removeItem("cartItems");
            return {...state, cartItems: [], cartTotal: 0, cartCount: 0}
        }
        default:
            // return {state, cartCount: state.cartItems.length, cartTotal: calcTotalPrice(state.cartItems)};
            return state;
    }
};



