import CartProduct from "../domain/model/CartProduct";

export interface Shipping{
    shipping_id: string,
    shipping_method: string,
    shipping_summ: number
}

export interface Promocode{
    promocode_id: string,
    percent: number,
    promocode_summ: number
}

export interface CartPageStore{
    cartItems: Array<CartProduct>,
    cartCount: number,
    cartTotal: number
    isLoading: boolean
}