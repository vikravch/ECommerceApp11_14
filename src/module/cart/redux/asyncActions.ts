import Product from "../../product_page/domain/model/Product";

export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const INC_CART_COUNT = "inc_cart_count"
export const DEC_CART_COUNT = "dec_cart_count"

export const addToCartAction = (product:Product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCartAction = (idProduct:string) => ({
    type: REMOVE_FROM_CART,
    payload: idProduct
})

export const incrementCartCount = (idProduct: string) => ({
    type: INC_CART_COUNT,
    payload:idProduct
    }
)
export const decrementCartCount = (idProduct: string) => ({
    type: DEC_CART_COUNT,
    payload: idProduct
})

