import Product from "../domain/model/Product";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";

// export interface LandingPageStore{
//     product: Product,
//     isLoading: boolean,
// }

export interface LandingPageStore{
    isLoading: boolean;
    data: Array<ProductPreviewInfo>;
    currentPage: number;
}



// export interface ProductPageStore{
//     product: Product,
//     isLoading: boolean,
// }