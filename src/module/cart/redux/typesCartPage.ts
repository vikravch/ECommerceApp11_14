import Product from "../../product_page/domain/model/Product";

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

export interface CartProduct extends Product{
    count: number
}

export interface CartPageStore{
    cartItems: Array<CartProduct>
}