import Product from "../model/Product";
import Repository from "../../data/fake_api/ProductPageFakeRepository";

export default async function getProductDetailsFake():Promise<Product>{
    // return new Repository().getProductFake();
     return new Repository().getProductDetails("1111");
}