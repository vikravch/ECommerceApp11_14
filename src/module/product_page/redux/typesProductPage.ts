import Product from "../domain/model/Product";

export interface ProductPageStore{
    product: Product,
    isLoading: boolean,
}

export interface LandingPageStore{
    product: Product,
    isLoading: boolean,
}