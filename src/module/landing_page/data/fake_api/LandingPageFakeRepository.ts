import ProductPageRepository from "../../domain/LoadingPageRepository";
import Product from "../../domain/model/Product";
// mirage.js
export default class LandingPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
        // fetch ???
        return new Promise((resolve => {
            resolve(new Product("123"));
        }));
    }
}