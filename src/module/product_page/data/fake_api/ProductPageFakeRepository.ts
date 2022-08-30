import ProductPageRepository from "../../domain/ProductPageRepository";
import Product from "../../domain/model/Product";
import {tempProductData} from "../tempData";
// mirage.js
export default class ProductPageFakeRepository implements ProductPageRepository{
    async getProductDetails(productId: string): Promise<Product> {

        // fetch ???
        // res to new Product()
        return new Promise((resolve => {
            resolve(new Product(tempProductData));
        }));
        console.log("async getProductDetails()")
    }
    async getProductFake(): Promise<Product> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Product(tempProductData))
            }, 2000);
        });
        console.log("async getProductFake()")
    }
}
