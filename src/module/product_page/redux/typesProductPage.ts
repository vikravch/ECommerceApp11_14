import Product from "../domain/model/Product";
import CartProduct from "../../cart/domain/model/CartProduct";

export interface ProductPageStore{
    product: Product,
    isLoading: boolean,
    // cartProduct: CartProduct
}