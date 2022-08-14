
// mirage.js
import ProductPageRepository from "../../../product_page/domain/ProductPageRepository";
import Product from "../../../product_page/domain/model/Product";

export default class ProductPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {
        // fetch ???
        return new Promise((resolve => {
            resolve(new Product("123"));
        }));
    }

}