import Product from "../model/Product";
import Repository from "../../data/fake_api/ProductPageFakeRepository";

export default async function getProductDetails(productId: string):Promise<Product>{
    return new Repository().getProductDetails(productId);
}