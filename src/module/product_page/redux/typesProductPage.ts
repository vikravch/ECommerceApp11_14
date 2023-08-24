import Product from "../domain/model/Product";
import {ApiResponseProductPreview, PaginationData} from "../../../general/dto/APIResponseTypes";

export interface ProductPageStore{
    product: Product,
    isLoading: boolean,
    currentPage: number;
    alsoLikeData: ApiResponseProductPreview;
    alsoLikePageData: PaginationData;
    // cartProduct: CartProduct
}