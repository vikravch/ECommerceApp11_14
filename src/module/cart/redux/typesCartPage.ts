import Product from "../../product_page/domain/model/Product";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";

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

export interface CartProduct extends ProductPreviewInfo{
    count: number,
    color: string,
    size: string
}

export interface CartPageStore{
    cartItems: Array<CartProduct>
}