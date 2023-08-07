import Product from "../domain/model/Product";
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";

export interface ProductPageStore{
    product: Product,
    isLoading: boolean,
    currentPage: number;
    alsoLikeData: ApiResponseProductPreview;
    // cartProduct: CartProduct
}