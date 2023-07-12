import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

export default interface LandingPageRepository{
    getNewArrivals: (pageNumber: number)=> Promise <Array<ProductPreviewInfo>>;
}