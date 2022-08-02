import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
// mirage.js
export default class ProductPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
        // fetch ???
        return new Promise((resolve => {
            resolve(new Product("123"));
        }));
    }

}