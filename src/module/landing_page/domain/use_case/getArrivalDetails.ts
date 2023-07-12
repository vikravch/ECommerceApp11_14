import Product from "../model/Product";
import Repository from "../../data/fake_api/LandingPageFakeRepository";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

export default async function getArrivalDetails(pageNumber: number):Promise<Array<ProductPreviewInfo>>{
    return new Repository().getNewArrivals(0);
}