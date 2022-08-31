import Product from "../model/Product";
import Repository from "../../data/fake_api/ProductPageFakeRepository";

export default async function getProductDetailsFake(productId: string):Promise<Product>{
    let res = await new Repository().getProductDetails(productId);
    if(res.idProduct == ""){
        return Promise.reject("Not valid response");
    } else {
        return Promise.resolve(res);
    }
}